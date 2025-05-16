
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import WhyChooseUs from '../components/WhyChooseUs';
import PaymentMethods from '../components/PaymentMethods';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
        <WhyChooseUs />
        <PaymentMethods />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
