import "tailwindcss/tailwind.css";
const { default: Footer } = require("../components/common/Footer");
const { default: Navbar } = require("../components/common/Navbar");
import CarouselBanner from "../components/ServicesPage/Banners/Carousel";
import CarouselMweb from "../components/ServicesPage/Banners/CarouselMweb";
import Services from "../components/ServicesPage/AllServices";
import Testimonials from "../components/ServicesPage/Testimonials";
import ContactService from "../components/ServicesPage/ContactService";

const index = () => {
  return (
    <>
      <Navbar />
      <CarouselBanner />
      <CarouselMweb />
      <Services />
      <Testimonials />
      <ContactService />
      <Footer />
    </>
  );
};

export default index;
