
import React from 'react';
import styles from './MarketFAQ.module.scss';

const MarketFAQ = ({ marketType }) => {
  // Generate FAQs based on market type
  const getFAQs = (type) => {
    const commonQuestions = [
      {
        question: `What is ${type} trading?`,
        answer: `${type} trading involves buying and selling ${type.toLowerCase()} instruments to profit from price movements in the market. With Data FX, you can trade ${type.toLowerCase()} with competitive spreads and advanced trading tools.`
      },
      {
        question: `How do I start trading ${type}?`,
        answer: `To start trading ${type.toLowerCase()}, you need to open an account with Data FX, complete the verification process, deposit funds, and then you can begin trading ${type.toLowerCase()} on our platform.`
      },
      {
        question: `What are the trading hours for ${type}?`,
        answer: `Trading hours for ${type.toLowerCase()} vary depending on the specific instruments. Our platform displays the exact trading hours for each instrument, and you can trade during those times.`
      }
    ];
    
    // Add market-specific questions
    switch (type.toLowerCase()) {
      case 'forex':
        return [
          ...commonQuestions,
          {
            question: 'What is a pip in Forex trading?',
            answer: 'A pip (percentage in point) is the smallest price move in a currency pair. For most currency pairs, a pip is 0.0001 of the quoted price, except for pairs involving the Japanese yen, where a pip is 0.01.'
          },
          {
            question: 'What leverage is available for Forex trading?',
            answer: 'Data FX offers various leverage options for Forex trading, ranging from 1:1 to 1:500, depending on your account type and the regulatory requirements of your region.'
          }
        ];
      case 'indices':
        return [
          ...commonQuestions,
          {
            question: 'Can I trade indices outside of stock market hours?',
            answer: 'Yes, Data FX offers extended trading hours for many indices, allowing you to trade even when the underlying stock exchanges are closed.'
          },
          {
            question: 'How are index prices determined?',
            answer: 'Index prices are determined by the collective value of the constituent stocks that make up the index, with each stock typically weighted according to its market capitalization or other factors.'
          }
        ];
      case 'commodities':
        return [
          ...commonQuestions,
          {
            question: 'What types of commodities can I trade?',
            answer: 'With Data FX, you can trade a variety of commodities, including precious metals like gold and silver, agricultural commodities like wheat and coffee, and more.'
          },
          {
            question: 'What factors affect commodity prices?',
            answer: 'Commodity prices are affected by supply and demand dynamics, geopolitical events, weather conditions, inflation, currency fluctuations, and market speculation.'
          }
        ];
      case 'energies':
        return [
          ...commonQuestions,
          {
            question: 'How does oil trading work?',
            answer: 'Oil trading with Data FX involves speculating on price movements of crude oil and related products using CFDs, which allows you to profit from both rising and falling markets without taking physical delivery.'
          },
          {
            question: 'What factors impact energy prices?',
            answer: 'Energy prices are influenced by global supply and demand, OPEC decisions, geopolitical tensions, inventory reports, seasonal factors, and environmental regulations.'
          }
        ];
      case 'stocks':
        return [
          ...commonQuestions,
          {
            question: 'Can I receive dividends when trading stocks with Data FX?',
            answer: 'When trading stock CFDs with Data FX, dividend adjustments are applied to your account for positions held overnight on the ex-dividend date.'
          },
          {
            question: 'How many stocks can I trade on Data FX?',
            answer: 'Data FX offers access to thousands of stocks from major exchanges around the world, including the NYSE, NASDAQ, London Stock Exchange, and more.'
          }
        ];
      case 'crypto':
      case 'cryptocurrencies':
        return [
          ...commonQuestions,
          {
            question: 'Is cryptocurrency trading available 24/7?',
            answer: 'Yes, cryptocurrency markets operate 24/7, allowing you to trade at any time, day or night, including weekends and holidays.'
          },
          {
            question: 'How secure is cryptocurrency trading with Data FX?',
            answer: 'Data FX implements robust security measures to protect your cryptocurrency trades, including cold storage for digital assets, two-factor authentication, and encryption.'
          }
        ];
      default:
        return commonQuestions;
    }
  };

  const faqs = getFAQs(marketType);

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions about {marketType} Trading</h2>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.question}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketFAQ;
