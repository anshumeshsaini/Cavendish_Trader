import { useState, useEffect } from "react";

interface ForexPair {
  pair: string;
  bid: string;
  ask: string;
  spread: string;
  change: number;
  flag1: string;
  flag2: string;
}

const TradingTicker = () => {
  const [forexData] = useState<ForexPair[]>([
    { pair: "EURUSD", bid: "1.07031", ask: "1.07031", spread: "0.21", change: -0.0044, flag1: "🇪🇺", flag2: "🇺🇸" },
    { pair: "GBPAUD", bid: "2.04773", ask: "2.04775", spread: "0.45", change: 0.0247, flag1: "🇬🇧", flag2: "🇦🇺" },
    { pair: "GBPCAD", bid: "1.86861", ask: "1.86867", spread: "0.57", change: -0.0186, flag1: "🇬🇧", flag2: "🇨🇦" },
    { pair: "GBPCHF", bid: "1.06946", ask: "1.06978", spread: "0.32", change: 0.0106, flag1: "🇬🇧", flag2: "🇨🇭" },
    { pair: "GBPJPY", bid: "200.388", ask: "200.454", spread: "0.66", change: -0.0338, flag1: "🇬🇧", flag2: "🇯🇵" },
    { pair: "AUDCAD", bid: "0.9123", ask: "0.91265", spread: "0.35", change: 0.0012, flag1: "🇦🇺", flag2: "🇨🇦" },
  ]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border overflow-hidden">
      <div className="flex animate-scroll">
        {[...forexData, ...forexData].map((item, index) => (
          <div
            key={`${item.pair}-${index}`}
            className="flex-shrink-0 px-6 py-3 border-r border-border last:border-r-0 min-w-[200px]"
          >
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm">{item.flag1}</span>
              <span className="text-sm">{item.flag2}</span>
              <span className="font-semibold text-foreground">{item.pair}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs">
              <div>
                <span className="text-muted-foreground">Bid </span>
                <span className={item.change >= 0 ? "text-success" : "text-danger"}>
                  {item.bid}
                </span>
              </div>
              
              <div>
                <span className="text-muted-foreground">Ask </span>
                <span className={item.change >= 0 ? "text-success" : "text-danger"}>
                  {item.ask}
                </span>
              </div>
              
              <div>
                <span className="text-muted-foreground">Spread </span>
                <span className="text-foreground">{item.spread}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingTicker;