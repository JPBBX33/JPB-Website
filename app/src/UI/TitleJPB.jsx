import Link from 'next/link'
export default function TitleJPB({lora}) {
  return (
    <Link className={`text-center font-bold text-lg ${lora.className}`} href={"/"}>
    Jean-Piere Bost <span className="text-[#706044]">Photographe</span>
    </Link>
  )
}
