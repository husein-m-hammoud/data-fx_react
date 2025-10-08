import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MarketBanner from '../components/MarketBanner';
import BenefitsList from '../components/BenefitsList';
import PriceTable from '../components/PriceTable';
import EconomicCalendar from '../components/EconomicCalendar';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import styles from './MarketPage.module.scss';
import { useTranslation } from '../contexts/TranslationContext';

const MarketPage = () => {
  const { marketType } = useParams();
  const { t } = useTranslation();

  const formatMarketType = (type) => {
    if (!type) return '';

    switch (type.toLowerCase()) {
      case 'forex':
        return t('forexPageTitle');
      case 'indices':
        return t('indicesPageTitle');
      case 'commodities':
        return t('commoditiesPageTitle');
      case 'energies':
        return t('energiesPageTitle');
      case 'stocks':
        return t('stocksPageTitle');
      case 'crypto':
        return t('crypocurrrenciesPageTitle');
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  const getMarketDescription = (type) => {
    switch (type.toLowerCase()) {
      case 'forex':
        return t('forexPageDesc');
      case 'indices':
        return t('indicesPageDesc');
      case 'commodities':
        return t('commoditiesPageDesc');
      case 'energies':
        return t('energiesPageDesc');
      case 'stocks':
        return t('stocksPageDesc');
      case 'crypto':
        return t('cryptocurrenciesPageDesc');
      default:
        return '';
    }
  };

  const getFaqs = (type) => {
    switch (type.toLowerCase()) {
      case 'forex':
        return [
          {
            question: t('forexFaq1'),
            answer: t('forexFaq1Answer'),
          },
          {
            question: t('forexFaq2'),
            answer: t('forexFaq2Answer'),
          },
          {
            question: t('forexFaq3'),
            answer: t('forexFaq3Answer'),
          },
          {
            question: t('forexFaq4'),
            answer: t('forexFaq4Answer'),
          },
          {
            question: t('forexFaq5'),
            answer: t('forexFaq5Answer'),
          },
        ];
      case 'indices':
        return [
          {
            question: t('indicesFaq1'),
            answer: t('indicesFaq1Answer'),
          },
          {
            question: t('indicesFaq2'),
            answer: t('indicesFaq2Answer'),
          },
          {
            question: t('indicesFaq3'),
            answer: t('indicesFaq3Answer'),
          },
          {
            question: t('indicesFaq4'),
            answer: t('indicesFaq4Answer'),
          },
          {
            question: t('indicesFaq5'),
            answer: t('indicesFaq5Answer'),
          },
        ];
      case 'commodities':
        return [
          {
            question: t('commoditiesFaq1'),
            answer: t('commoditiesFaq1Answer'),
          },
          {
            question: t('commoditiesFaq2'),
            answer: t('commoditiesFaq2Answer'),
          },
          {
            question: t('commoditiesFaq3'),
            answer: t('commoditiesFaq3Answer'),
          },
          {
            question: t('commoditiesFaq4'),
            answer: t('commoditiesFaq4Answer'),
          },
          {
            question: t('commoditiesFaq5'),
            answer: t('commoditiesFaq5Answer'),
          },
        ];
      case 'energies':
        return [
          {
            question: t('energiesFaq1'),
            answer: t('energiesFaq1Answer'),
          },
          {
            question: t('energiesFaq2'),
            answer: t('energiesFaq2Answer'),
          },
          {
            question: t('energiesFaq3'),
            answer: t('energiesFaq3Answer'),
          },
          {
            question: t('energiesFaq4'),
            answer: t('energiesFaq4Answer'),
          },
          {
            question: t('energiesFaq5'),
            answer: t('energiesFaq5Answer'),
          },
        ];
      case 'stocks':
        return [
          {
            question: t('stocksFaq1'),
            answer: t('stocksFaq1Answer'),
          },
          {
            question: t('stocksFaq2'),
            answer: t('stocksFaq2Answer'),
          },
          {
            question: t('stocksFaq3'),
            answer: t('stocksFaq3Answer'),
          },
          {
            question: t('stocksFaq4'),
            answer: t('stocksFaq4Answer'),
          },
          {
            question: t('stocksFaq5'),
            answer: t('stocksFaq5Answer'),
          },
        ];
      case 'crypto':
        return [
          {
            question: t('cryptoFaq1'),
            answer: t('cryptoFaq1Answer'),
          },
          {
            question: t('cryptoFaq2'),
            answer: t('cryptoFaq2Answer'),
          },
          {
            question: t('cryptoFaq3'),
            answer: t('cryptoFaq3Answer'),
          },
          {
            question: t('cryptoFaq4'),
            answer: t('cryptoFaq4Answer'),
          },
          {
            question: t('cryptoFaq5'),
            answer: t('cryptoFaq5Answer'),
          },
        ];
      default:
        return null;
    }
  };

  const getBenefits = (type) => {
    switch (type.toLowerCase()) {
      case 'forex':
        return {
          title: t('forexBenefitsTitle'),
          desc1: {
            title: t('forexBenefit1Title'),
            desc: t('forexBenefit1Desc'),
          },
          desc2: {
            title: t('forexBenefit2Title'),
            desc: t('forexBenefit2Desc'),
          },
          desc3: {
            title: t('forexBenefit3Title'),
            desc: t('forexBenefit3Desc'),
          },
        };
      case 'indices':
        return {
          title: t('indicesBenefitsTitle'),
          desc1: {
            title: t('indicesBenefit1Title'),
            desc: t('indicesBenefit1Desc'),
          },
          desc2: {
            title: t('indicesBenefit2Title'),
            desc: t('indicesBenefit2Desc'),
          },
          desc3: {
            title: t('indicesBenefit3Title'),
            desc: t('indicesBenefit3Desc'),
          },
        };
      case 'commodities':
        return {
          title: t('commoditiesBenefitsTitle'),
          desc1: {
            title: t('commoditiesBenefit1Title'),
            desc: t('commoditiesBenefit1Desc'),
          },
          desc2: {
            title: t('commoditiesBenefit2Title'),
            desc: t('commoditiesBenefit2Desc'),
          },
          desc3: {
            title: t('commoditiesBenefit3Title'),
            desc: t('commoditiesBenefit3Desc'),
          },
        };
      case 'energies':
        return {
          title: t('energiesBenefitsTitle'),
          desc1: {
            title: t('energiesBenefit1Title'),
            desc: t('energiesBenefit1Desc'),
          },
          desc2: {
            title: t('energiesBenefit2Title'),
            desc: t('energiesBenefit2Desc'),
          },
          desc3: {
            title: t('energiesBenefit3Title'),
            desc: t('energiesBenefit3Desc'),
          },
        };
      case 'stocks':
        return {
          title: t('stocksBenefitsTitle'),
          desc1: {
            title: t('stocksBenefit1Title'),
            desc: t('stocksBenefit1Desc'),
          },
          desc2: {
            title: t('stocksBenefit2Title'),
            desc: t('stocksBenefit2Desc'),
          },
          desc3: {
            title: t('stocksBenefit3Title'),
            desc: t('stocksBenefit3Desc'),
          },
        };
      case 'crypto':
        return {
          title: t('cryptocurrenciesBenefitsTitle'),
          desc1: {
            title: t('cryptocurrenciesBenefit1Title'),
            desc: t('cryptocurrenciesBenefit1Desc'),
          },
          desc2: {
            title: t('cryptocurrenciesBenefit2Title'),
            desc: t('cryptocurrenciesBenefit2Desc'),
          },
          desc3: {
            title: t('cryptocurrenciesBenefit3Title'),
            desc: t('cryptocurrenciesBenefit3Desc'),
          },
        };
      default:
        return null;
    }
  };
  function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


  const formattedMarketType = formatMarketType(marketType);
  const marketDescription = getMarketDescription(marketType);
  const faqs = getFaqs(marketType);
  const benefits = getBenefits(marketType);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <MarketBanner
          title={`${formattedMarketType}`}
          description={marketDescription}
          marketType={t(`Trade ${capitalize(marketType)}`)}
        />
        <BenefitsList benefits={benefits} />
        <PriceTable marketType={marketType}  />
        <EconomicCalendar />
        <FAQ faqs={faqs} />
      </main>
      <Footer />
    </div>
  );
};

export default MarketPage;
