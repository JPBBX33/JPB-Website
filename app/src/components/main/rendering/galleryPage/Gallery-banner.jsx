
export default function GalleryBanner({lora}) {
  return (
    <div className="relative min-h-96 w-full bg-galleryPage bg-cover">
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-60"
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-secondary-ligth text-center p-6">
          <h1 className={` ${lora.className} text-start text-xl mb-6`}>
            L&apos;Art de capturer l&apos;éphémère.
          </h1>
          <p className="mb-4 text-sm xl:text-base sm:w-2/4">
            Mon style de reportage est discret mais efficace, ce qui me permet
            de saisir des moments spontanés, des émotions réelles et des détails
            qui font la richesse de chaque événement. Je m’efforce de{" "}
            <strong>retranscrire l’ambiance authentique d’un événement</strong>,
            tout en capturant des images naturelles et pleines de vie.
          </p>
         
          <p className="text-sm xl:text-base sm:w-2/4">Je vous souhaites une belle visite.</p>
        </div>
      </div>
  );
}
