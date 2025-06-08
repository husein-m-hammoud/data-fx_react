import React, { useEffect, useRef } from 'react';
import styles from './PriceTable.module.scss';

const PriceTable = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: '400',
      currencies: [
        'EUR',
        'USD',
        'JPY',
        'GBP',
        'CHF',
        'AUD',
        'CAD',
        'NZD',
        'CNY',
      ],
      isTransparent: false,
      colorTheme: 'light',
      locale: 'en',
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <section className={styles.tradingViewTableWrapper}>
      <div className={styles.tradingViewTable}>
        <div ref={containerRef} />
      </div>
    </section>
  );
};

export default PriceTable;
