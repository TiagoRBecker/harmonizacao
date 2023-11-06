import { NextResponse } from 'next/server';
import prisma from '@/server/prisma';

export async function GET(request: Request) {
  
   
   const categories = await prisma.categories.findMany({})
   return NextResponse.json({categories},{status:200})
}