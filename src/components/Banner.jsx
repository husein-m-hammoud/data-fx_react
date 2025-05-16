
import React from 'react';
import { ArrowRight } from 'lucide-react';
import StockTicker from './StockTicker';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Trade with Confidence on Data FX</h1>
            <p className={styles.subtitle}>
              Access global markets with a reliable trading platform offering advanced tools and competitive spreads.
            </p>
            <div className={styles.buttons}>
              <button className={styles.primaryButton}>
                Start Trading Now <ArrowRight className={styles.buttonIcon} />
              </button>
              <button className={styles.secondaryButton}>
                Try Free Demo
              </button>
            </div>
          </div>
          
          <div className={styles.tickerContainer}>
            <StockTicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
