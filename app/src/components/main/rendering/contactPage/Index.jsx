import { Lora } from "next/font/google";
import FormContainer from "../../logic/contactPage/Form-logic";
const lora = Lora({ subsets: ["latin"], weight: "400" });
export default function Index() {
  return (
    <section className="flex flex-col sm:mb-10 sm:mt-6 xl:my-10 xl:w-[80%] mx-auto  2xl:w-3/4 p-4 min-h-lvh">
      <div className="w-full md:w-3/4 m-auto mb-10">
        <h1
          className={`w-3/4 m-auto text-xl text-center ${lora.className} mb-6`}
        >
          Envie d&apos;immortaliser un moment unique ?
        </h1>
        <p className="text-justify sm:text-center">
        Si vous avez un projet d&apos;événement ou souhaitez en savoir plus sur mes services, je serais ravi d&apos;en discuter avec vous.
        </p>
      </div>

      <FormContainer />
    </section>
  );
}
