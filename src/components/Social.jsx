import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub size={25} />,
    path: "https://github.com/inga911",
  },
  {
    icon: <FaLinkedinIn size={25} />,
    path: "https://www.linkedin.com/in/inga-banaityte-861556260/",
  },
];
function Socials() {
  return (
    <div className="flex gap-8">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank"
          className="h-12 w-12 p-2 flex justify-center items-center border border-pink-500 rounded-full hover:bg-pink-600"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}

export default Socials;
