import { Lora } from "next/font/google";

import GalleryBanner from "./Gallery-banner";
import GalleryItems from "./Gallery-items";

const lora = Lora({ subsets: ["latin"], weight: "400" });

export default function Index() {
  return (
    <>
      <GalleryBanner lora={lora} />

      <section className="p-6 text-justify mb-10 mt-6 xl:my-10 xl:w-[80%] mx-auto  2xl:w-3/4">
        <GalleryItems />
      </section>
    </>
  );
}
