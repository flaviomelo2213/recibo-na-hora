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

  if (!apiKey) return json({ error: "AI_GATEWAY_API_KEY não configurado." }, { status: 500 });
  if (!model) return json({ error: "AI_MODEL_ID não configurado (provider/model)." }, { status: 500 });

  const body = await req.json().catch(() => null);
  const pedido = String(body?.pedido ?? "").trim();
  if (!pedido) return json({ error: "Campo 'pedido' vazio." }, { status: 400 });

  const client = new OpenAI({ apiKey, baseURL: BASE_URL });

  const result = await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: "Reescreva o texto em português do Brasil, formal e objetivo. Não invente fatos. Não inclua dados pessoais. Retorne apenas o texto revisado." },
      { role: "user", content: pedido }
    ],
    temperature: 0.2,
    max_tokens: 500,
  });

  const improved = (result.choices?.[0]?.message?.content ?? "").trim();
  if (!improved) return json({ error: "IA retornou vazio." }, { status: 502 });

  return json({ improvedText: improved });
}
