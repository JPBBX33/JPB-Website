import { IoClose, IoMenu } from "react-icons/io5";

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

export { CloseMenu, HamburgerMenu };
