
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">Data FX</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-6`}>
            <Link to="/trade" className="text-gray-700 hover:text-blue-600 font-medium">Start Trading</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:text-blue-600 font-medium">Markets</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[200px]">
                    <div className="p-4 grid gap-3">
                      <Link to="/markets/forex" className="block p-2 hover:bg-gray-100 rounded-md">Forex</Link>
                      <Link to="/markets/stocks" className="block p-2 hover:bg-gray-100 rounded-md">Stocks</Link>
                      <Link to="/markets/crypto" className="block p-2 hover:bg-gray-100 rounded-md">Cryptocurrencies</Link>
                      <Link to="/markets/commodities" className="block p-2 hover:bg-gray-100 rounded-md">Commodities</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/company" className="text-gray-700 hover:text-blue-600 font-medium">Company</Link>
            <Link to="/platform" className="text-gray-700 hover:text-blue-600 font-medium">Platform</Link>
            <Link to="/partners" className="text-gray-700 hover:text-blue-600 font-medium">Partners</Link>
            <Button className="ml-4" variant="default">Sign In</Button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-3">
            <Link to="/trade" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Start Trading</Link>
            
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium w-full py-2 text-left" onClick={(e) => {
                e.preventDefault();
                document.getElementById('mobileMarketsMenu').classList.toggle('hidden');
              }}>
                Markets <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div id="mobileMarketsMenu" className="hidden pl-4 mt-2 flex flex-col space-y-2">
                <Link to="/markets/forex" className="text-gray-600 hover:text-blue-600 py-1">Forex</Link>
                <Link to="/markets/stocks" className="text-gray-600 hover:text-blue-600 py-1">Stocks</Link>
                <Link to="/markets/crypto" className="text-gray-600 hover:text-blue-600 py-1">Cryptocurrencies</Link>
                <Link to="/markets/commodities" className="text-gray-600 hover:text-blue-600 py-1">Commodities</Link>
              </div>
            </div>
            
            <Link to="/company" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Company</Link>
            <Link to="/platform" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Platform</Link>
            <Link to="/partners" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Partners</Link>
            <Button className="mt-2" variant="default">Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
