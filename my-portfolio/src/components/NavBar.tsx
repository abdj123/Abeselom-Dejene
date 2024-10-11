import logo from "/ad_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

const NavBar = () => {
  return (
    <>
      <nav className=" mb-20 py-6 flex items-center justify-between">
        <div className="felx flex-shrink-0 items-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="m-2 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/abeselom-dejene-313a7526b/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/abdj123/" target="_blank">
            <FaGithub />
          </a>
          <a href="https://t.me/Abeslom_1" target="_blank">
            <BsTelegram />
          </a>
          <a href="https://leetcode.com/u/Abeselom_Dejene/" target="_blank">
            <SiLeetcode />
          </a>
          <a href="mailto:abeslom12@gmail.com" target="_blank">
            <MdOutlineMail />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
