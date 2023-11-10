import { NextResponse } from "next/server";
import prisma from "@/server/prisma";
export async function POST(req: Request) {
  const { slug } = await req.json();

  try {
    const create = await prisma?.pDF.update({
        where:{
            id:7
        },data:{
            path:"https://onedrive.live.com/download?resid=A487767885870F49%21198308&authkey=!AOR2I5rlcyNV-FM"
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
