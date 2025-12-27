"use client";

type PreviewReciboSimplesProps = {
  formData: Record<string, string>;
};

export default function PreviewReciboSimples({ formData }: PreviewReciboSimplesProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 border border-slate-200 h-full">
      <div className="space-y-2 text-slate-800">
        <div className="text-lg font-bold">RECIBO</div>
        <div className="text-sm text-slate-600">
          Pré-visualização do recibo (ajuste conforme seu layout real).
        </div>

        <div className="pt-4 space-y-1 text-sm">
          {Object.entries(formData || {}).map(([k, v]) => (
            <div key={k} className="flex gap-2">
              <span className="font-semibold">{k}:</span>
              <span className="break-words">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}