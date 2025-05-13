import { Smile } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeatureCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <FeatureCard 
          bgColor="bg-black"
          title={
            <div>
              <span className="text-3xl font-bold text-white">Discover our </span>
              <span className="text-3xl font-bold text-blue-200">Work</span>
            </div>
          }
          description="These are our crafts"
          buttonText="Our Portfolio"
        />
        <FeatureCard 
          bgColor="bg-gradient-to-b from-blue-100 to-blue-200"
          title={
            <div className="flex justify-between items-start">
              <span className="text-3xl font-bold text-black">Join us</span>
              <div className="text-black relative">
                <span className="absolute -top-2 right-8 text-2xl">✕</span>
                <span className="absolute -top-2 right-3 text-2xl">✕</span>
                <Smile size={40} className="mt-3" />
              </div>
            </div>
          }
          description="The best place to work and grow"
          buttonText="Check open positions"
          buttonVariant="secondary"
        />
        <FeatureCard
          bgColor="bg-black"
          title={
            <div className="flex justify-between items-start">
              <div>
                <span className="text-3xl font-bold text-white">Have a </span>
                <span className="text-3xl font-bold text-blue-200">project</span><br />
                <span className="text-3xl font-bold text-white">in mind?</span>
              </div>
              <div className="relative">
                <div className="absolute -top-6 right-0 w-14 h-14 bg-gradient-to-b from-blue-100 to-blue-200 rounded-full"></div>
              </div>
            </div>
          }
          description="Reach out and let us sort it out"
          buttonText="Request a meeting"
        />
      </div>
    </div>
  );
};

export default FeatureCards;