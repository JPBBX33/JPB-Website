import Link from "next/link";

import { Lora } from "next/font/google";
import NavbarLinks from "../../../../../../constants/links";
import { CloseMenu, HamburgerMenu } from "../../../../../UI/Icons";

const lora = Lora({ subsets: ["latin"], weight: "400" });
export default function Nav({ handleClick, menuOpen }) {
  return (
    <nav className="flex xl:hidden justify-between items-center px-8 py-4 bg-secondary-ligth">
      <Link className={`flex flex-col text-center font-bold text-lg ${lora.className}`} href={"/"}>
      Jean-Piere Bost <span className="text-[#706044]">Photographe</span>
      </Link>
 

      <HamburgerMenu size={40} color={"#1C1406"} onClick={handleClick} />

      <div
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } flex-col gap-6 w-full bg-black opacity-90 fixed z-50 top-0 right-0 h-full transition-transform duration-500 ease-in-out p-6`}
      >
        <div className="flex justify-end">
        <CloseMenu size={40} color={"#F7F7F0"} onClick={handleClick} />
        </div>

        <ul className="flex flex-col justify-center items-center h-full gap-8 text-lg">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.endpoint} className="p-2 text-white">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
