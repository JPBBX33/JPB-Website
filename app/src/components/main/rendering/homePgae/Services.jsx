import Image from "next/image";
import services from "../../../../../data/services";
export default function Services({ lora }) {
  return (
    <div className="px-2 py-6">
      <h2 className={`text-xl text-center ${lora.className} mb-8 `}>
        Services proposés
      </h2>
      <div className="flex gap-10 items-center justify-center flex-wrap w-full ">
        {services.map((service) => (
          <div key={service.id} className="md:max-w-[40%] lg:max-w-[30%] ">
            <div className="relative">
              <Image
                src={service.image}
                width={500}
                height={500}
                alt={`Image du service ${service.title}`}
              />

              <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full bg-black opacity-70" aria-hidden="true"></div>

              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-30 text-secondary-ligth text-center p-6 hover:scale-105 transition-transform">
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
