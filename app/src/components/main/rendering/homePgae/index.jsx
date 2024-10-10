import { Lora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import Services from "./Services";
const lora = Lora({ subsets: ["latin"], weight: "400" });

export default function index() {
  return (
    <section>
      <div className="mb-12 xl:w-[80%] m-auto  2xl:w-3/4 p-4">
        <Carousel />
      </div>
      <div className="p-6 text-justify mb-12 xl:w-[80%] m-auto  2xl:w-3/4">
        <h1 className={`text-xl text-center ${lora.className} mb-6`}>
          Photographe & Vidéaste Événementiel
        </h1>
        <p className="text-sm text-center md:w-3/4 m-auto">
          Bonjour, je m’appelle <strong>Jean-Pierre BOST</strong> et je suis{" "}
          <strong>photographe</strong> spécialisé dans le{" "}
          <strong>reportage événementiel</strong>, l’illustration et les prises
          de vue aériennes par drone. Basé à Bordeaux je mets mon expertise au
          service de ceux qui souhaitent immortaliser leurs événements
          d&apos;une manière authentique et créative.
        </p>
      </div>
      <section className="bg-secondary-ligth w-full p-6 mb-12">
        <Services lora={lora} />
      </section>

      <div className="flex p-6 text-justify items-center mb-12 xl:w-[80%] m-auto  2xl:w-3/4 max-h-80 overflow-hidden">
        <div className="flex flex-col items-center w-full m-auto md:w-2/4">
          <h3 className={`text-xl text-center ${lora.className} mb-6`}>
            Ma Philosophie
          </h3>
          <p className="text-sm text-center md:w-3/4 m-auto mb-6">
            Pour moi, chaque événement est unique et mérite d’être capturé de
            manière originale et mémorable. Je travaille avec mes clients pour
            comprendre leurs attentes et m&apos;assurer que chaque détail,
            chaque moment, soit préservé dans un format visuel de haute qualité.
          </p>
          
          <button className="block px-4 py-2 border border-secondary-brun rounded-full text-center text-sm w-3/5 hover:bg-primary hover:border-secondary-ligth transition-all duration-300 ">
            <Link href={"/contact"}>
              Contactez moi
            </Link>
          </button>
        </div>
        <div className="hidden md:flex">
          <Image
            src={"/images/JP1_6418.jpg"}
            width={500}
            height={500}
            alt="test"
          />
        </div>
      </div>
    </section>
  );
}
