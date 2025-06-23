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
import { useTranslation } from '../contexts/TranslationContext';

const Index = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('homeFaq1'),
      answer: t('homeFaq1Answer'),
    },
    {
      question: t('homeFaq2'),
      answer: t('homeFaq2Answer'),
    },
    {
      question: t('homeFaq3'),
      answer: t('homeFaq3Answer'),
    },
    {
      question: t('homeFaq4'),
      answer: t('homeFaq4Answer'),
    },
    {
      question: t('homeFaq5'),
      answer: t('homeFaq5Answer'),
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
