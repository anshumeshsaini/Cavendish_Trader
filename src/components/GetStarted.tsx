import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";
import RegisterAnimation from "../assets/animation/Login.json";
import DepositAnimation from "@/assets/animation/deposit.json";
import TradeAnimation from "@/assets/animation/ stock.json";

const GetStarted = () => {
  const steps = [
    {
      number: "1",
      title: "Register",
      subtitle: "Complete the Registration Process to Create your Account",
      animation: RegisterAnimation, // Update with your actual path
      features: [
        "Fast and hassle-free registration process",
        "Personal data protection"
      ]
    },
    {
      number: "2", 
      title: "Deposit",
      subtitle: "Login to your Live Account and Add Funds",
      animation: DepositAnimation, // Update with your actual path
      features: [
        "Multiple secure payment methods with no hidden fees",
        "Instant deposits to get started right away"
      ]
    },
    {
      number: "3",
      title: "Trade",
      subtitle: "Access the Global Financial Markets Through our Online Trading Platform",
      animation: TradeAnimation, // Update with your actual path
      features: [
        "Access advanced trading tools on MetaTrader 4/MetaTrader 5"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Trading in <span className="text-primary">3 Simple Steps</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <Card 
              key={step.number}
              className="p-8 bg-gray-900 border border-gray-700 hover:border-primary/60 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Lottie Animation with glow effect */}
              <div className="mb-6 relative">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-4 mx-auto relative">
                  <Player
                    autoplay
                    loop
                    src={step.animation}
                    style={{ width: '80px', height: '80px' }}
                    className="z-10 relative"
                  />
                  <div className="absolute inset-0 bg-primary/30 rounded-xl blur-xl group-hover:bg-primary/50 transition-all duration-300"></div>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-3">
                  <h3 className="text-2xl font-bold text-white mr-2">{step.title}</h3>
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.subtitle}
                </p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <div className="text-center mb-4">
                  <span className="text-sm font-semibold text-white">WHAT YOU CAN EXPECT</span>
                </div>
                <ul className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" className="px-12 py-4 text-lg bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;