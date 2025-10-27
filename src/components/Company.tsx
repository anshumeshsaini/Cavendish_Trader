import React from "react";
import { FileText, Award, Briefcase, Phone, Newspaper } from "lucide-react";
import appPreview from "../assets/app-previe.webp"; // your right-side image

const Company: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-6 flex flex-col md:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="max-w-3xl w-full space-y-10">
        <h2 className="text-lg tracking-widest text-gray-300 uppercase border-b border-gray-700 pb-2">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* About MH Markets */}
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-md bg-red-900/80">
              <FileText className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">About MH Markets</h3>
              <p className="text-gray-400">
                Globally regulated and licensed multi-asset broker.
              </p>
            </div>
          </div>

          {/* Awards */}
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-md bg-red-900/80">
              <Award className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Awards</h3>
              <p className="text-gray-400">
                Leading the industry with award-winning excellence.
              </p>
            </div>
          </div>

          {/* Careers */}
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-md bg-red-900/80">
              <Briefcase className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Careers</h3>
              <p className="text-gray-400">
                Build your career in global financial markets.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-md bg-red-900/80">
              <Phone className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Contact Us</h3>
              <p className="text-gray-400">
                We’re here to help 24/7 — contact us anytime.
              </p>
            </div>
          </div>

          {/* News */}
          <div className="flex items-start space-x-4 md:col-span-2">
            <div className="p-3 rounded-md bg-red-900/80">
              <Newspaper className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">News</h3>
              <p className="text-gray-400">
                Market insights and company news updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (App Preview) */}
      <div className="mt-16 md:mt-0 md:ml-12 flex flex-col items-center text-center bg-gradient-to-b from-red-950/70 to-black rounded-2xl p-8 shadow-lg border border-gray-800">
        <img
          src={appPreview}
          alt="App Preview"
          className="w-[320px] h-auto mb-6 rounded-xl"
        />
        <h3 className="text-2xl font-bold mb-2">
          Invest Smarter with MH Trader
        </h3>
        <p className="text-gray-400 mb-6">
          MH Trader App coming soon on the App Store & Play Store.
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-xl font-semibold text-white"
        >
          Start Trading Now!
        </a>
      </div>
    </div>
  );
};

export default Company;
