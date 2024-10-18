import { Lora } from "next/font/google";
import Carousel from "./Carousel";
import Philosophy from "./Philosophy";
import Presentation from "./Presentation";
import Services from "./Services";
const lora = Lora({ subsets: ["latin"], weight: "400" });

export default function Index() {
  return (
    <section>
      <div className="mb-10 mt-6 xl:my-10 xl:w-[80%] mx-auto  2xl:w-3/4 p-4">
        <Carousel />
      </div>
      <Presentation lora={lora} />
      <section className="bg-secondary-ligth w-full p-6 my-16">
        <Services lora={lora} />
      </section>

      <Philosophy lora={lora} />
    </section>
  );
}
