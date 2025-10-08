import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pri.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-black">
      {/* Background Image with Dark Overlay - OPTION: Make it darker */}
      <div className="absolute inset-0 bg-black/70 z-0" /> {/* Changed from 60 to 70 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Your <span className="text-primary">Trusted Global</span>
            <br />
            <span className="text-white">Forex & CFD Broker</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Leading Multi-Asset Broker to Trade CFDs on
            <br />
            Forex, Indices, Stocks, Commodities & Metals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
              Start Trading Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
              Try A Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;