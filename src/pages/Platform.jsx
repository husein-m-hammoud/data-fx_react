import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { TrendingUp, Settings, Radio, Shield } from 'lucide-react';
import styles from './Platform.module.scss';

const Platform = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>
              Trade with Confidence on MetaTrader 5
            </h1>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <TrendingUp className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>
                  Advanced Charting & Analysis
                </h3>
              </div>
              <div className={styles.featureCard}>
                <Settings className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>
                  Multiple Order Types & Execution Modes
                </h3>
              </div>
              <div className={styles.featureCard}>
                <Radio className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>
                  Real-Time Market Data & News
                </h3>
              </div>
              <div className={styles.featureCard}>
                <Shield className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>
                  Secure & User-Friendly Interface
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.downloadSection}>
          <div className={styles.downloadContainer}>
            <h2 className={styles.downloadTitle}>
              Download MetaTrader 5 Today and Start Trading!
            </h2>
            <div className={styles.downloadButtons}>
              <a href='#' className={styles.downloadLink}>
                MetaTrader for Android
              </a>
              <a href='#' className={styles.downloadLink}>
                MetaTrader for iOS
              </a>
              <a href='#' className={styles.downloadLink}>
                Mac Download MetaTrader Instructions
              </a>
              <a href='#' className={styles.downloadLink}>
                Download MetaTrader for Windows
              </a>
            </div>
          </div>
        </section>
        <section className={styles.platformSection}>
          <div className={styles.platformContainer}>
            <h2 className={styles.platformTitle}>
              A POWERFUL MULTI-ASSET PLATFORM
            </h2>
            <div className={styles.platformContent}>
              <p className={styles.platformText}>
                Fundamental and technical analysis, trading signals, algorithmic
                trading – the trading platform provides an arsenal of tools that
                enhance the trading experience. The platform also has broadcasts
                of the latest financial news reports for traders to keep
                up-to-date on the markets.
              </p>
              <p className={styles.platformText}>
                With the trading signals and copy trading capability in
                MetaTrader 5, traders can follow the signals of successful
                traders and copy their trading strategies and orders, which will
                be automatically reproduced on your account.
              </p>
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;
