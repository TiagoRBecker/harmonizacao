import { NextResponse } from "next/server"
import prisma from "@/server/prisma"

export async function POST(req: Request) {

    const create = await prisma?.products.create({
        data:{
            
            price:2000,
            title:"Produto de teste"
            
         

        }
    })
    return NextResponse.json({create})
}