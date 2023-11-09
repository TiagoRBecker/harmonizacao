import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { slug } = await req.json();

  try {
    const create = await prisma?.pDF.create({
      data: {
        name: "Pacote para Profissional de harmonização Avançado",
        path: "https://onedrive.live.comdownloadembed/?resid=A487767885870F49%21198302&authkey=!AAOCruTkcJBWzwE",
      },
    });
    return NextResponse.json({ message: "Criado com sucesso", create });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error });
  }
}
