"use client";
import Link from "next/link";
import Head from "./head";
import { useEffect, useState } from "react";
import BottomNav from "@/components/BottomNav";
import Loading from "@/components/Loading";
import { Product } from "@/utils/types";
import { api } from "@/utils/api";
import ReactPlayer from "react-player";

const Contract = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    search(searchInput);
    
  }, []);


  const search = async (searchInput:string) => {
    setLoading(true)
     const getSearch= await api.getSearch(searchInput)
     if(getSearch){
      setProducts(getSearch.searchProducts);
      setLoading(false)
      return;
     }
     
   
  };

  return (
    <>
      <Head />
      <section className="w-full h-full bg-white py-[1.5rem] ">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="w-[70%] mx-auto flex pt-4 gap-2 items-center justify-between">
              <div className="w-[80%]">
                <input
                  type="text"
                  className="w-full h-9 outline-none border-[1px] border-gray-300 pl-3 rounded-md"
                  placeholder="Exemplo: Dentista, Biomedico"
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                />
              </div>
              <div className="w-[20%] ">
                <button
                  className="flex items-center justify-center"
                  onClick={()=>search(searchInput)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-gray-500 w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-4 w-full grid-cols-1 md:grid md:grid-cols-3 md:w-[80%] h-full gap-6 mx-auto">
              {products?.map((items: Product, index: number) => (
                <div
                  key={index}
                  className="w-full h-full py-10  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ease-linear duration-700 hover:scale-105 "
                >
                  <div className="w-full h-[300px] px-2 py-2">
                 <img src={items.thumb} alt={items.title} />
                
                  </div>
                  <h1 className="w-full text-base h-10 uppercase text-left px-2">
                    <span className="text-[#54595F] "> {items.title}</span>
                  </h1>
                  
                  <div className="gap-2 w-full flex flex-col sm:flex-row px-2  pt-4 items-center justify-between ">
                    <Link href={`/categories/${items.id}`}>
                      <button className="btn">Explorar</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            { products.length <= 0 && <div className="w-full h-screen flex items-center justify-center">
            <p className="text-[#54595F] text-lg">Nenhum produto encontrado.</p>
              </div>}
          </>
        )}
      </section>

      <BottomNav />
    </>
  );
};

export default Contract;
