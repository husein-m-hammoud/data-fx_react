import React from "react";
import styles from "./MarketBanner.module.scss";
import { Link } from 'react-router-dom';



const MarketBanner = ({ title, description, sub, marketType }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {sub && <p className={styles.sub}>{sub}</p>}
        <div className="mt-4">
        <Link to="https://my.data-fx.net/en/register">
          <button className={styles.primaryButton}>{marketType}</button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketBanner;
