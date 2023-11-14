import Link from "next/link";
import Head from "./head";
import BottomNav from "@/components/BottomNav";

const Consultancy = () => {
  return (
    <>
    <Head/>
    <section className="w-full h-full py-[5rem]">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="flex items-center justify-center ">
          <img src="/contact.png" alt="Central" />
        </div>
        <div className=" pt-[2rem] flex flex-col items-center justify-center">
          <h1 className="w-full  text-center text-xl   font-bold uppercase">
            Agende sua consulta <span className="text-color">com um especialista</span> 
          </h1>
          <div className="flex flex-col gap-3 mt-5 ">
            <div className=" flex items-center justify-center flex-col">
            <h2 className=" text-center text-lg  text-[#54595F]  font-bold uppercase">Horario de atendimento</h2>
            <p className="text-base text-[#54595F] ">Seg á Sexta </p>
            <p className="text-base text-[#54595F] ">8:00 ás 12:00 / 13:30 ás 18:30</p>
         
            </div>
            <div className="flex mt-6 gap-5 items-center justify-center  ">
            

              <button className="btn-small">
              <Link href={"https://wa.me/55519805190?text=Bem+vindos+a+plataforma+de+harmonização+Prontuários.++Em+que+podemos+ajudar+?"} target="_blank">
                 Agendar
                </Link>
              </button>
            
            </div>
          </div>
        </div>
      </div>
    </section>
    <BottomNav/>
    </>
  );
};

export default Consultancy;
