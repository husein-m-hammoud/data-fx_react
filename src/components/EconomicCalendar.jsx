import { useEffect, useRef } from 'react';
import styles from './EconomicCalendar.module.scss';

const EconomicCalendar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: 'light',
      isTransparent: false,
      width: '100%',
      height: 600,
      locale: 'en',
      importanceFilter: '-1,0,1',
      currencyFilter: '',
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <section className={styles.calendar}>
      <div className={styles.container}>
        <h2 className={styles.title}>Economic Calendar</h2>
        <p className={styles.description}>
          Stay ahead of market-moving events with the TradingView Economic
          Calendar.
        </p>
        <div className={styles.widgetWrapper}>
          <div ref={containerRef} />
        </div>
      </div>
    </section>
  );
};

export default EconomicCalendar;
