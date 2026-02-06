import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const CONTACT_EMAIL = "contato@recibonahora.com.br";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, value, source = "educacao-financeira" } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Nome, telefone e e-mail são obrigatórios" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name,
          phone,
          email,
          value: value || null,
          source,
        },
      ])
      .select();

    if (error) {
      console.error("Erro ao salvar lead no Supabase:", error);
      return NextResponse.json(
        { error: "Erro ao salvar solicitação" },
        { status: 500 }
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

    console.log("Lead salvo com sucesso:", {
      id: data[0]?.id,
      name,
      phone,
      email,
      value: value ? formatCurrency(value) : "Não informado",
      source,
      timestamp: new Date().toISOString(),
    });

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
