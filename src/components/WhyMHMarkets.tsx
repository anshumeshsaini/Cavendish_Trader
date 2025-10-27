import { Card } from "@/components/ui/card";
import Quick from "@/assets/QuickExecution.svg";
import supportAnimation from "@/assets/MultiSupport.webp";
import educationAnimation from "@/assets/Education.webp";
import securityAnimation from "@/assets/risk.webp";
import analyticsAnimation from "@/assets/report.webp";
import managerAnimation from "@/assets/manager.webp";

const WhyMHMarkets = () => {
  const features = [
    {
      icon: Quick,
      title: "Quick Execution",
      description: "Experience execution at lightning speed. Our award-winning trading system lets you swiftly place orders to seize market opportunities."
    },
    {
      icon: supportAnimation,
      title: "24/7 Multi-lingual Customer Support",
      description: "Experience seamless support with our 24/7 multi-lingual customer service system, always ready to assist you."
    },
    {
      icon: educationAnimation,
      title: "Education & Training",
      description: "Elevate your trading prowess through our comprehensive training covering a spectrum of topics and confidently trade online with MetaTrader 5 and MetaTrader 4."
    },
    {
      icon: securityAnimation,
      title: "Account Risk Management",
      description: "We prioritize the safety and security of your trading activities with our strong background in account risk management."
    },
    {
      icon: analyticsAnimation,
      title: "Exclusive Market Research Reports",
      description: "Gain a competitive edge with our analysts providing timely insights and actionable trading ideas for well-informed decisions."
    },
    {
      icon: managerAnimation,
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
            Why <span className="text-primary">Cavendish Trader</span>?
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
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-8 h-8 object-contain"
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