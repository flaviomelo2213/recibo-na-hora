import type { Metadata } from "next";
import { Suspense } from "react";
import FerramentasClient from "./FerramentasClient";

export const metadata: Metadata = {
  title: "Ferramentas | ReciboNaHora",
  description: "Biblioteca de ferramentas para gerar documentos em PDF.",
  alternates: { canonical: "/ferramentas" },
};

export default function FerramentasPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FerramentasClient />
    </Suspense>
  );
}
