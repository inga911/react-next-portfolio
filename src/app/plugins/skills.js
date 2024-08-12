import {
    FaHtml5,
    FaCss3,
    FaGit,
    FaReact,
    FaSass,
    FaNode,
    FaLaravel,
    FaBootstrap,
} from "react-icons/fa";
import { SiPhpmyadmin, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPhp } from "react-icons/bi";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
export const skills = {
    title: "My Skills",
    description: "",
    skillsList: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaGit />, name: "git" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <FaSass />, name: "Sass" },
        { icon: <FaNode />, name: "node.js" },
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <SiPhpmyadmin />, name: "phpMyAdmin" },
        { icon: <SiMongodb />, name: "mongoDb" },
        { icon: <IoLogoJavascript />, name: "Javascript" },
        { icon: <BiLogoPhp />, name: "php" },
        { icon: <RiTailwindCssFill />, name: "Tailwind" },
        { icon: <RiNextjsFill />, name: "Next.js" },
    ],
};