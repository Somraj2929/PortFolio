import Link from "next/link";

const ContactService = () => {
  return (
    <div className="flex flex-wrap justify-between p-4 bg-services">
      <h3 className="ml-4 text-3xl">
        :) Feel free to reach out to me for any project or just to say hi! 📧🤝
      </h3>

      <Link href="/#contact" className="flex-l w-full md:w-auto">
        <button className="bg-black text-white py-2 px-6 w-full md:mr-4 rounded mt-2">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default ContactService;
