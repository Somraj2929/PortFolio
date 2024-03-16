import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between shadow-2xl shadow-white items-center px-10 py-6 bg-homepage-gradient text-white overflow-hidden overscroll-none ">
      <div>
        <p>
          &copy; 2024 <a href="https://www.linkedin.com/in/somraj29">Somraj</a>
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="https://www.instagram.com/rock_2929/">
          <FaInstagram />
        </Link>
        <Link href="https://www.facebook.com/rocksomraj.bishnois">
          <FaFacebook />
        </Link>
        <Link href="https://x.com/Rock_Somraj2929">
          <FaXTwitter />
        </Link>
        <Link href="https://github.com/somraj2929">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/somraj29/">
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
