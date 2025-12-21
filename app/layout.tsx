import React from 'react';

export const metadata = {
  title: 'Recibo Na Hora - Gerador Grátis',
  description: 'Gerador de recibos e documentos online para o Brasil.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9' }}>
        {children}
      </body>
    </html>
  );
}
