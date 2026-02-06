"use client";

import { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";

interface LeadModalProps {
  onClose: () => void;
  defaultValue?: number;
}

export default function LeadModal({ onClose, defaultValue = 0 }: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    value: defaultValue > 0 ? defaultValue.toString() : "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/[^\d]/g, "");
    if (!numbers) return "";
    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(parseFloat(numbers));
    return formatted;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numbers = value.replace(/[^\d]/g, "").slice(0, 11);
      let formatted = numbers;
      if (numbers.length > 10) {
        formatted = numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
      } else if (numbers.length > 5) {
        formatted = numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      } else if (numbers.length > 2) {
        formatted = numbers.replace(/(\d{2})(\d{0,5})/, "($1) $2");
      }
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            disabled={isSubmitting}
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold mb-2">Solicitar Indicações</h2>
          <p className="text-blue-100 text-sm">
            Preencha seus dados e entraremos em contato com indicações de profissionais especializados.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
              Nome Completo *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              placeholder="João Silva"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
              Telefone/WhatsApp *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              placeholder="(00) 00000-0000"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
              E-mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              placeholder="joao@email.com"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="value" className="block text-sm font-semibold text-slate-900 mb-2">
              Valor de Interesse
            </label>
            <input
              id="value"
              name="value"
              type="text"
              value={formData.value}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              placeholder="100000"
              disabled={isSubmitting}
            />
            {formData.value && (
              <p className="mt-1 text-xs text-slate-600">
                Valor formatado: {formatCurrency(formData.value)}
              </p>
            )}
          </div>

          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold text-green-900">Solicitação enviada com sucesso!</p>
              <p className="text-xs text-green-700 mt-1">Entraremos em contato em breve.</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold text-red-900">Erro ao enviar solicitação</p>
              <p className="text-xs text-red-700 mt-1">Tente novamente ou entre em contato conosco.</p>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-slate-500 text-center pt-2">
            Seus dados serão tratados com confidencialidade conforme nossa{" "}
            <a href="/politica-privacidade" className="text-blue-900 hover:underline">
              Política de Privacidade
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
