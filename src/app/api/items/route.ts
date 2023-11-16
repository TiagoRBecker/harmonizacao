export async function POST(req: Request) {

    const create = prisma?.products.create({
        data:{
            
            price:2000,
            title:"Produto de teste"
            
         

        }
    })
}