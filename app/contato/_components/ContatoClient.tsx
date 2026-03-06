"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function ContatoClient() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    valorInteresse: '',
    mensagem: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      setSuccess(true);
      setFormData({
        nome: '',
        whatsapp: '',
        valorInteresse: '',
        mensagem: ''
      });
    } catch (err) {
      setError('Erro ao enviar mensagem. Tente novamente ou entre em contato pelo e-mail.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Entre em Contato</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Preencha o formulário abaixo ou envie um e-mail diretamente. Respondemos em até 48 horas úteis.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
              <i className="fa-solid fa-comment-dots text-blue-600 mr-2"></i>
              Formulário de Contato
            </h2>

            {success && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-green-800 font-medium">
                  <i className="fa-solid fa-check-circle mr-2"></i>
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-2">
                  WhatsApp * <span className="text-xs text-slate-500">(com DDD)</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="valorInteresse" className="block text-sm font-medium text-slate-700 mb-2">
                  Valor de Interesse <span className="text-xs text-slate-500">(opcional)</span>
                </label>
                <input
                  type="text"
                  id="valorInteresse"
                  name="valorInteresse"
                  value={formData.valorInteresse}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: R$ 50.000,00"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i>
                    Enviar Mensagem
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-12 flex flex-col items-center gap-y-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-x-4">
              <i className="fa-solid fa-envelope-open-text text-3xl text-blue-600"></i>
              <h2 className="text-xl font-semibold text-slate-800">Contato Direto</h2>
            </div>
            <p className="text-center text-slate-600">
              Prefere enviar um e-mail diretamente?
            </p>
            <a
              href="mailto:contato@recibonahora.com.br"
              className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
            >
              contato@recibonahora.com.br
            </a>
          </div>

          <div className="mt-12 text-center text-base text-slate-600">
            <p className="mb-3">Páginas úteis:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/termos-uso" className="font-semibold text-blue-700 hover:text-blue-800 hover:underline">
                Termos de Uso
              </Link>
              <Link href="/politica-privacidade" className="font-semibold text-blue-700 hover:text-blue-800 hover:underline">
                Política de Privacidade
              </Link>
              <Link href="/como-ganhamos-dinheiro" className="font-semibold text-blue-700 hover:text-blue-800 hover:underline">
                Transparência
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
