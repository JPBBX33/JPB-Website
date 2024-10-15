import Link from 'next/link';
import links from '../../../constants/links';
export default function FooterNavLinks() {
  return (
    <div className="p-2">
    <ul className="flex flex-col gap-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.endpoint} className="hover:underline">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )
}
