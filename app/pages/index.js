import Navbar from "../components/common/Navbar";
import ContactMe from "../components/landing/ContactMe";
import MainSection from "../components/landing/MainSection";
import ProjectSection from "../components/landing/ProjectSection";
import SkillsSection from "../components/landing/SkillSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <ProjectSection />
      <SkillsSection />
      <ContactMe />
    </>
  );
};

export default HomePage;
