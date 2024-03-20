// app/components/common/Navbar.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-homepage-gradient p-2 w-full flex items-center justify-between overflow-x-hidden overscroll-x-none  sticky z-20 top-0 shadow-2xl shadow-silver-100">
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-2xl text-white focus:outline-none"
        >
          <FaBars />
        </button>
      </div>
      <div className="flex items-center justify-center ml-8 md:ml-2">
        <Link href="/">
          <Image
            src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/SomrajBGR.png"
            alt="Logo"
            width={128}
            height={56}
            className="h-14"
          />
        </Link>
      </div>

      <div className="hidden md:flex space-x-4 font-semibold gap-4 text-white ">
        <Link href="/">
          <p className="hvr-underline">Home</p>
        </Link>
        <Link href="/services">
          <p className="hvr-underline">Services</p>
        </Link>

        <Link href="/blogs">
          <p className="hvr-underline">Blog</p>
        </Link>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-[60%] bg-homepage-gradient text-white flex flex-col items-center">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-4xl">
              &times;
            </button>
          </div>
          <div className="flex flex-col font-semibold text-center">
            <Link href="/">
              <p className=" py-2 active:text-yellow-400">Home</p>
            </Link>
            <Link href="/services">
              <p className="py-2 active:text-yellow-400">Services</p>
            </Link>

            <Link href="/blogs">
              <p className="py-2 active:text-yellow-400">Blog</p>
            </Link>
          </div>
        </div>
      )}

      <Link
        href="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/cv/SomrajCVMain_Dev.pdf"
        target="_blank"
        download="SomrajCVMain_Dev.pdf"
      >
        <button className="hidden md:block hvr-call-action bg-indigo-500  text-white font-bold py-3 px-4 md:mr-4 rounded-[15px]   mr-[-2px]">
          Get Resume
        </button>
        {/* <button className="block md:hidden bg-indigo-600 hover:bg-green-800 text-white font-bold py-2 px-3 md:mr-4 rounded-[15px] md:w-[133px]  md:h-[51px]">
          <Image src="/images/resumedl.png" alt="Download Resume" />
        </button> */}

        <Image
          src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/resume.png"
          alt="Contact"
          width={40}
          height={40}
          className="block md:hidden "
        />
      </Link>
    </div>
  );
};

export default Navbar;
