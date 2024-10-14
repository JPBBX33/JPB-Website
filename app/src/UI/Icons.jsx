import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { IoClose, IoMenu } from "react-icons/io5";
import socialLinks from "../../constants/socialLinks";
const HamburgerMenu = ({ onClick, size, color }) => {
  return (
    <button onClick={onClick} aria-label="Ouvrir la barre latérale du menu">
      <IoMenu size={size} color={color} />
    </button>
  );
};

const CloseMenu = ({ onClick, size, color }) => {
  return (
    <button className="text-end" onClick={onClick} aria-label="Fermer la barre latérale du menu">
      <IoClose size={size} color={color} />
    </button>
  );
};

const FacebookIcon = ({ size, color }) => {
  return (
    <Link href={socialLinks.facebook.link} aria-label={socialLinks.facebook.aria}  target="_blank">
      <CiFacebook size={size} color={color}/>
    </Link>
  )
}
const InstagralIcon = ({ size, color }) => {
  return (
    <Link href={socialLinks.instagram.link} aria-label={socialLinks.instagram.aria}  target="_blank">
      <CiInstagram size={size} color={color}/>
    </Link>
  )
}
const TwitterIcon = ({ size, color }) => {
  return (
    <Link href={socialLinks.twitter.link} aria-label={socialLinks.twitter.aria} target="_blank">
      <CiTwitter  size={size} color={color} />
    </Link>
  )
}

export { CloseMenu, FacebookIcon, HamburgerMenu, InstagralIcon, TwitterIcon };

