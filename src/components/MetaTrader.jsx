import React from 'react';
import { Download } from 'lucide-react';
import styles from './MetaTrader.module.scss';
import { useTranslation } from '../contexts/TranslationContext';

const MetaTrader = () => {
  const { t } = useTranslation();

  const features = [
    {
      name: t('advancedCharting'),
      description: t('advancedChartingDesc'),
    },
    {
      name: t('realTimeData'),
      description: t('realTimeDataDesc'),
    },
    {
      name: t('automatedTrading'),
      description: t('automatedTradingDesc'),
    },
    {
      name: t('crossDeviceAccess'),
      description: t('crossDeviceAccessDesc'),
    },
    {
      name: t('multipleOrderTypes'),
      description: t('multipleOrderTypesDesc'),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80'
              alt='MetaTrader 5 Trading Platform'
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{t('tradeWithBest')}</h2>
            <p className={styles.description}>{t('dataFxOffers')}</p>
            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <strong className={styles.featureName}>
                    {feature.name}:
                  </strong>{' '}
                  {feature.description}
                </div>
              ))}
            </div>
            <a
              href='https://data-fx.net/download'
              className={styles.downloadButton}
            >
              <Download className={styles.buttonIcon} />
              {t('downloadMetaTrader')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTrader;
