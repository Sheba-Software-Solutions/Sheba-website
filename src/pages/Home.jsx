import HeroSection from "../Components/Home/HeroSection";
import SnowEffect from "../Components/Home/SnowEffect";
import NavBar from "../Components/Shared/NavBar";
import Laptop from "../Components/Home/Laptop";
import Header from "../Components/Home/Header"
import FeatureCards from "../Components/Home/FeatureCards"
import ClientSection from "../Components/Home/ClientSection"
import About from "../Components/Home/About";
import AboutSection from "../Components/Home/AboutSection";
import ServicesSection from "../Components/Home/ServicesSection";
import ProjectsSection from "../Components/Home/ProjectsSection";



const Home = () => {
  return (
    <div className="bg-gray-50 flex flex-col">
      {/* First section: SnowEffect, NavBar, HeroSection */}
      <div className="min-h-screen m-8 bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col relative">
        <SnowEffect />
        <NavBar />
        <HeroSection />
      </div>
      {/* Second section: Laptop */}
      <div className="m-8">
        <Laptop />
      </div>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <FeatureCards />
        <ClientSection />
      </div>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        <About />
        <AboutSection />
        
      </div>

      <div>
        <ServicesSection />
      </div>

      <div>
        <ProjectsSection />
        
      </div>
      


    </div>
  );
};

export default Home;