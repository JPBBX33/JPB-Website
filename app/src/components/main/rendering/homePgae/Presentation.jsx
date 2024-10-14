export default function Presentation({ lora }) {
  return (
    <div className="p-6 text-justify my-10 xl:w-[80%] mx-auto  2xl:w-3/4">
      <h1 className={`text-xl text-center ${lora.className} mb-6`}>
        Photographe & Vidéaste Événementiel
      </h1>
      <p className="text-sm text-justify md:text-center md:w-3/4 m-auto mb-4">
        Bonjour, je m’appelle <strong>Jean-Pierre BOST</strong> et je suis{" "}
        <strong>photographe</strong> spécialisé dans le{" "}
        <strong>reportage événementiel</strong>, l’illustration et les prises de
        vue aériennes par drone. Basé à Bordeaux je mets mon expertise au
        service de ceux qui souhaitent immortaliser leurs événements d&apos;une
        manière authentique et créative.
      </p>
      <p className="text-sm text-justify md:text-center md:w-3/4 m-auto">
        Avec plus de <strong>25 ans d’expérience en photographie</strong> , j'ai
        eu la chance de couvrir des événements de toutes tailles, allant des
        mariages intimes aux grandes conférences professionnelles. Mon approche
        consiste à capturer les moments clés tout en racontant l’histoire de
        chaque événement à travers un reportage visuel dynamique. Récemment, je
        me suis formé à l’utilisation de drones, ce qui m'a permis d'ajouter une
        nouvelle dimension à mon travail. Les prises de vue aériennes apportent
        un angle spectaculaire et unique, que ce soit pour des événements, des
        vidéos promotionnelles immobiliers, propriétés viticole, bcp , etc... ou
        des projets créatifs.
      </p>
    </div>
  );
}
