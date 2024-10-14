import gallery from "@/app/data/gallery";
import { Lora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const lora = Lora({ subsets: ["latin"], weight: "400" });
export default function index() {
  return (
    <section className="p-6 text-justify mb-10 mt-6 xl:my-10 xl:w-[80%] mx-auto  2xl:w-3/4">
      <section className="flex flex-col lg:flex-row-reverse items-center justify-center lg:mb-20 gap-10">
      <div className="relative overflow-hidden lg:w-2/4 w-full max-h-80 ">
        <Image src={"/images/JP1_1.JPG"} width={500} height={500} alt="test" className="w-full object-cover"/>
      </div>
      <div className="text-sm text-justify mb-10 m-auto lg:w-2/4 ">
        <h1 className={` ${lora.className} text-start  text-2xl mb-6 `}>
          L&apos;Art de capturer l&apos;éphémère.
        </h1>
        <p className="mb-4">
          Mon style de reportage est discret mais efficace, ce qui me permet de
          saisir des moments spontanés, des émotions réelles et des détails qui
          font la richesse de chaque événement. Je m’efforce de{" "}
          <strong>retranscrire l’ambiance authentique d’un événement</strong>,
          tout en capturant des images naturelles et pleines de vie.
        </p>
        <p className="mb-4">
          Avec le drone, je peux proposer des{" "}
          <strong>prises de vue aériennes à couper le souffle</strong>, idéales
          pour les grandes réceptions, les événements en plein air ou les
          entreprises souhaitant mettre en valeur leurs installations.
        </p>

        <p>Je vous souhaites une belle visite.</p>
      </div>
  
      </section>

      <section className="w-full flex flex-wrap gap-4 items-center justify-center">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center sm:w-52 sm:h-52 md:w-70 md:h-70 lg:w-80 lg:h-80 overflow-hidden relative"
          >
            <Link
              href={image}
              className="relative w-full h-full overflow-hidden cursor-pointer"
            >
              <Image
                src={image}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                alt={`Photographie de Jean-Pierre Bost`}
              />
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg">Afficher la photo</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
}
