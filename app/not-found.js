import { Fragment } from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const NotFoundPage = () => (
  <Fragment>
    <section className=" bg-white  flex flex-col justify-center items-center">
      <div className="flex flex-col z-10">
        <h1 className="text-6xl md:mb-0 md:mt-10 mb-10 mt-20">🧑‍💻 404 🥲</h1>
      </div>

      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Background Image"
        className="flex justify-center items-center md:mt-[-10rem] md:mb-[-5rem]"
      />

      <div className="container mx-auto text-center">
        <div className="text-center md:mt-[-50px]">
          <h3 className="text-6xl">Look like you're lost</h3>
          <p className="p-2">
            The page you are looking is still in Developing🧑‍💻
          </p>
          <Link
            href="/"
            className=" text-white py-2 px-4 bg-indigo-500 rounded my-8 inline-block"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  </Fragment>
);

export default NotFoundPage;
