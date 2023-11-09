export type Categories = {
  id: string;
  name: string;
  Slug: string;
  img: string;
  price: {
    name: string;
    plane: string;
    price: number;
    qtd: number;
    total: number;
    descript: string;
  }[];
};
export type Hotmart = {
  id: number;
  name: string;
  price: number;
  img: string;
  Slug?: String;
  descript: string;
};
export type Admin = {
  id: number;
  name: String;
  url: string;
};
export type Links = {
  name: string;
  path: string;
};

export const hotmart = [
  {
    id: 1,
    Slug: "denstistas",
    name: "Blindagem Jurídica nas Clínicas de Harmonização",
    descript:
      "O curso visa proporcionar conhecimento sobre aspectos gerais das atividades em observâncias aos ditames legais...",
    price: 120,
    img: "/caution.svg",
  },


  
  {
    id: 2,
    name: "Anamnese para Harmonização ",
    price: 148,
    descript:
      "Anamnese editável organizada por medicamentos, doenças, hábitos e gênero, incluindo questões de rastreio...",
    img: "/caution.svg",
  },
  {
    id: 3,
    name: "Consulta on-line com Advogado(a)",
    price: 480,
    descript:
      "Consultas on-line de orientação sobre questões de responsabilidade civil, direito da saúde direito empresarial...",
    img: "/caution.svg",
  },
];





export const courses = [
  {
    id: 1,
    Slug: "denstistas",
    name: "A responsabilidade civil do Dentista em Procedimentos Estéticos",
    descript:
      "Responsabilidade civil do DENTISTA em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com dentistas/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/dent.png",
  },
  {
    id: 2,
    Slug: "biomedicos",
    name: "A responsabilidade civil do Biomédico em Procedimentos Estéticos.",
    descript:
      "Responsabilidade civil do Biomédico em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com BIOMÉDICOS/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/bio.png",
  },

  {
    id: 3,
    Slug: "harmonizacao",
    name: "A responsabilidade civil do Profissional da Harmonização em Procedimentos Estéticos",
    descript:
      "Responsabilidade civil do PROFISSIONAL DE HARMONIZAÇÃO em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com PROFISSIONAIS DE HARMONIZAÇÃO/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/harm.png",
  },
  {
    id: 4,
    name: "A responsabilidade civil do Profissional da Harmonização em Procedimentos Estéticos",
    price: 199,
    descript:
      "Anamnese editável desenvolvida especialmente para avaliação de pacientes na área de harmonização, segmentada e organizada para avaliação de uso de medicamentos, histórico de doenças, hábitos, rastreio sócio emocional, avaliação Clínica dermatológica do paciente e espaço para revisão no retorno.  Bônus: Vídeo explicativo sobre a importância e modo da anamnese.",
    img: "/am.png",
  },
  {
    id: 5,
    Slug: "biomedicos",
    name: "A responsabilidade civil do Biomédico em Procedimentos Estéticos.",
    descript:
      "Responsabilidade civil do Biomédico em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com BIOMÉDICOS/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/bio.png",
  },

  {
    id: 6,
    Slug: "harmonizacao",
    name: "A responsabilidade civil do Profissional da Harmonização em Procedimentos Estéticos",
    descript:
      "Responsabilidade civil do PROFISSIONAL DE HARMONIZAÇÃO em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com PROFISSIONAIS DE HARMONIZAÇÃO/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/harm.png",
  },
  {
    id: 7,
    Slug: "denstistas",
    name: "A responsabilidade civil do Dentista em Procedimentos Estéticos",
    descript:
      "Responsabilidade civil do DENTISTA em Atividade meio e de resultado/Responsabilidade subjetiva e objetiva / Estudo de casos ocorridos com dentistas/ Código de defesa do Consumidor e inversão do ônus da prova. Juizado comum e especial/Provas e Revelia/ Perícia e prontuário médico - Bioética, Compliance e meios de prova.",
    price: 120,
    img: "/dent.png",
  },
  {
    id: 8,
    Slug: "biomedicos",
    name: "Consultas on-line de orientação sobre questões de responsabilidade civil...",
    price: 480,
    descript:
      "Consultas on-line de orientação sobre questões de responsabilidade civil,saúde e empresarial",
    img: "/on.png",
  },
];
export const links = [
  {
    name: "Home",
    path: "/",
    icon:"/home.png"
  
  },
  { name: "Documentação", path: "/categories",icon:"/book.png" },
  { name: "Cursos", path: "/courses", icon:"/c.png" },
  { name: "Consultas", path: "/consultancy" ,icon:"/call.png"},
  { name: "Contato", path: "/contact" ,icon:"/mail.png"},
];
