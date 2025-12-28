export interface ExperienceItem {
  id: number;
  cargo: string;
  empresa: string;
  inicio: string;
  fim: string;
  atividades: string;
}

export interface EducationItem {
  id: number;
  curso: string;
  instituicao: string;
  ano: string;
}

export interface CurriculumData {
  dadosPessoais: {
    nome: string;
    cargo: string;
    email: string;
    telefone: string;
    cidade: string;
    linkedin: string;
    portfolio: string;
  };
  resumo: string;
  experiencia: ExperienceItem[];
  educacao: EducationItem[];
  habilidades: string;
  idiomas: string;
  fotoDataUrl?: string;
  assinaturaDataUrl?: string;
}
