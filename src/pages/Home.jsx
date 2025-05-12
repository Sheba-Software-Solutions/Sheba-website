import HeroSection from "../Components/Home/HeroSection";
import SnowEffect from "../Components/Home/SnowEffect";
import NavBar from "../Components/Shared/NavBar";
import Laptop from "../Components/Home/Laptop";

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
    </div>
  );
};

export default Home;