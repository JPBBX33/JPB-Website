import prices from "../../../../data/servicesDetails";

export default function ServicesCards({ lora }) {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-10 text-center  justify-center">
      {prices.map((price, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 p-8 sm:w-[45%] bg-secondary-ligth justify-center"
        >
          <h2 className={`${lora.className} text-lg`}>{price.title}</h2>
          <p className="text-sm">{price.description}</p>
        </div>
      ))}
    </div>
  );
}
