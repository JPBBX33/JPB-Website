import { Lora } from "next/font/google";
import Link from "next/link";
import NavbarLinks from "../../../../../../constants/links";
const lora = Lora({ subsets: ["latin"], weight: "400" });
export default function Nav() {
  return (
    <nav className="hidden xl:flex  p-4 bg-secondary-ligth">
      <div className="flex justify-between items-center w-[80%] 2xl:w-3/4 m-auto">

      <Link className={`text-center font-bold text-xl ${lora.className}`} href={"/"}>
      Jean-Piere Bost <span className="text-[#706044]">Photographe</span>
      </Link>

     
        <ul className="flex gap-6">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.endpoint} className="p-2 hover:underline transition-all duration-200">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
