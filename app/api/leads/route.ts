import { NextRequest, NextResponse } from "next/server";

const CONTACT_EMAIL = "contato@recibonahora.com.br";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, value } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Nome, telefone e e-mail são obrigatórios" },
        { status: 400 }
      );
    }

    const formatCurrency = (val: string) => {
      const numbers = val.replace(/[^\d]/g, "");
      if (!numbers) return "Não informado";
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(parseFloat(numbers));
    };

    const emailContent = `
Nova Solicitação de Indicação de Profissionais
==============================================

Nome: ${name}
Telefone: ${phone}
E-mail: ${email}
Valor de Interesse: ${value ? formatCurrency(value) : "Não informado"}

Data: ${new Date().toLocaleString("pt-BR")}

---
Este lead foi capturado através do formulário de educação financeira.
    `.trim();

    console.log("Lead recebido:", {
      name,
      phone,
      email,
      value: value ? formatCurrency(value) : "Não informado",
      timestamp: new Date().toISOString(),
    });

    console.log("Email a ser enviado para:", CONTACT_EMAIL);
    console.log("Conteúdo:", emailContent);

    return NextResponse.json(
      {
        success: true,
        message: "Solicitação recebida com sucesso! Entraremos em contato em breve.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar lead:", error);
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}
