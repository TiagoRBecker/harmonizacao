import { NextResponse } from "next/server";
import prisma from "@/server/prisma";

export async function GET(req: Request) {
  const products = await prisma.products.findMany({
  
    include: {
      desccript: true,
      Categories: true,
    },
  });
  return NextResponse.json({ products });
}
