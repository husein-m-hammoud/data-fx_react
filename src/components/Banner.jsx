
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StockTicker from './StockTicker';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white min-h-[600px] pt-24 pb-16">
      {/* Background overlay with low opacity */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Trade with Confidence on Data FX</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-lg">
              Access global markets with a reliable trading platform offering advanced tools and competitive spreads.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold">
                Start Trading Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700">
                Try Free Demo
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 bg-blue-800 bg-opacity-70 p-4 rounded-lg">
            <StockTicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
