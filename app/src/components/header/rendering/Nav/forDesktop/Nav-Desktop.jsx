import Link from "next/link";

import NavbarLinks from "../../../../../../constants/links";

export default function Nav() {
  return (
    <nav className="hidden xl:flex  p-4 mb-10 bg-secondary-ligth">
      <div className="flex justify-between items-center w-[80%] m-auto">

      <Link className="flex flex-col text-center font-bold text-xl" href={"/"}>
      Jean-Piere Bost <span className="">Photographe</span>
      </Link>

     
        <ul className="flex gap-6">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.endpoint} className="p-2">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
