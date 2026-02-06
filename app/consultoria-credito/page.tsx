"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConsultoriaCreditoPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/educacao-financeira");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="animate-spin w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-slate-600">Redirecionando para Educação Financeira...</p>
      </div>
    </div>
  );
}
