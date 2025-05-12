import HeroSection from "../Components/Home/HeroSection";
import SnowEffect from "../Components/Home/SnowEffect";
import NavBar from "../Components/Shared/NavBar";


const Home = () => {
  return (
    <div className="min-h-screen bg-grey-50 flex flex-col ">
      <div className="m-8 flex-1 bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col relative">
        <SnowEffect />
        <NavBar />
        <HeroSection />

        
      </div>
    </div>
  );
};

export default Home;