
import Link from "next/link";

import FooterNavLinks from "./Footer-NavLinks";
import FooterSocialLinks from "./Footer-socialLinks";
export default function index() {

  const actualYear = new Date().getFullYear();

  return (
    <footer className="text-secondary-ligth">
      <div className="bg-[#706044] p-6 text-sm">

        <div className="flex justify-between items-center mb-6 p-4 sm:w-3/4 2xl:w-3/5 m-auto">

         <FooterNavLinks />

         <FooterSocialLinks />
      </div>
        <div>
          <p className="text-center mb-4">
            N&apos;hésitez pas à me contacter ici:{" "}
            <Link
              href={"/contact"}
              aria-label="Être redirigé vers la page de contact."
              className="underline font-semibold"
            >
              Contact
            </Link>
            .
          </p>
        </div>

        <div className="text-center">
          <p>© Jean-Pierre Bost {actualYear} - Site créé par <Link href={"https://romain-hernandez.com/"} className="italic underline">DotRoms</Link></p>
        </div>

      </div>
    </footer>
  );
}
