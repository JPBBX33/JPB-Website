import { Lora } from "next/font/google";
import Image from "next/image";
const lora = Lora({ subsets: ["latin"], weight: "400" });
export default function index() {
  return (
    <section className="flex flex-col gap-8 p-6 text-justify  xl:w-[80%] mx-auto  2xl:w-3/4">
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-center p-4 bg-secondary-ligth">
        <div className="lg:w-2/4">
          <h1 className={`text-xl text-center ${lora.className} mb-4`}>
            Qui suis-je ?
          </h1>
          <p className=" text-justify md:text-justify md:w-3/4 m-auto p-4">
            <strong>Photographe professionnel</strong> depuis plus de 25 ans, je
            me suis spécialisé dans le reportage évênementiel. J&apos;ai eu
            l&apos;honneur de couvrir plus de 600 mariages, allant des plus
            prestigieux aux plus intimes. Mon approche, toujours guidée par ma
            sensibilité et mon expérience, me permet de capturer l&apos;essence
            unique de chaque événement. Ce métier est pour moi bien plus
            qu&apos;une profession: c&apos;est une passion et un engagement à
            créer des souvenirs qui dureront toute une vie.
          </p>
        </div>

        <div className="lg:w-2/4 sm:p-4">
          <Image
            src={"/images/GD_0199.JPG"}
            width={500}
            height={500}
            alt="Photo de Jean-Pierre Bost"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center p-4 bg-secondary-ligth">
        <div className="lg:w-2/4">
          <h1 className={`text-xl text-center ${lora.className} mb-4`}>
            Parcours et Expertise
          </h1>
          <p className=" text-justify md:text-justify md:w-3/4 m-auto p-4">
            En tant que <strong>photographe expérimenté</strong>, j&apos;ai
            travaillé sur une large variété d&apos;événements, qu&apos;il
            s&apos;agisse de mariages, de réceptions privées, ou de conférences
            professionnelles. Mon expérience me permet de m&apos;adapter à
            chaque contexte, tout en offrant une approche visuelle qui allie
            créativité et technique.
          </p>
        </div>

        <div className="lg:w-2/4 sm:p-4">
          <Image
            src={"/images/JP1_0633.jpg"}
            width={500}
            height={500}
            alt="Photo de Jean-Pierre Bost"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 bg-secondary-ligth">
        <div className="lg:w-2/4">
          <h1 className={`text-xl text-center ${lora.className} mb-4`}>
            Prises de Vue Aériennes
          </h1>
          <p className="text-justify md:w-3/4 m-auto p-4">
            Récemment, j&apos;ai élargi mon champ d&apos;expertise avec
            l&apos;utilisation de drones, permettant des prises de vue aériennes
            spectaculaires. Ces perspectives ajoutent une nouvelle dimension à
            mes reportages, idéales pour capturer des événements en plein air,
            des paysages viticoles, ou des projets immobiliers. Cette approche
            permet d&apos;apporter une touche unique et moderne à vos
            événements.
          </p>
        </div>

        <div className="lg:w-2/4 sm:p-4">
          <Image
            src="/images/JP1_4159.JPG"
            width={500}
            height={500}
            alt="Photo de Jean-Pierre Bost"
          />
        </div>
      </div>
    </section>
  );
}
