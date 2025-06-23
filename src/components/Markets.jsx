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
import { useTranslation } from '../contexts/TranslationContext';

const Markets = () => {
  const { t } = useTranslation();

  const markets = [
    {
      title: t('forex'),
      description: t('forexDesc'),
      icon: <TrendingUpDown />,
      link: '/markets/forex',
    },
    {
      title: t('indices'),
      description: t('indicesDesc'),
      icon: <LineChart />,
      link: '/markets/indices',
    },
    {
      title: t('commodities'),
      description: t('commoditiesDesc'),
      icon: <BarChart />,
      link: '/markets/commodities',
    },
    {
      title: t('energies'),
      description: t('energiesDesc'),
      icon: <Flame />,
      link: '/markets/energies',
    },
    {
      title: t('stocks'),
      description: t('stocksDesc'),
      icon: <Building />,
      link: '/markets/stocks',
    },
    {
      title: t('cryptocurrencies'),
      description: t('cryptocurrenciesDesc'),
      icon: <Bitcoin />,
      link: '/markets/crypto',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('markets')}</h2>
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
                {t('readMore')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Markets;
