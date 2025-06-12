import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import WhyChooseUs from '../components/WhyChooseUs';
import PaymentMethods from '../components/PaymentMethods';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import styles from './Index.module.scss';
import MetaTrader from '../components/MetaTrader';
import Markets from '../components/Markets';

const Index = () => {
  const faqs = [
    {
      question: 'What asset classes can I trade with Data FX?',
      answer:
        'Data FX offers a wide range of asset classes including Forex, indices, commodities, energies, stocks, and cryptocurrencies. This allows you to diversify your trading portfolio and take advantage of global market opportunities.',
    },
    {
      question: 'What trading platforms does Data FX support?',
      answer:
        'Data FX uses the MetaTrader 5 (MT5) platform, which is widely regarded as one of the most advanced trading platforms. MT5 provides advanced charting tools, technical analysis features, and automated trading options.',
    },
    {
      question: 'What are the spreads and commissions on Data FX?',
      answer:
        'Data FX offers competitive spreads starting from 0.0 pips, with commission rates varying by account type. This ensures traders can choose an account that suits their trading style and budget, whether they prefer fixed or variable costs.',
    },
    {
      question: 'How do I fund my Data FX account?',
      answer:
        'Data FX offers multiple secure and efficient payment methods for funding your account. These include bank transfers, credit and debit cards, and cryptocurrency options like USDT. The availability of payment methods varies based on your country of residence, so make sure to check the specific options available in your account dashboard.',
    },
    {
      question: 'Does Data FX provide educational resources for traders?',
      answer:
        'Yes, Data FX offers a comprehensive range of educational resources, including webinars, market analysis, and trading tips via social media platforms. Additionally, the MetaTrader 5 platform features tools to help traders make informed decisions.',
    },
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Banner />
        <WhyChooseUs />
        <MetaTrader />
        <PaymentMethods />
        <Markets />
        <FAQ faqs={faqs} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
