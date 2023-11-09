import { NextResponse } from "next/server";
import prisma from "@/server/prisma";
export async function POST(req: Request) {
  const { name, list} = await req.json();

  try {
    const create = await prisma?.descript.update({
     where:{
      id:10
     },
      data: {
       
       list,
       
      }
     
       
    });
    return NextResponse.json({ message: "Atualizado com sucesso", create });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error });
  }
  
}
export async function GET(req: Request) {
  const create = await prisma?.descript.findMany({})
  return NextResponse.json({ message: "Atualizado com sucesso", create });
}