import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { TrendingUp, Settings, Radio, Shield } from 'lucide-react';
import styles from './Platform.module.scss';
import { useTranslation } from '../contexts/TranslationContext';

const Platform = () => {
  const { t } = useTranslation();
  const faqs = [
    {
      question: t('platformFaq1'),
      answer: t('platformFaq1Answer'),
    },
    {
      question: t('platformFaq2'),
      answer: t('platformFaq2Answer'),
    },
    {
      question: t('platformFaq3'),
      answer: t('platformFaq3Answer'),
    },
    {
      question: t('platformFaq4'),
      answer: t('platformFaq4Answer'),
    },
    {
      question: t('platformFaq5'),
      answer: t('platformFaq5Answer'),
    },
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>{t('tradeWithConfidence')}</h1>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <TrendingUp className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>
                  {t('advancedChartingAnalysis')}
                </h3>
              </div>
              <div className={styles.featureCard}>
                <Settings className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>{t('multipleOrder')}</h3>
              </div>
              <div className={styles.featureCard}>
                <Radio className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>{t('realTimeMarket')}</h3>
              </div>
              <div className={styles.featureCard}>
                <Shield className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>
                  {t('secureUserFriendly')}
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.downloadSection}>
          <div className={styles.downloadContainer}>
            <h2 className={styles.downloadTitle}>{t('downloadMetaTrader5')}</h2>
            <div className={styles.downloadButtons}>
              <a
                href='https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en&referrer=ref_id%3d5003013687441219172%26server%3dDataFX-Server'
                className={styles.downloadLink}
                target='_blank'
              >
                {t('metaTraderAndroid')}
              </a>
              <a
                href='https://apps.apple.com/us/app/metatrader-5/id413251709'
                className={styles.downloadLink}
                target='_blank'
              >
                {t('metaTraderIOS')}
              </a>
              <a
                href='https://www.metatrader5.com/en/terminal/help/start_advanced/install_mac'
                className={styles.downloadLink}
                target='_blank'
              >
                {t('metaTraderMac')}
              </a>
              <a
                href='https://download.mql5.com/cdn/web/data.fx.inc/mt5/datafx5setup.exe'
                className={styles.downloadLink}
              >
                {t('metaTraderWindows')}
              </a>
            </div>
          </div>
        </section>
        <section className={styles.platformSection}>
          <div className={styles.platformContainer}>
            <h2 className={styles.platformTitle}>{t('powerfulMultiAsset')}</h2>
            <div className={styles.platformContent}>
              <p className={styles.platformText}>
                {t('powerfulMultiAssetDesc1')}
              </p>
              <p className={styles.platformText}>
                {t('powerfulMultiAsserDesc2')}
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
