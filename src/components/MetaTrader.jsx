import React from 'react';
import { Download } from 'lucide-react';
import styles from './MetaTrader.module.scss';

const MetaTrader = () => {
  const features = [
    {
      name: 'Advanced Charting',
      description:
        'Professional charting tools to help you analyze the markets with precision.',
    },
    {
      name: 'Real-Time Data',
      description:
        'Stay up-to-date with live price feeds and global market news.',
    },
    {
      name: 'Automated Trading',
      description:
        'Use Expert Advisors (EAs) for automated trading strategies and 24/7 execution.',
    },
    {
      name: 'Cross-Device Access',
      description:
        'Trade from desktop, mobile, or web with complete flexibility.',
    },
    {
      name: 'Multiple Order Types',
      description:
        'Enjoy the full range of order types including market, limit, and stop orders to suit your trading style.',
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
            <h2 className={styles.title}>
              Trade with the Best: MetaTrader 5 (MT5)
            </h2>
            <p className={styles.description}>
              Data FX offers access to the world's leading trading platform,
              MetaTrader 5 (MT5). With advanced features, powerful tools, and
              seamless integration, MT5 is designed to give you the edge in the
              markets.
            </p>
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
            <a href='#' className={styles.downloadButton}>
              <Download className={styles.buttonIcon} />
              Download MetaTrader 5 & Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTrader;
