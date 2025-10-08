import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, TrendingUp } from "lucide-react";

const InvestmentPlans = () => {
  const plans = [
    {
      name: "STARTER PLAN",
      description: "Perfect for beginners with moderate returns and low risk.",
      minDeposit: "USD 50",
      features: [
        "Daily Returns: 2-3%",
        "Trade Duration: 30 Days",
        "Risk Level: Low",
        "Capital Protection",
        "24/7 Trading"
      ],
      estimatedReturn: "60-90% Monthly",
      recommended: false
    },
    {
      name: "PROFESSIONAL PLAN",
      description: "Advanced trading with higher returns for experienced investors.",
      minDeposit: "USD 1,000",
      features: [
        "Daily Returns: 3-5%",
        "Trade Duration: 45 Days",
        "Risk Level: Medium",
        "Priority Support",
        "Advanced Analytics"
      ],
      estimatedReturn: "135-225% Monthly",
      recommended: true
    },
    {
      name: "PREMIUM PLAN",
      description: "Maximum returns with expert portfolio management.",
      minDeposit: "USD 100",
      features: [
        "Daily Returns: 4-7%",
        "Trade Duration: 60 Days",
        "Risk Level: High",
        "Dedicated Account Manager",
        "Custom Strategies"
      ],
      estimatedReturn: "240-420% Monthly",
      recommended: false
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Invest Your Money & Watch It Grow!
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our expert traders will handle your investments and deliver consistent returns. 
            Start with as little as $50 and see your money work for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative p-8 bg-gray-900 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.recommended 
                  ? 'border-primary shadow-lg shadow-primary/20' 
                  : 'border-gray-700 hover:border-primary/50'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className={`w-6 h-6 ${
                    plan.recommended ? 'text-primary' : 'text-green-500'
                  }`} />
                  <h3 className={`text-2xl font-bold ${
                    plan.recommended ? 'text-primary' : 'text-white'
                  }`}>
                    {plan.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-2">
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.minDeposit}
                  </div>
                  <div className="text-gray-400 text-sm">Minimum Deposit</div>
                </div>

                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="text-lg font-semibold text-green-400 mb-1">
                    {plan.estimatedReturn}
                  </div>
                  <div className="text-gray-400 text-sm">Estimated Monthly Return</div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Plan Features</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className={`w-5 h-5 ${
                        plan.recommended ? 'text-primary' : 'text-green-500'
                      }`} />
                      <span className="text-gray-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.recommended ? "primary" : "outline"}
                className={`w-full ${
                  !plan.recommended ? 'border-gray-600 text-white hover:bg-gray-800' : ''
                }`}
                size="lg"
              >
                Start Investing
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            *Returns are estimates based on historical performance. Past performance is not indicative of future results. 
            All investments carry risk. Please read our risk disclosure before investing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;