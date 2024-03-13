import { FaBuildingColumns, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactMe = () => {
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
              <p> &nbsp;&nbsp; Jodhpur, India.</p>
            </span>
            <span className="flex flex-row items-center mt-2 mb-2">
              <FaPhone className="h-6 w-6" />
              <p> &nbsp;&nbsp; +91-8058828957</p>
            </span>
            <span className="flex flex-row items-center mt-2 mb-2">
              <IoMdMail className="h-6 w-6" />
              <p> &nbsp;&nbsp; somrajbishnoirock29@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
      {/* right side */}
      <div
        className="flex flex-col items-center justify-center p-8"
        id="contact"
      >
        <form className="flex flex-col items-end">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="border-2 border-indigo-400  rounded-xl py-2 px-3 w-[40vh] md:w-[35rem]  text-black font-medium"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="border-2 border-indigo-400  rounded-xl py-2 px-3 w-[40vh] md:w-[35rem] text-black font-medium"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block  font-semibold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone"
              className="border-2 border-indigo-400  rounded-xl py-2 px-3 w-[40vh] md:w-[35rem] text-black font-medium"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="border-2 border-indigo-400  rounded-xl py-2 px-3 w-[40vh] md:w-[35rem] h-28 text-black font-medium"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
