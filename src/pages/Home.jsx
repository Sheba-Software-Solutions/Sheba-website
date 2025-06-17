import HeroSection from "../Components/Home/HeroSection";
import SnowEffect from "../Components/Home/SnowEffect";
import NavBar from "../Components/Shared/NavBar";
import Header from "../Components/Home/Header"
import FeatureCards from "../Components/Home/FeatureCards"
import About from "../Components/Home/About";
import AboutSection from "../Components/Home/AboutSection";
import Services from "../Components/Services/Services";
import ProjectsSection from "../Components/Home/ProjectsSection";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Shared/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col">
        {/* First section: SnowEffect, NavBar, HeroSection */}
        <div className="min-h-screen m-8 bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col relative">
          <SnowEffect />
          <NavBar />
          <HeroSection />
        </div>
        
        {/* Header and Feature Cards */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100">
          <Header />
          <FeatureCards />
        </div>
        
        {/* About sections */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100">
          <About />
          <AboutSection />
        </div>

        {/* Services section - Only our professional Services component */}
        <div>
          <Services />
        </div>

        {/* Projects section */}
        <div>
          <ProjectsSection />
        </div>
        
        {/* Contact section */}
        <div className="m-8 bg-gradient-to-b from-blue-100 to-blue-200 relative">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;