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
              <Link href={"https://api.whatsapp.com/send?phone=5551980519018&text=Bem%20vindos%20a%20plataforma%20de%20harmoniza%C3%A7%C3%A3o%20Prontu%C3%A1rios.%20Em%20que%20podemos%20ajudar%20?"} target="_blank">
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
