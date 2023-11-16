import prisma from "@/server/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const create = await prisma.descript.create({
   
    data: {
      name: "O pacote inclui 58 arquivos digitais com documentos para uso, edição e personalização",
      list: "24 Contratos editáveis e personalizáveis de prestação de serviço para aplicação/procedimento de Toxina Botulínica, Ácido Hialurônico, Bioestimulador De Colágeno, Co2 Fracionado, Endolaser Facial, Fios de PDO, Bichectomia, Hialuronidase,  Lavieen Laser, Lipo De Papada + Skinbooster, Lipo de Papada Enzimatica/Química, Luz Pulsada, Mesoterapia, Microagulhamento, Peeling Quimico, Pein Microvasos, Skinbooster, Ultraformer, Ultrassom Herus Hifu, Protocolo Bumbum Up,  Velashape, Depilação / Epilação, Tatuagem (Remoção), Terapia Capilar.24 Termos de consentimento livre e esclarecido (TCLE) editáveis e personalizáveis para aplicação/procedimento de Toxina Botulínica, Ácido Hialurônico, Bioestimulador De Colágeno, Co2 Fracionado, Endolaser Facial, Fios de PDO, Bichectomia , Hialuronidase,  Lavieen Laser, Lipo De Papada + Skinbooster, Lipo de Papada Enzimatica/Química, Luz Pulsada, Mesoterapia, Microagulhamento, Peeling Quimico, Pein Microvasos, Skinbooster, Ultraformer, Ultrassom Herus Hifu, Protocolo Bumbum Up, Velashape, Depilação / Epilação, Tatuagem (Remoção), Terapia Capilar.1 Ficha de anamnese com ênfase dermatológica e aspectos psicossociais.2 Modelos de ficha clínica.2 Modelos de Plano de Tratamento.1 Termo de resultado e idiossincrasia (Termo assinado pelo paciente na hipótese de realização de procedimentos que possam ter resultados pouco ou minimamente expressivos).1 Termo de conclusão de tratamento - Termo na qual o paciente declara ter encerrado o tratamento de modo satisfatório e se compromete a seguir os cuidados prescritos.1 Termo de intercorrência prévia - Termo a ser utilizado para cientificar o paciente e registrar intercorrências prévias ou características atípicas do paciente que possam influenciar no resultado do tratamento.1 Termo de renúncia do tratamento - Termo na qual o paciente expressa a vontade de encerrar o tratamento previamente, se responsabilizando pelos riscos e comprometimento dos resultados.1 Termo De Consentimento para Clínica Escola – Termo utilizado em alunos modelos durante cursos de harmonização.1 VIDEO AULA DE RESPONSABILIDADE CÍVIL APLICADA A CONTRATOS.1 Vídeo aula ensinando como utilizar os documentos na prática, explicando os conceitos, significados, modos de uso, edição e demais informações essenciais para compreender os aspectos jurídicos e práticos aplicados no desenvolvimento de prontuários adequados.",
      productsId:6
    },
  });
  return NextResponse.json({create})
}
