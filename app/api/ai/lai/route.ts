import OpenAI from "openai";

export const runtime = "edge";

const BASE_URL = "https://ai-gateway.vercel.sh/v1";

function json(data: any, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { "content-type": "application/json; charset=utf-8", ...(init?.headers || {}) },
  });
}

export async function POST(req: Request) {
  const apiKey = process.env.AI_GATEWAY_API_KEY;
  const model = process.env.AI_MODEL_ID;

  if (!apiKey) {
    return json(
      { error: "AI_GATEWAY_API_KEY não configurado nas variáveis de ambiente." },
      { status: 500 }
    );
  }
  if (!model) {
    return json(
      { error: "AI_MODEL_ID não configurado. Defina um model id do AI Gateway (Model List) no formato provider/model." },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return json({ error: "Body inválido (esperado JSON)." }, { status: 400 });
  }

  const pedido = String(body.pedido ?? "").trim();

  if (!pedido) {
    return json(
      { error: "Campo 'pedido' vazio. Escreva um rascunho antes de pedir melhoria." },
      { status: 400 }
    );
  }

  const payload = {
    destinatarioCargo: String(body.destinatarioCargo ?? ""),
    destinatarioOrgao: String(body.destinatarioOrgao ?? ""),
    formaPreferencial: String(body.formaPreferencial ?? ""),
    pedido,
  };

  const client = new OpenAI({
    apiKey,
    baseURL: BASE_URL,
  });

  const system = [
    "Você é um assistente de escrita para documentos brasileiros.",
    "Tarefa: melhorar o texto do 'pedido' de um requerimento LAI (Lei 12.527/2011).",
    "Regras:",
    "- Produza um texto claro, objetivo e formal, em português do Brasil.",
    "- Não invente fatos, datas, números, nomes ou artigos além do necessário.",
    "- Não inclua dados pessoais (CPF, RG, endereço, e-mail).",
    "- Não faça aconselhamento jurídico; apenas melhore a redação e a estrutura.",
    "- Retorne APENAS o texto do pedido (sem títulos, sem listas extras fora do pedido).",
  ].join("\n");

  const user = [
    "Contexto (campos do formulário):",
    JSON.stringify(payload, null, 2),
    "\nReescreva o campo 'pedido' com melhor clareza e especificidade.",
  ].join("\n");

  const result = await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
    temperature: 0.2,
    max_tokens: 500,
  });

  const improved = (result.choices?.[0]?.message?.content ?? "").trim();

  if (!improved) {
    return json({ error: "IA não retornou conteúdo. Tente novamente." }, { status: 502 });
  }

  return json({ improvedPedido: improved });
}
