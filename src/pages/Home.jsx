import HeroSection from "../Components/Home/HeroSection";
import SnowEffect from "../Components/Home/SnowEffect";
// import HeroSection from "../Components/Home/HeroSection";
import NavBar from "../Components/Shared/NavBar";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Shared/Footer";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-grey-50 flex flex-col ">
        <div className="m-8 flex-1 bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col relative">
          <SnowEffect />
          <NavBar />

          <HeroSection />
          
          <About />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;