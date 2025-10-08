import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I open a trading account?",
      answer: "Opening a trading account is simple and takes just a few minutes. Click on the 'Register' button, fill in your personal details, verify your identity, and make your first deposit to start trading."
    },
    {
      question: "What platforms do you offer for trading?",
      answer: "We offer both MetaTrader 4 and MetaTrader 5 platforms, available on desktop, web, and mobile devices. These industry-leading platforms provide advanced charting tools, technical indicators, and automated trading capabilities."
    },
    {
      question: "How fast are withdrawals processed?",
      answer: "Withdrawal requests are typically processed within 24 hours. The time it takes for funds to reach your account depends on your payment method: e-wallets (1-2 hours), bank cards (2-5 business days), and bank transfers (3-7 business days)."
    },
    {
      question: "What are the available payment methods for deposits and withdrawals?",
      answer: "We support various payment methods including bank wire transfers, credit/debit cards (Visa, MasterCard), and popular e-wallets like Skrill, Neteller, and PayPal. All payment methods are secure and encrypted."
    },
    {
      question: "What is the minimum deposit required to start trading?",
      answer: "The minimum deposit starts from just $50 for our Standard account. We offer different account types to suit various trading needs and experience levels, with higher tiers offering additional features and benefits."
    },
    {
      question: "Does MH Markets endorse any AI tool for trading?",
      answer: "While we provide advanced trading tools and platforms, we don't specifically endorse any particular AI trading tools. We recommend conducting thorough research and using demo accounts to test any automated trading systems before investing real money."
    },
    {
      question: "How secure are my funds and personal information?",
      answer: "Your security is our top priority. We use bank-level SSL encryption, segregate client funds in top-tier banks, and comply with international financial regulations. Your personal information is protected under strict data protection policies and is never shared with third parties without your consent."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Get answers to common questions about our services, trading platforms,
            and account features to assist you in getting started.
          </p>
        </div>

        <div className="border-t border-gray-800 mb-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                className="flex justify-between items-center w-full py-6 text-left hover:text-primary transition-colors duration-200 group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-white pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-primary transition-colors" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            Still have questions?{" "}
            <a 
              href="/contact" 
              className="text-primary hover:underline font-semibold transition-colors"
            >
              Contact our support team
            </a>{" "}
            for personalized assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;