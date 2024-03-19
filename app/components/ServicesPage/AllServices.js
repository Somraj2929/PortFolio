"use client";
import servicesDB from "@/public/data/servicesDB";
import Link from "next/link";
import { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";

const ServicePopup = ({ service, onClose }) => {
  return (
    <div class="fixed z-30 top-0 left-0 w-full h-full pt-2 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div class="bg-white my-10 mx-2 md:my-40 md:p-8 p-4 rounded-lg flex flex-col justify-center items-center md:w-[40rem] w-[20rem] min-h-[30rem] md:max-h-[35rem] max-h-[40rem] overflow-hidden">
        <button
          class="absolute top-4 right-4 bg-black text-white flex justify-center text-3xl py-2 px-2 rounded-full"
          onClick={onClose}
        >
          <IoArrowBackCircle />
        </button>
        <div class="w-full h-[300px] md:min-h-[250px] min-h-[200px] md:pt-0 pt-1">
          <img
            src={service.imagelink}
            alt={service.serviceName}
            class="w-full h-full object-fit rounded"
          />
        </div>
        <h2 class="text-xl font-semibold p-2">{service.serviceName}</h2>
        <p class="text-center md:px-4">{service.description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const [popupService, setPopupService] = useState(null);

  const handleReadMoreClick = (service) => {
    setPopupService(service);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setPopupService(null);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="container mx-auto p-4 overflow-x-hidden">
      <div className="flex justify-center items-center pb-4">
        <h1 className="text-4xl font-bold">Services</h1>
      </div>
      <div className="bg-homepage-gradient text-white flex flex-wrap justify-center items-center border rounded-xl">
        <img
          src="/images/banners/serviceweb.webp"
          alt="NextJS"
          className="hidden md:block rounded-xl"
        />
        <img
          src="/images/banners/servicemweb.webp"
          alt="Golang"
          className="block md:hidden rounded-xl"
        />
        <p className="md:text-lg text-lg text-center p-3">
          Join my digital journey! 🚀 I create enchanting online experiences
          with Next.js, blend DevOps magic, and turn dreams into reality with
          tailored cloud solutions. Elevate your backend with Golang, and let my
          design wizardry shine. Rest easy – your digital world is secure. Let's
          bring your aspirations to life! 🌟✨
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {servicesDB.map((service, index) => (
          <div
            key={index}
            className="flex flex-col text-left w-auto max-w-[24rem] border p-4  rounded-lg bg-services text-black"
          >
            <h2 className="text-xl font-semibold mt-2 hover:text-[#ff972d]">
              {service.serviceName}
            </h2>
            <p className="my-2 italic">
              {service.description.slice(0, 130) + "..."}
            </p>
            <div className="py-2">
              <button
                className="flex bg-black text-white px-2 py-1 rounded border-black border hover:bg-white hover:text-black"
                onClick={() => handleReadMoreClick(service)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
        {popupService && (
          <ServicePopup service={popupService} onClose={handleClosePopup} />
        )}
      </div>
    </div>
  );
};
export default Services;
