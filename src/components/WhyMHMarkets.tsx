import { Card } from "@/components/ui/card";
import { Player } from "@lottiefiles/react-lottie-player";
import lightningAnimation from "@/assets/animation/lightning.json";
import supportAnimation from "@/assets/animation/CustomerSupport.json";
import educationAnimation from "@/assets/animation/Educationedit.json";
import securityAnimation from "@/assets/animation/AccountCreating.json";
import analyticsAnimation from "@/assets/animation/reporting.json";
import managerAnimation from "@/assets/animation/job.json";

const WhyMHMarkets = () => {
  const features = [
    {
      animation: "https://lottie.host/8a36e17c-5e37-4c3e-8b3a-5f5b5f5f5f5f/lightning.json",
      title: "Quick Execution",
      description: "Experience execution at lightning speed. Our award-winning trading system lets you swiftly place orders to seize market opportunities."
    },
    {
      animation: supportAnimation,
      title: "24/7 Multi-lingual Customer Support",
      description: "Experience seamless support with our 24/7 multi-lingual customer service system, always ready to assist you."
    },
    {
      animation: educationAnimation,
      title: "Education & Training",
      description: "Elevate your trading prowess through our comprehensive training covering a spectrum of topics and confidently trade online with MetaTrader 5 and MetaTrader 4."
    },
    {
      animation: securityAnimation,
      title: "Account Risk Management",
      description: "We prioritize the safety and security of your trading activities with our strong background in account risk management."
    },
    {
      animation: analyticsAnimation,
      title: "Exclusive Market Research Reports",
      description: "Gain a competitive edge with our analysts providing timely insights and actionable trading ideas for well-informed decisions."
    },
    {
      animation: managerAnimation,
      title: "Dedicated Relationship Manager",
      description: "Our dedicated relationship manager offers proactive communication about market information, risk control and trading strategy to our esteemed clients so they can confidently navigate the financial markets."
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="text-primary">MH Markets</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-gray-900 border border-gray-700 hover:border-primary/60 transition-all duration-300 hover:scale-105 group hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/40 transition-colors">
                  <Player
                    autoplay
                    loop
                    src={feature.animation}
                    style={{ height: '40px', width: '40px' }}
                    className="lottie-player"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Assets Display */}
        <div className="absolute bottom-8 right-8 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl p-4 shadow-lg">
          <div className="text-sm text-gray-400 mb-1">Assets</div>
          <div className="text-2xl font-bold text-white">$60,322</div>
        </div>
      </div>
    </section>
  );
};

export default WhyMHMarkets;