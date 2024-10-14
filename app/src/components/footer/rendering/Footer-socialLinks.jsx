import { FacebookIcon, InstagralIcon, TwitterIcon } from "../../../UI/Icons";
export default function footersocialLinks() {
  return (
    <div className="p-2">
      <p className="hidden md:block mb-4 text-center">Retrouvez-moi :</p>
      <ul className="flex flex-col md:flex-row gap-4">
        <li>
          <FacebookIcon size={40} color={"#F7F7F0"} />
        </li>
        <li>
          <InstagralIcon size={40} color={"#F7F7F0"} />
        </li>
        <li>
          <TwitterIcon size={40} color={"#F7F7F0"} />
        </li>
      </ul>
    </div>
  );
}
