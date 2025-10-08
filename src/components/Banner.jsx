import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StockTicker from './StockTicker';
import styles from './Banner.module.scss';
import { useTranslation } from '../contexts/TranslationContext';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>{t('startTradingBanner')}</h1>
            <p className={styles.subtitle}>{t('joinThousands')}</p>
            <div className={styles.buttons}>
              <Link to="https://my.data-fx.net/en/register" className={styles.primaryButton}>
                {t('startTradingNow')}{' '}
                <ArrowRight className={styles.buttonIcon} />
              </Link>
              <Link to="https://my.data-fx.net/en/register">
                <button className={styles.secondaryButton}>
                  {t('tryDemo')}
                </button>
              </Link>
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
