import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Whatsszapp = () => {
  return (
    <div className="fixed  bottom-24 left-6 md:bottom-4 md:left-8">
        <Link href={"https://api.whatsapp.com/send?phone=5551980519018&text=Bem%20vindos%20a%20plataforma%20de%20harmoniza%C3%A7%C3%A3o%20Prontu%C3%A1rios.%20Em%20que%20podemos%20ajudar%20?"} target="_blank">
      <div className="pulsar">
          <FaWhatsapp size={40} color="#fff" />
      </div>
        </Link>
    </div>
  );
};

export default Whatsszapp;
