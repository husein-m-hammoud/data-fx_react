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
        return 'Forex trading involves buying and selling currencies in pairs. With Data FX, you can access the most liquid market in the world, trading with tight spreads from 0 and leveraging advanced tools to enhance your trading experience.';
      case 'indices':
        return 'Track major global indices such as the S&P 500, NASDAQ, and more. With tight spreads, advanced tools, and 24/7 support, Data FX makes trading indices simple and accessible.';
      case 'commodities':
        return 'Diversify your portfolio by trading essential commodities like gold, silver, and oil. With competitive spreads and low transaction costs, Data FX offers a seamless trading experience for all traders.';
      case 'energies':
        return 'Trade volatile energy markets, including crude oil, natural gas, and renewable energy assets. With Data FX, you’ll have access to low-cost trading, real-time data, and professional support.';
      case 'stocks':
        return 'Access stocks from top global companies with tight spreads and competitive pricing. Trade stocks in real-time with Data FX’s advanced trading platform, offering 24/7 support, low transaction costs, and state-of-the-art tools.';
      case 'crypto':
        return 'Cryptocurrency markets offer high volatility and incredible opportunities. Trade assets like Bitcoin, Ethereum, and Litecoin with tight spreads and advanced trading tools.';
      default:
        return 'Explore our range of tradable markets with competitive conditions and advanced trading tools.';
    }
  };

  const getFaqs = (type) => {
    switch (type.toLowerCase()) {
      case 'forex':
        return [
          {
            question: 'What is Forex Trading?',
            answer:
              'Forex trading involves buying and selling currency pairs. The goal is to profit from changes in the value of one currency against another. The Forex market operates 24 hours a day, five days a week, making it one of the most liquid markets in the world.',
          },
          {
            question: 'How do I make money trading Forex?',
            answer:
              'You make money by buying a currency pair at a low price and selling it at a higher price (or vice versa for short trades). Forex traders capitalize on price movements between currency pairs.',
          },
          {
            question: 'What are the most traded currency pairs?',
            answer:
              'The most traded currency pairs include: \n EUR/USD (Euro/US Dollar) \n GBP/USD (British Pound/US Dollar) \n USD/JPY (US Dollar/Japanese Yen) \n AUD/USD (Australian Dollar/US Dollar)',
          },
          {
            question: 'What factors affect Forex prices?',
            answer:
              'Forex prices are influenced by various factors, including economic indicators, geopolitical events, central bank policies, interest rates, and inflation rates. Market sentiment and speculation also play a significant role.',
          },
          {
            question: 'What is leverage in Forex trading?',
            answer:
              'Leverage allows traders to control a large position with a small deposit. For example, with a leverage of 100:1, you can control $100,000 with just $1,000 in margin. However, leverage also increases risk, and it’s important to use it cautiously.',
          },
        ];
      case 'indices':
        return [
          {
            question: 'What is an Index?',
            answer:
              'An index tracks a basket of stocks that represents a portion of the economy. Examples include the S&P 500 and the NASDAQ 100.',
          },
          {
            question:
              'Why should I trade indices instead of individual stocks?',
            answer:
              'Trading indices offers instant diversification and mitigates the risk of trading a single stock.',
          },
          {
            question: 'What factors influence index prices?',
            answer:
              'Index prices are driven by the performance of the stocks in the index, economic reports, geopolitical events, and market sentiment.',
          },
          {
            question: 'How do I trade indices?',
            answer:
              'You can trade indices using CFDs, futures contracts, or ETFs through platforms like Data FX.',
          },
          {
            question: 'Can I trade indices after hours?',
            answer:
              'Yes, you can trade indices outside of regular market hours with some brokers offering after-hours or pre-market trading.',
          },
        ];
      case 'commodities':
        return [
          {
            question: 'What are commodities?',
            answer:
              'Commodities are raw materials like metals, oil, and agricultural products that can be traded on financial markets.',
          },
          {
            question: 'How do I trade commodities?',
            answer:
              'You can trade commodities through futures contracts, CFDs, or ETFs via our platform.',
          },
          {
            question: 'What affects commodity prices?',
            answer:
              'Commodity prices are influenced by factors such as supply and demand, geopolitical events, and economic data.',
          },
          {
            question: 'What are commodity trading hours?',
            answer:
              'Commodity markets are typically open from Sunday evening to Friday evening (in U.S. Eastern Time), but trading hours can vary depending on the commodity and exchange.',
          },
          {
            question: 'Is trading commodities risky?',
            answer:
              'Yes, commodities can be volatile, so it’s important to use risk management strategies such as stop-loss orders.',
          },
        ];
      case 'energies':
        return [
          {
            question: 'What are energy markets?',
            answer:
              'Energy markets involve trading natural resources like oil, gas, and renewable energy products.',
          },
          {
            question: 'What affects energy prices?',
            answer:
              'Energy prices are influenced by factors like global supply, demand, geopolitical events, and weather.',
          },
          {
            question: 'How do I trade energy assets?',
            answer:
              'Energy assets can be traded through CFDs, futures contracts, and ETFs via our platform.',
          },
          {
            question: 'Can I trade oil during off-market hours?',
            answer:
              'Yes, oil is traded almost 24/7 globally due to its importance in the global economy.',
          },
          {
            question: 'What is the role of OPEC in energy trading?',
            answer:
              'OPEC’s decisions on oil production affect supply and price, making it an important factor in energy market movements.',
          },
        ];
      case 'stocks':
        return [
          {
            question: 'What is stock trading?',
            answer:
              'Stock trading involves buying and selling shares in companies. When you buy a stock, you own a portion of the company.',
          },
          {
            question: 'How do I start trading stocks?',
            answer:
              'Simply open an account with Data FX, deposit funds, and start trading stocks using our platform.',
          },
          {
            question: 'What factors influence stock prices?',
            answer:
              'Stock prices are affected by factors like company performance, economic indicators, news, and market sentiment.',
          },
          {
            question: 'Can I trade stocks outside of market hours?',
            answer:
              'Yes, some brokers offer after-hours trading for stocks, although liquidity may be lower.',
          },
          {
            question: 'What is a dividend?',
            answer:
              'A dividend is a payment made by a company to its shareholders, usually from profits. Not all stocks pay dividends.',
          },
        ];
      case 'crypto':
        return [
          {
            question: 'What are cryptocurrencies?',
            answer:
              'Cryptocurrencies are digital currencies that use blockchain technology for secure, decentralized transactions.',
          },
          {
            question: 'How do I start trading cryptocurrencies?',
            answer:
              'Open an account with Data FX, deposit funds, and start trading Bitcoin, Ethereum, and other cryptos.',
          },
          {
            question: 'What affects cryptocurrency prices?',
            answer:
              'Cryptocurrency prices are influenced by market demand, regulatory news, adoption, and technological developments.',
          },
          {
            question: 'Is cryptocurrency trading safe?',
            answer:
              'While cryptocurrencies are volatile, they can be traded safely by using secure platforms like Data FX.',
          },
          {
            question: 'What is blockchain technology?',
            answer:
              'Blockchain is the technology that underpins cryptocurrencies, ensuring transparency, security, and decentralization.',
          },
        ];
      default:
        return [
          {
            question: 'What is MetaTrader 5 (MT5)?',
            answer:
              'MetaTrader 5 (MT5) is an advanced trading platform that offers multi-asset trading, including Forex, stocks, commodities, and cryptocurrencies. It provides robust tools for technical analysis, charting, and automated trading through Expert Advisors (EAs).',
          },
          {
            question: 'What features does MT5 offer?',
            answer:
              'MT5 includes advanced charting tools, multiple order types, technical indicators, algorithmic trading, and a depth of market (DOM) feature. The platform also supports hedging and netting, giving traders flexibility in their trading strategies.',
          },
          {
            question: 'Can I use Expert Advisors (EAs) on MT5?',
            answer:
              'Yes, MT5 fully supports Expert Advisors (EAs), allowing traders to automate their strategies and execute trades based on preset conditions. EAs can be customized or downloaded from the MetaTrader marketplace.',
          },
          {
            question: 'How can I access MT5 on Data FX?',
            answer:
              'You can access MT5 through various devices, including desktop, web, and mobile versions. Simply download the platform from Data FX’s website, or use the web-based version for easy access from any browser.',
          },
          {
            question: 'Does MT5 offer real-time data and analysis tools?',
            answer:
              'Yes, MT5 provides real-time market data, advanced charting features, and a wide range of technical analysis tools, including more than 80 built-in indicators and graphical objects to help traders make informed decisions.',
          },
        ];
    }
  };

  const formattedMarketType = formatMarketType(marketType);
  const marketDescription = getMarketDescription(marketType);
  const faqs = getFaqs(marketType);

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
        <FAQ faqs={faqs} />
      </main>
      <Footer />
    </div>
  );
};

export default MarketPage;
