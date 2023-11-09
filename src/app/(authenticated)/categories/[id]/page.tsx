"use client";
import Head from "./head";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/Context";
import Loading from "@/components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BottomNav from "@/components/BottomNav";
import { api } from "@/utils/api";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const Id = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const id = params.id;
  const router = useRouter();
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState<any>(); // state que recebe os produtos
  const [loading, setLoading] = useState(true); //state de loading
  useEffect(() => {
    if (id) {
      getDados();

      return;
    }
  }, []);

  //Funçao para receber o produto da categoria selecionado
  async function getDados() {
    setLoading(true);
    const get = await api.getDocs(id);
    console.log(get);
    if (get) {
      setProducts(get.product);
      setLoading(false);
    }
  }
  // Adicona e vai para carrinho de compraas
  const addGoToCart = (items: any) => {
    if (!session) {
      router.push("/authentication/signin");
      return;
    } else {
      addToCart(items);
      router.push("/cart");
    }
  };
  const addCart = (items: any) => {
    if (!session) {
      router.push(`/authentication/signin?product=${id}`);
      return;
    } else {
      addToCart(items);
    }
  };
  if(loading){
    return(
    <Loading/>
    )
    
  }
  return (
    <>
      <Head />
      <section className="w-full h-full py-[5rem] bg-white">
      
          <div className="w-full h-full px-5  mx-auto">
            <div className="flex-col md:w-full md:flex-row h-full  flex gap-3">
              <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center">
                <ReactPlayer
                  url="/docs.mp4"
                  width="100%"
                  height="100%"
                  playing={true}
                  loop={true}
                />
              </div>

              <div className="lg:w-1/2 w-full h-full  px-2 py-2">
                <h1 className="w-full text-4xl font-bold  text-left   ">
                  <span className="text-color"> {products?.title}</span>
                </h1>
                <h2 className="text-sm title-font text-[#54595F] tracking-widest"></h2>

                <div className="flex mb-4">
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
                    <span className="text-[#54595F] ml-3">5 Avaliações</span>
                  </span>
                </div>
                <div>
                  <p className="leading-relaxed text-[#54595F] text-justify">
                    {products?.slug}
                  </p>
                </div>
                <div className="flex flex-col  w-full h-full py-5 ">
                  <p className="font-bold text-lg  text-black flex gap-2 ">
                    Valor total:
                    <span className="text-color font-bold ">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(products?.price / 100)}
                    </span>
                  </p>
                </div>
                <div className="flex  mt-6 gap-5">
                  <button
                    onClick={() => addGoToCart(products)}
                    className="btn "
                  >
                    Comprar
                  </button>
                  <button onClick={() => addCart(products)} className="btn ">
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
            <div className="flex mt-6 py-5">
              <div className="flex  items-start ">
                <span className=" text-[#54595F] font-bold  text-xl">
                  Documentaçao inclusa no {products?.title}
                </span>
                <div className="relative"></div>
              </div>
            </div>
            <div className="grid grid-col-1 gap-4 ">
              {products?.desccript?.map((details: any, index: number) => (
                <div
                  key={index}
                  className="w-[100%] h-full border-[1px] border-[#ccc] py-5 px-5 rounded-md bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                >
                  <h1 className=" font-bold text-color py-3 uppercase">{details.name}</h1>
                  <ul className="text-base text-[#072137]  ">
                    {details.list.split(".").map((list: any, index: number) => (
                      <li key={index} className=" flex pb-3">
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        

        <ToastContainer />
      </section>
      <BottomNav />
    </>
  );
};

export default Id;
