import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import trade from "@/assets/trade.webp";

const TradingPlatform = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold bg-gray-800 text-gray-200 border-gray-700">
            🏆 Award Winning Platform
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Navigate Global Markets
            <span className="block text-primary mt-2">With Confidence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Trade CFDs on your favorite instruments using our advanced 
            <span className="text-white font-semibold bg-primary/20 px-2 py-1 rounded-md mx-1">
              MetaTrader 4 & MetaTrader 5
            </span>
            platforms with lightning-fast execution.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
          {/* Platform Preview - Enhanced */}
          <div className="xl:col-span-8 relative group">
            <div className="relative">
              {/* Main Platform Card */}
              <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/15 opacity-60"></div>
                
                {/* Platform Image Container */}
                <div className="relative rounded-2xl overflow-hidden border border-gray-600 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-[1.02]">
                  <img
                    src={trade}
                    alt="Advanced Trading Platform Interface"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Live Trading Indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-emerald-500/30">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-400 text-xs font-semibold">LIVE</span>
                  </div>
                </div>

                {/* Enhanced Stats Overlay */}
                <div className="absolute top-6 left-6 bg-gray-800/95 backdrop-blur-md rounded-xl p-4 border border-gray-600 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="text-2xl font-bold text-white">6,275</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between gap-6 items-center">
                      <span className="text-gray-400">Profit</span>
                      <span className="text-green-400 font-semibold flex items-center gap-1">
                        ↗ +2.81%
                      </span>
                    </div>
                    <div className="flex justify-between gap-6 items-center">
                      <span className="text-gray-400">Loss</span>
                      <span className="text-red-400 font-semibold flex items-center gap-1">
                        ↘ -0.11%
                      </span>
                    </div>
                    <div className="flex justify-between gap-6 items-center">
                      <span className="text-gray-400">Neutral</span>
                      <span className="text-white font-semibold">2.71%</span>
                    </div>
                  </div>
                </div>

                {/* Platform Badges */}
                <div className="absolute bottom-6 left-6 flex gap-2">
                  <div className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    MT4
                  </div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    MT5
                  </div>
                </div>

                {/* Enhanced Assets Card */}
                <div className="absolute bottom-6 right-6 bg-gray-800/95 backdrop-blur-md border border-gray-600 rounded-xl p-4 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Total Assets</div>
                  <div className="text-2xl font-bold text-white flex items-center gap-2">
                    $63,815
                    <span className="text-green-400 text-sm font-semibold">+2.3%</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-ping opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-primary/30 to-blue-400/30 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Features List - Enhanced */}
          <div className="xl:col-span-4 space-y-8">
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Traders Choose Us
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Experience the difference with our cutting-edge trading technology and unparalleled support.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "",
                  title: "Lightning Execution",
                  description: "Trade execution in under 50ms with 99.9% uptime"
                },
                {
                  icon: "",
                  title: "Secure & Regulated",
                  description: "Your funds are protected with top-tier security measures"
                },
                {
                  icon: "",
                  title: "Advanced Analytics",
                  description: "Real-time market data and advanced charting tools"
                },
                {
                  icon: "",
                  title: "Global Access",
                  description: "Trade 24/5 across global markets from one platform"
                },
                {
                  icon: "",
                  title: "Low Spreads",
                  description: "Competitive spreads starting from 0.0 pips"
                },
                {
                  icon: "",
                  title: "Multi-Device",
                  description: "Seamless trading across desktop, web, and mobile"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:bg-gray-800/80 transition-all duration-300 group hover:shadow-md"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Trading Now
              </Button>
              <Button variant="outline" className="border-2 border-gray-600 text-white hover:bg-gray-800 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                Demo Account
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-4">Trusted by 500,000+ traders worldwide</p>
              <div className="flex items-center gap-6 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>FCA Regulated</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>SSL Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500K+", label: "Active Traders" },
            { value: "$2.1T", label: "Monthly Volume" },
            { value: "0.0", label: "Starting Spreads" },
            { value: "99.9%", label: "Platform Uptime" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:bg-gray-800/80 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingPlatform;