import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  TrendingUp,
  Zap,
  Users,
  BarChart3,
  FileText,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';
import styles from './Partners.module.scss';
import { useTranslation } from '../contexts/TranslationContext';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.bannerSection}>
          <div className={styles.bannerContainer}>
            <h1 className={styles.bannerTitle}>{t('joinDataFx')}</h1>
            <p className={styles.bannerText}>{t('joinDataFxDesc')}</p>
            <a href='/become-broker' className={styles.bannerButton}>
              {t('becomeIB')}
            </a>
          </div>
        </section>
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <h2 className={styles.benefitsTitle}>{t('whyBecomeIB')}</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <TrendingUp className={styles.benefitIcon} />
                <h3 className={styles.benefitSubtitle}>
                  {t('maximizeEarnings')}
                </h3>
                <p className={styles.benefitDescription}>
                  {t('maximizeEarningsDesc')}
                </p>
              </div>
              <div className={styles.benefitCard}>
                <Zap className={styles.benefitIcon} />
                <h3 className={styles.benefitSubtitle}>
                  {t('instantSecurePayouts')}
                </h3>
                <p className={styles.benefitDescription}>
                  {t('instantSecurePayoutsDesc')}
                </p>
              </div>
              <div className={styles.benefitCard}>
                <Users className={styles.benefitIcon} />
                <h3 className={styles.benefitSubtitle}>
                  {t('dedicatedAccountManagers')}
                </h3>
                <p className={styles.benefitDescription}>
                  {t('dedicatedAccountManagersDesc')}
                </p>
              </div>
              <div className={styles.benefitCard}>
                <BarChart3 className={styles.benefitIcon} />
                <h3 className={styles.benefitSubtitle}>
                  {t('trackPerformance')}
                </h3>
                <p className={styles.benefitDescription}>
                  {t('trackPerformanceDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.stepsSection}>
          <div className={styles.stepsContainer}>
            <h2 className={styles.stepsTitle}>{t('startEarningSteps')}</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <FileText className={styles.stepIcon} />
                <h3 className={styles.stepTitle}>{t('getStarted')}</h3>
                <p className={styles.stepDescription}>{t('getStartedDesc')}</p>
              </div>
              <div className={styles.stepCard}>
                <MessageCircle className={styles.stepIcon} />
                <h3 className={styles.stepTitle}>{t('connect')}</h3>
                <p className={styles.stepDescription}>{t('connectDesc')}</p>
              </div>
              <div className={styles.stepCard}>
                <CheckCircle className={styles.stepIcon} />
                <h3 className={styles.stepTitle}>{t('startEarning')}</h3>
                <p className={styles.stepDescription}>
                  {t('startEarningDesc')}
                </p>
              </div>
            </div>
            <a href='/become-broker' className={styles.stepsButton}>
              {t('becomeIB')}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
