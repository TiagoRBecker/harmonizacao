import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import { CartContext } from "@/Context";


const Products = () => {
  const router = useRouter()
  const { data: session } = useSession();
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    getProducts();
  }, []);
  const [products, setProducts] = useState([]);
  const categoriesLogo = (categories: any) => {
    switch (categories) {
      case "Dentistas":
        return <p>Dentistas</p>;
        break;
      case "Biomédicos":
        return <p>Biomedicos</p>;
        break;
      case "Profissionais da Harmonização":
        return <p>Harmonizacao</p>;
        break;
    }
  };
  const stars = (title:string)=>{
    switch(title){
      case "PACOTE PARA DENTISTAS INICIANTES":
       return (<span className="text-[#54595F] ml-3">79 Avaliações</span>)
       break
       case "PACOTE PARA DENTISTAS AVANÇADO": 
       return (<span className="text-[#54595F] ml-3">155 Avaliações</span>)
       break
       case "PACOTE PARA BIOMÉDICO INICIANTE":
       return (<span className="text-[#54595F] ml-3">95 Avaliações</span>)
       break
       case "PACOTE PARA BIOMÉDICO AVANÇADO":
       return (<span className="text-[#54595F] ml-3">93 Avaliações</span>)
       break
       case "PACOTE PARA PROFISSIONAL DE HARMONIZAÇÃO INICIANTE":
       return (<span className="text-[#54595F] ml-3">147 Avaliações</span>)
       break
       case "PACOTE PARA PROFISSIONAL DE HARMONIZAÇÃO AVANÇADO":
       return (<span className="text-[#54595F] ml-3">107 Avaliações</span>)
       break
    }
   }
  const getProducts = async () => {
    const products = await api.getProducts();
    setProducts(products.products);
    return;
  };
  const addGoToCart = (items: any) => {
    if (!session) {
      router.push(`/authentication/signin`);
      return;
    } else {
      addToCart(items);
      router.push("/cart");
    }
  };

  return (
    <section className="w-full h-full">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-2xl w-full   px-1 text-left md:text-3xl font-bold md:w-[80%]  md:text-center  py-[3rem] "
      >
        Produtos Harmonização
        <span className="text-color"> Prontuários</span>
      </h1>
      <div className="px-4 w-full py-10 grid-cols-1 md:grid md:grid-cols-3 md:w-[80%] h-full gap-6 mx-auto">
        {products?.map((items: any, index: number) => (
          <div
            key={index}
            className="w-full h-full flex items-center flex-col py-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-md ease-linear duration-700 hover:scale-105 "
          >
            <div className="w-full h-full px-2 py-2 relative">
              <img
                src={items.img}
                alt={items.title}
                className="w-full  h-full md:h-[180px] rounded-md "
              />
              <p className="absolute bg-color-green top-3 left-3 z-50  rounded-md px-4 text-white">
                {" "}
                {categoriesLogo(items.Categories?.name)}
              </p>
            </div>
            <div className="w-full   flex items-center justify-center">

            <h1 className="text-base uppercase text-left px-2 text-[#54595F] font-bold  ">
              {items.title}
            </h1>
            </div>
            
            <div className="flex px-4 w-full items-center justify-start">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-[#e6c619]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                {stars(items.title)}
              </span>
              </div>
            <div className="w-full flex items-center justify-center flex-col px-2 py-4 ">
                <p className="text-[#54595F] font-bold">
                  6x de{" "}
                <span className="text-color font-bold text-lg">
                
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(items?.price / 600)}
              </span>
                </p>
               <p className="text-[#54595F] text-base">{new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(items?.price / 100)}</p>
            </div>

            <div className="flex items-center  justify-center md:justify-between w-full gap-2 px-2">
              
                <button onClick={()=>{addGoToCart(items)}} className="btn">Comprar</button>
              
              <Link href={`/categories/${items.id}`}>
                <button className="btn">Saiba Mais</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
