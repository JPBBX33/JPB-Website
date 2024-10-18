export default function Presentation({ lora }) {
  return (
    <div className="p-6 text-justify my-10 xl:w-[80%] mx-auto  2xl:w-3/4">
      <h1 className={`text-xl text-center ${lora.className} mb-6`}>
        Photographe & Vidéaste Événementiel
      </h1>
      <p className="text-sm xl:text-base text-justify md:text-center md:w-3/4 m-auto mb-4">
        Bonjour, je m’appelle <strong>Jean-Pierre BOST</strong> et je suis{" "}
        <strong>photographe</strong> spécialisé dans le{" "}
        <strong>reportage événementiel</strong>, l’illustration et les prises de
        vue aériennes par drone. Basé à Bordeaux je mets mon expertise au
        service de ceux qui souhaitent immortaliser leurs événements d&apos;une
        manière authentique et créative.
      </p>
     
    </div>
  );
}
