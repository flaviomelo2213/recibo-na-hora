/*
  # Criação da Tabela de Leads

  1. Nova Tabela
    - `leads`
      - `id` (uuid, chave primária)
      - `name` (text) - Nome completo do lead
      - `phone` (text) - Telefone para contato
      - `email` (text) - Email do lead
      - `value` (text, opcional) - Valor de interesse
      - `source` (text) - Origem do lead (formulário)
      - `created_at` (timestamptz) - Data de criação
      
  2. Segurança
    - Enable RLS na tabela `leads`
    - Permitir apenas inserção pública (sem autenticação)
    - Nenhum acesso público de leitura (apenas administradores via service role)
    
  3. Índices
    - Índice em `created_at` para consultas ordenadas
    - Índice em `email` para busca rápida
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  value text,
  source text DEFAULT 'educacao-financeira',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer pessoa pode inserir leads"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);
