
import React from 'react';
import { CreditCard, PoundSterling, Bitcoin } from 'lucide-react';

const PaymentMethods = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Accepted Payment Methods</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deposit and withdraw funds using your preferred payment method. We support multiple secure options for your convenience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
          <div className="flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-full p-6 mb-4">
              <CreditCard className="h-20 w-20 text-[#1434CB]" />
            </div>
            <span className="font-medium text-lg">Visa</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-full p-6 mb-4">
              <CreditCard className="h-20 w-20 text-[#EB001B]" />
            </div>
            <span className="font-medium text-lg">Mastercard</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-full p-6 mb-4">
              <Bitcoin className="h-20 w-20 text-[#26A17B]" />
            </div>
            <span className="font-medium text-lg">Tether (USDT)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
