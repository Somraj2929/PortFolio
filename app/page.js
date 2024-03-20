import Layout from "./layout";
import "tailwindcss/tailwind.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import ContactMe from "./components/landing/ContactMe";
import MainSection from "./components/landing/MainSection";
import ProjectSection from "./components/landing/ProjectSection";
import SkillsSection from "./components/landing/SkillSection";

const App = () => {
  return (
    <Layout>
      <Navbar />
      <MainSection />
      <ProjectSection />
      <SkillsSection />
      <ContactMe />
      <Footer />
    </Layout>
  );
};

export default App;
