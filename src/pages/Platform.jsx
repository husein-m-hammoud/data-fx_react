import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { TrendingUp, Settings, Radio, Shield } from 'lucide-react';
import styles from './Platform.module.scss';

const Platform = () => {
  const faqs = [
    {
      question: 'What is MetaTrader 5 (MT5)?',
      answer:
        'MetaTrader 5 (MT5) is an advanced trading platform that offers multi-asset trading, including Forex, stocks, commodities, and cryptocurrencies. It provides robust tools for technical analysis, charting, and automated trading through Expert Advisors (EAs).',
    },
    {
      question: 'What features does MT5 offer?',
      answer:
        'MT5 includes advanced charting tools, multiple order types, technical indicators, algorithmic trading, and a depth of market (DOM) feature. The platform also supports hedging and netting, giving traders flexibility in their trading strategies.',
    },
    {
      question: 'Can I use Expert Advisors (EAs) on MT5?',
      answer:
        'Yes, MT5 fully supports Expert Advisors (EAs), allowing traders to automate their strategies and execute trades based on preset conditions. EAs can be customized or downloaded from the MetaTrader marketplace.',
    },
    {
      question: 'How can I access MT5 on Data FX?',
      answer:
        'You can access MT5 through various devices, including desktop, web, and mobile versions. Simply download the platform from Data FX’s website, or use the web-based version for easy access from any browser.',
    },
    {
      question: 'Does MT5 offer real-time data and analysis tools?',
      answer:
        'Yes, MT5 provides real-time market data, advanced charting features, and a wide range of technical analysis tools, including more than 80 built-in indicators and graphical objects to help traders make informed decisions.',
    },
  ];

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
              <a
                href='https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en&referrer=ref_id%3d5003013687441219172%26server%3dDataFX-Server'
                className={styles.downloadLink}
                target='_blank'
              >
                MetaTrader for Android
              </a>
              <a
                href='https://apps.apple.com/us/app/metatrader-5/id413251709'
                className={styles.downloadLink}
                target='_blank'
              >
                MetaTrader for iOS
              </a>
              <a
                href='https://www.metatrader5.com/en/terminal/help/start_advanced/install_mac'
                className={styles.downloadLink}
                target='_blank'
              >
                Mac Download MetaTrader Instructions
              </a>
              <a
                href='https://download.mql5.com/cdn/web/data.fx.inc/mt5/datafx5setup.exe'
                className={styles.downloadLink}
              >
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
        <FAQ faqs={faqs} />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;
