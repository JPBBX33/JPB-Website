export default function ServicesBanner({ lora }) {
  return (
    <div className="relative min-h-80 w-full bg-servicesBaner bg-cover">
      <div
        className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-60"
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-secondary-ligth text-center p-6">
        <h1 className={` ${lora.className} text-start text-xl mb-6`}>
          Informations relatives aux services proposés
        </h1>
        <p className="mb-4 text-sm xl:text-base sm:w-2/4">
          Pour un devis précis, n’hésitez pas à me partager vos attentes. Je
          vous fournirai une proposition sur-mesure, avec des options
          supplémentaires telles que la prise de vue par drone ou toutes autres demandes.
        </p>
        
      </div>
    </div>
  );
}
