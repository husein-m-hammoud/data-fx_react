import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StockTicker from './StockTicker';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Start Trading with Data FX – Unlock Your Financial Future Today!​
            </h1>
            <p className={styles.subtitle}>
              Join thousands of successful traders and take advantage of tight
              spreads, low commissions, and cutting-edge trading tools. Whether
              you're just starting or are a seasoned trader, Data FX provides
              everything you need to succeed in the markets.
            </p>
            <div className={styles.buttons}>
              <Link to='/trade' className={styles.primaryButton}>
                Start Trading Now <ArrowRight className={styles.buttonIcon} />
              </Link>
              <button className={styles.secondaryButton}>Try Free Demo</button>
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
