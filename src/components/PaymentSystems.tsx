import React from 'react';
import PaymentImage from '../assets/payment.webp';

const PaymentSystems: React.FC = () => {
  return (
    <div className="w-full bg-black py-20 px-6 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="text-center lg:text-left mb-10 lg:mb-0 lg:w-1/2 lg:pl-32"> 
        {/* increased padding-left for right-shifted text */}
        <h1 className="text-white text-3xl sm:text-4xl font-light leading-snug">
          Experience seamless transactions <br /> with our payment systems.
        </h1>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center lg:justify-end lg:w-1/2 pr-12">
        <img
          src={PaymentImage}
          alt="Payment Systems"
          className="h-14 sm:h-16 md:h-20 object-contain"
        />
      </div>
    </div>
  );
};

export default PaymentSystems;
