import gallery from "@/app/src/data/gallery";

import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  return (
    <section className="w-full flex flex-wrap gap-4 items-center justify-center">
      {gallery.map((image, index) => (
        <div
          key={index}
          className="flex items-center justify-center sm:w-52 sm:h-52 md:w-70 md:h-70 2xl:w-80 2xl:h-80 overflow-hidden relative"
        >
          <Link
            href={image}
            className="relative w-full h-full overflow-hidden cursor-pointer"
            target="_blank"
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
  );
}
