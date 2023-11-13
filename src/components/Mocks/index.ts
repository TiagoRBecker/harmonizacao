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
    img: "/hotmart/curso.svg",
  },


  
  {
    id: 2,
    name: "Anamnese para Harmonização ",
    price: 148,
    descript:
      "Anamnese editável organizada por medicamentos, doenças, hábitos e gênero, incluindo questões de rastreio...",
    img: "/hotmart/anamenese.svg",
  },
  {
    id: 3,
    name: "Consulta on-line com Advogado(a)",
    price: 480,
    descript:
      "Consultas on-line de orientação sobre questões de responsabilidade civil, direito da saúde direito empresarial...",
    img: "/hotmart/team.svg",
  },
];






export const links = [
 
  { name: "Documentação", path: "/categories" },
  { name: "Cursos", path: "/courses",  },
  { name: "Consultas", path: "/consultancy" },
  { name: "Contato", path: "/contact" },
];
