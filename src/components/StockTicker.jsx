import React, { useEffect, useRef } from 'react';
import styles from './StockTicker.module.scss';

const StockTicker = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'NASDAQ:AAPL', title: 'Apple' },
        { proName: 'NASDAQ:MSFT', title: 'Microsoft' },
        { proName: 'NASDAQ:GOOGL', title: 'Alphabet' },
        { proName: 'NASDAQ:AMZN', title: 'Amazon' },
        { proName: 'NASDAQ:META', title: 'Meta' },
        { proName: 'NASDAQ:TSLA', title: 'Tesla' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
      ],
      colorTheme: 'dark',
      isTransparent: true,
      displayMode: 'adaptive',
      locale: 'en',
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className={styles.tradingViewWrapper}>
      <div ref={containerRef} />
    </div>
  );
};

export default StockTicker;
