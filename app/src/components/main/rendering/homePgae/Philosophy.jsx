import Image from "next/image";
import Link from "next/link";
export default function Philosophy({lora}) {
  return (
    <div className="flex p-6 text-justify items-center my-16 xl:w-[80%] mx-auto  2xl:w-3/4 max-h-80 overflow-hidden">
      <div className="flex flex-col items-center w-full m-auto md:w-2/4">
        <h3 className={`text-xl text-center ${lora.className} mb-6`}>
          Ma Philosophie
        </h3>
        <p className="text-sm text-justify md:text-center md:w-3/4 m-auto mb-6">
          Pour moi, chaque événement est unique et mérite d’être capturé de
          manière originale et mémorable. Je travaille avec mes clients pour
          comprendre leurs attentes et m&apos;assurer que chaque détail, chaque
          moment, soit préservé dans un format visuel de haute qualité.
        </p>

        <button className="block px-4 py-2 border border-secondary-brun rounded-full text-center text-sm w-3/5 hover:bg-primary hover:border-secondary-ligth transition-all duration-300 ">
          <Link href={"/contact"}>Contactez moi</Link>
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
  );
}
