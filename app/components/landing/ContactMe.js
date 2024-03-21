"use client";
import { FaBuildingColumns, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useEffect } from "react";
import Link from "next/link";

const ContactMe = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://s.pageclip.co/v1/pageclip.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-homepage-gradient text-white flex flex-wrap overflow-x-hidden overscroll-x-none justify-evenly shadow-2xl shadow-black">
      {/* left side */}
      <div className="flex flex-col justify-center p-8">
        <div className="text-left">
          <h1 className="text-5xl leading-tight font-bold mb-6">
            Get in touch
          </h1>
          <p className="max-w-[80vh] w-auto mb-6 text-gray-100 italic">
            <span className="text-wrap">
              I am always open to new opportunities and collaborations. Feel
              free to reach out to me for any project or just to say hi! 📧🤝
            </span>
          </p>
          <div className="flex flex-col italic ">
            <span className="flex flex-row items-center mt-2 mb-2">
              <FaBuildingColumns className="h-6 w-6" />
              <Link href="https://shorturl.at/apxF6" target="_blank">
                <p> &nbsp;&nbsp; Jodhpur, India.</p>
              </Link>
            </span>
            <span className="flex flex-row items-center mt-2 mb-2">
              <FaPhone className="h-6 w-6" />
              <Link href="tel:+918058828957">
                <p> &nbsp;&nbsp; +91-8058828957</p>
              </Link>
            </span>
            <span className="flex flex-row items-center mt-2 mb-2">
              <IoMdMail className="h-6 w-6" />
              <Link href="mailto:somrajbishnoirock29@gmail.com">
                <p> &nbsp;&nbsp; somrajbishnoirock29@gmail.com</p>
              </Link>
            </span>
          </div>
        </div>
      </div>
      {/* right side */}
      <div
        className="flex flex-col items-center justify-center p-8"
        id="contact"
      >
        <form
          action="https://send.pageclip.co/xdvSeQsikzoNQNna7lOQ0FUofEN9RgBp/Portfolio"
          className="flex flex-col items-end pageclip-form"
          method="post"
          autoComplete="on"
        >
          <div className="mb-4">
            <label id="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className=" focus:outline-green-500 border-indigo-400  rounded-xl py-2 px-3 w-[40vh] md:w-[35rem]  text-black font-medium"
            />
          </div>
          <div className="mb-4">
            <label id="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className=" focus:outline-green-500 border-indigo-400  rounded-xl py-2 px-3 w-[40vh] md:w-[35rem] text-black font-medium"
            />
          </div>
          <div className="mb-4">
            <label id="phone" className="block  font-semibold mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Your Phone"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              className=" focus:outline-green-500 border-indigo-400  rounded-xl py-2 px-3 w-[40vh] md:w-[35rem] text-black font-medium"
            />
          </div>
          <div className="mb-4">
            <label id="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className=" focus:outline-green-500 border-indigo-400  rounded-xl py-2 px-3 w-[40vh] md:w-[35rem] h-28 text-black font-medium"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded pageclip-form__submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
