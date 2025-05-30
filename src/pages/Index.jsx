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
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Banner />
        <WhyChooseUs />
        <MetaTrader />
        <PaymentMethods />
        <Markets />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
