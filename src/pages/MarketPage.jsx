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

const MarketPage = () => {
  const { marketType } = useParams();

  const formatMarketType = (type) => {
    if (!type) return '';

    switch (type.toLowerCase()) {
      case 'forex':
        return 'Forex';
      case 'indices':
        return 'Indices';
      case 'commodities':
        return 'Commodities';
      case 'energies':
        return 'Energies';
      case 'stocks':
        return 'Stocks';
      case 'crypto':
        return 'Cryptocurrencies';
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  const getMarketDescription = (type) => {
    switch (type.toLowerCase()) {
      case 'forex':
        return "Trade the world's largest financial market with competitive spreads and no commission. Access 70+ currency pairs and trade with leverage up to 1:500.";
      case 'indices':
        return 'Trade major global stock indices with tight spreads. Speculate on the performance of entire economies without buying individual stocks.';
      case 'commodities':
        return 'Trade a wide range of commodities including gold, silver, and agricultural products. Diversify your portfolio and hedge against inflation.';
      case 'energies':
        return 'Trade energy products including crude oil, natural gas, and carbon emissions. Take advantage of the volatility in global energy markets.';
      case 'stocks':
        return 'Trade thousands of global stocks with competitive pricing. Access markets from the US, UK, Europe, and Asia all from one platform.';
      case 'crypto':
        return 'Trade cryptocurrencies 24/7 with competitive spreads. Access Bitcoin, Ethereum, and other top digital currencies with the security of a regulated broker.';
      default:
        return 'Explore our range of tradable markets with competitive conditions and advanced trading tools.';
    }
  };

  const formattedMarketType = formatMarketType(marketType);
  const marketDescription = getMarketDescription(marketType);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <MarketBanner
          title={`Trade ${formattedMarketType}`}
          description={marketDescription}
        />
        <BenefitsList marketType={formattedMarketType} />
        <PriceTable marketType={marketType} />
        <EconomicCalendar />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default MarketPage;
