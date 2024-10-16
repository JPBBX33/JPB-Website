import { Lora } from "next/font/google";
import Link from "next/link";
import NavbarLinks from "../../../../../constants/links";
import TitleJPB from "../../../../../UI/TitleJPB";
const lora = Lora({ subsets: ["latin"],
  weight: "400",
});
export default function Nav() {
  return (
    <nav className="hidden xl:flex h-20 p-4 bg-secondary-ligth">
      <div className="flex justify-between items-center w-[80%] 2xl:w-3/4 m-auto">

      <TitleJPB lora={lora}/>

     
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
