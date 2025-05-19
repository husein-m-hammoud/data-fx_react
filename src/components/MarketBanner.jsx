
import React from 'react';
import styles from './MarketBanner.module.scss';

const MarketBanner = ({ title, description }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default MarketBanner;
