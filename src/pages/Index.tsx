import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TradingPlatform from "@/components/TradingPlatform";
import AccountTypes from "@/components/AccountTypes";
import WhyMHMarkets from "@/components/WhyMHMarkets";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import TradingTicker from "@/components/TradingTicker";
import FAQSection from "@/components/FAQSection";
import InvestmentPlans from "@/components/InvestmentPlans"; 
import PaymentSystems from "@/components/PaymentSystems";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TradingPlatform />
      <InvestmentPlans/>
      <WhyMHMarkets />
      <GetStarted />
      <PaymentSystems/>
      <FAQSection/>
      <Footer />

    </div>
  );
};

export default Index;