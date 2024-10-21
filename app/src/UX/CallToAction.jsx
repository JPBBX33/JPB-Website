import Link from "next/link";
export default function CallToAction({ href, content }) {
  return (
    <button className="block ">
      <Link className="px-4 py-2 border border-secondary-brun rounded-full text-center text-sm w-3/5 hover:bg-secondary-brun hover:text-secondary-ligth transition-all duration-300 " href={href}>{content}</Link>
    </button>
  );
}
