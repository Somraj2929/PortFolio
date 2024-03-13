import servicesDB from "@/public/data/servicesDB";
import Link from "next/link";

const Services = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center pb-4">
        <h1 className="text-4xl font-bold">Services</h1>
      </div>
      <div className="bg-service-desc flex flex-wrap justify-center items-center border rounded-xl">
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
            className="flex flex-col text-left w-auto max-w-[24rem] border p-4  rounded-lg bg-services text-white"
          >
            <h2 className="text-xl font-semibold mt-2 hover:text-[#ff972d]">
              {service.serviceName}
            </h2>
            <p className="my-2 italic">
              {service.description.slice(0, 134) + "..."}
            </p>
            <div className="py-2 ">
              <Link href="/#contact">
                <button className="flex bg-black text-white px-2 py-1 rounded border-black border hover:bg-white hover:text-black ">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
