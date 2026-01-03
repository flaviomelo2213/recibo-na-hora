export const runtime = "edge";

type RewriteRequest = {
  text: string;
  kind?: "lai" | "contrato" | "orcamento" | "recibo" | "geral";
  tone?: "formal" | "simples" | "profissional";
  geminiApiKey: string; // BYOK obrigatório
  model?: string;       // opcional (ex.: "gemini-2.5-flash")
};

function json(data: any, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(init?.headers || {}),
    },
  });
}

function clampText(s: string, maxChars: number) {
  const t = (s ?? "").toString().trim();
  return t.length > maxChars ? t.slice(0, maxChars) : t;
}

// Rate limit simples (best-effort) por IP.
const WINDOW_MS = 60_000; // 1 min
const MAX_REQ_PER_WINDOW = 10;
const rateMap = new Map<string, { n: number; t: number }>();

function getClientIp(req: Request) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function rateLimitOrNull(ip: string) {
  const now = Date.now();
  const rec = rateMap.get(ip);
  if (!rec || now - rec.t > WINDOW_MS) {
    rateMap.set(ip, { n: 1, t: now });
    return null;
  }
  rec.n += 1;
  if (rec.n > MAX_REQ_PER_WINDOW) {
    return `Muitas solicitações. Tente novamente em alguns instantes. (limite: ${MAX_REQ_PER_WINDOW}/min)`;
  }
  return null;
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const rl = rateLimitOrNull(ip);
  if (rl) return json({ error: rl }, { status: 429 });

  const body = (await req.json().catch(() => null)) as RewriteRequest | null;
  if (!body) return json({ error: "Body inválido (esperado JSON)." }, { status: 400 });

  const geminiApiKey = String(body.geminiApiKey ?? "").trim();
  if (!geminiApiKey) {
    return json(
      { error: "Gemini API Key obrigatória (modo BYOK). Cole sua chave do Google AI Studio." },
      { status: 400 }
    );
  }

  const model = String(body.model ?? "gemini-2.5-flash").trim();
  const text = clampText(String(body.text ?? ""), 6000);
  if (!text) return json({ error: "Texto vazio. Escreva um rascunho primeiro." }, { status: 400 });

  const kind = body.kind ?? "geral";
  const tone = body.tone ?? "formal";

  const prompt = [
    "Você é um assistente de escrita para documentos brasileiros.",
    "Objetivo: reescrever o texto do usuário com clareza, objetividade e correção.",
    "Regras:",
    "- Português do Brasil.",
    "- Não invente fatos, datas, números ou nomes.",
    "- Não inclua dados pessoais (CPF, RG, endereço, e-mail).",
    "- Não dê aconselhamento jurídico; apenas melhore redação e estrutura.",
    "- Retorne APENAS o texto final reescrito.",
    "",
    `Tipo de documento: ${kind}. Tom: ${tone}.`,
    "",
    "TEXTO:",
    text,
  ].join("\n");

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
    model
  )}:generateContent`;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 500,
    },
  };

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-goog-api-key": geminiApiKey,
    },
    body: JSON.stringify(payload),
  });

  const data = await resp.json().catch(() => null);

  if (!resp.ok) {
    const msg =
      data?.error?.message ||
      data?.message ||
      `Falha ao chamar Gemini API (HTTP ${resp.status}). Verifique sua chave e limites.`;
    return json({ error: msg }, { status: 502 });
  }

  const improved =
    data?.candidates?.[0]?.content?.parts?.map((p: any) => p?.text).filter(Boolean).join("")?.trim() || "";

  if (!improved) {
    return json({ error: "A IA não retornou texto. Tente novamente." }, { status: 502 });
  }

  return json({ improvedText: improved });
}
 
