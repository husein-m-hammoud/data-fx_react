import React from 'react';
import styles from './Markets.module.scss';
import {
  TrendingUpDown,
  LineChart,
  BarChart,
  Flame,
  Building,
  Bitcoin,
} from 'lucide-react';

const Markets = () => {
  const markets = [
    {
      title: 'Forex',
      description: 'Access over 100 currency pairs in the global forex market.',
      icon: <TrendingUpDown />,
      link: '/markets/forex',
    },
    {
      title: 'Indices',
      description:
        'Trade major global indices with competitive spreads and leverage.',
      icon: <LineChart />,
      link: '/markets/indices',
    },
    {
      title: 'Commodities',
      description: 'Trade precious metals, agricultural products, and more.',
      icon: <BarChart />,
      link: '/markets/commodities',
    },
    {
      title: 'Energies',
      description: 'Trade crude oil, natural gas, and other energy assets.',
      icon: <Flame />,
      link: '/markets/energies',
    },
    {
      title: 'Stocks',
      description:
        'Trade global stocks across sectors with competitive commissions.',
      icon: <Building />,
      link: '/markets/stocks',
    },
    {
      title: 'Cryptocurrencies',
      description:
        'Trade top cryptocurrencies like Bitcoin and Ethereum securely.',
      icon: <Bitcoin />,
      link: '/markets/crypto',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Markets</h2>
          <p className={styles.subtitle}>
            Explore diverse trading opportunities across multiple asset classes
          </p>
        </div>

        <div className={styles.marketsGrid}>
          {markets.map((market, index) => (
            <div key={index} className={styles.marketCard}>
              <div className={styles.iconTitle}>
                <div className={styles.icon}>{market.icon}</div>
                <h3 className={styles.marketTitle}>{market.title}</h3>
              </div>
              <p className={styles.marketDescription}>{market.description}</p>
              <a href={market.link} className={styles.readMore}>
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Markets;
