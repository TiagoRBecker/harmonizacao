import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Whatsszapp = () => {
  return (
    <div className="fixed  bottom-24 left-6 md:bottom-4 md:left-8">
        <Link href={"https://wa.me/55519805190?text=Bem+vindos+a+plataforma+de+harmonização+Prontuários.++Em+que+podemos+ajudar+?"} target="_blank">
      <div className="pulsar">
          <FaWhatsapp size={40} color="#fff" />
      </div>
        </Link>
    </div>
  );
};

export default Whatsszapp;
