import { NextResponse } from "next/server"
import prisma from "@/server/prisma"
export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const slug = params.slug 
    try {
        const product = await prisma.products.findUnique({
            where:{
                id:Number(slug)
            },
            include:{
                Categories:true,
                desccript:true
            }
         })
         if(product){
            return NextResponse.json({ product},{status:200})
         }
         else{
            return NextResponse.json({ message:"Nenhum produto encontrado"},{status:404})
         }
         
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message:"Error tente novamente mais tarde"},{status:500})
    }
    
   
 
  }