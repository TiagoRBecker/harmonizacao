import prisma from "@/server/prisma"
import { NextResponse } from "next/server"
export async function POST(req: Request, res: Response) {
 const update = await prisma.pDF.update({
    where:{
        id:3
    },data:{
        path:"https://onedrive.live.com/download?resid=5F2CFC4512386085%21114&authkey=!AOQuFwjTLSS-DAM"
    }
 })
 return NextResponse.json({update})
}
export async function GET(req: Request, res: Response) {
    const items = await prisma.pDF.findMany({})
    return NextResponse.json({items})
}