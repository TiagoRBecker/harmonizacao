import { NextResponse } from "next/server";
import prisma from "@/server/prisma";
export async function POST(req: Request) {
  const { slug } = await req.json();

  try {
    const create = await prisma?.products.create({
  
   data:{
    title:"Teste",
    price:500,
    slug:"produto de teste",
    thumb:"",
    img:""
   
    
   }
      
    });
    return NextResponse.json({ message: "Criado com sucesso", create });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error });
  }
}
export async function GET(req: Request) {
  const products = await prisma.products.findMany({
  
    include: {
      desccript: true,
      Categories: true,
    },
  });
  return NextResponse.json({ products });
}
