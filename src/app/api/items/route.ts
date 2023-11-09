import { NextResponse } from "next/server";
import prisma from "@/server/prisma";
export async function POST(req: Request) {
  const { slug } = await req.json();

  try {
    const create = await prisma?.pDF.delete({
        where:{
            id:6
        }
     
    });
    return NextResponse.json({ message: "Criado com sucesso", create });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error });
  }
}
export async function GET(req: Request) {
   
  
    try {
      const create = await prisma?.pDF.findMany({
        
      });
      return NextResponse.json({ message: "Criado com sucesso", create });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Error", error });
    }
  }
