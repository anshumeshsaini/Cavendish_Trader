import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const AccountTypes = () => {
  const accounts = [
    {
      name: "STANDARD",
      description: "Ideal for regular trading with a USD 50 deposit.",
      deposit: "USD 50",
      features: [
        "Low Spread",
        "MetaTrader 4 & 5",
        "Leverage up to 1:2000",
        "Stop Out Level: 30%"
      ],
      recommended: false
    },
    {
      name: "ECN",
      description: "Professional-grade trading with ultra-low spreads starting at USD 1,000.",
      deposit: "USD 1,000",
      features: [
        "Ultra-Low Spread",
        "MetaTrader 4 & 5",
        "Leverage up to 1:2000",
        "Stop Out Level: 30%"
      ],
      recommended: true
    },
    {
      name: "PRIME",
      description: "Specialized accounts for high-volume traders with USD 100 deposits.",
      deposit: "USD 100",
      features: [
        "Extra-low Spread",
        "MetaTrader 4 & 5",
        "Leverage up to 1:2000",
        "Stop Out Level: 30%"
      ],
      recommended: false
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose the Trading Account That's Right for You!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {accounts.map((account, index) => (
            <Card 
              key={account.name}
              className={`relative p-8 bg-gray-900 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                account.recommended 
                  ? 'border-primary shadow-lg shadow-primary/20' 
                  : 'border-gray-700 hover:border-primary/50'
              }`}
            >
              {account.recommended && (
                <div className="absolute -top-3 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-3 ${
                  account.recommended ? 'text-primary' : 'text-white'
                }`}>
                  {account.name}
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  {account.description}
                </p>
                
                <div className="mb-2">
                  <div className="text-4xl font-bold text-white mb-1">
                    {account.deposit}
                  </div>
                  <div className="text-gray-400 text-sm">First Deposit</div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">What's included</h4>
                <ul className="space-y-3">
                  {account.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className={`w-5 h-5 ${
                        account.recommended ? 'text-primary' : 'text-green-500'
                      }`} />
                      <span className="text-gray-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={account.recommended ? "primary" : "outline"}
                className={`w-full ${
                  !account.recommended ? 'border-gray-600 text-white hover:bg-gray-800' : ''
                }`}
                size="lg"
              >
                Register
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountTypes;