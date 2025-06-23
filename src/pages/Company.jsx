import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MarketBanner from '../components/MarketBanner';
import styles from './Company.module.scss';
import { useTranslation } from '../contexts/TranslationContext';

const Company = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <MarketBanner
        title={t('aboutDataFx')}
        description={t('aboutDesc')}
        sub={t('aboutDescSub')}
      />

      <div className={styles.companyContent}>
        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('mission')}</h2>
            <div className={styles.sectionContent}>
              <div className={styles.textContent}>
                <p className={styles.paragraph}>{t('missionDesc')}</p>
              </div>
              <div className={styles.imageContainer}>
                <img
                  src='https://images.unsplash.com/photo-1560179707-f14e90ef3623'
                  alt='Data FX headquarters'
                  className={styles.image}
                />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('vision')}</h2>
            <div className={styles.sectionContent}>
              <div className={styles.imageContainer}>
                <img
                  src='https://images.unsplash.com/photo-1523961131990-5ea7c61b2107'
                  alt='Vision illustration'
                  className={styles.image}
                />
              </div>
              <div className={styles.textContent}>
                <p className={styles.paragraph}>{t('visionDesc')}</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('whyDataFx')}</h2>
            <div className={styles.valuePillars}>
              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>{t('clientCentered')}</h3>
                <p className={styles.pillarText}>{t('clientCenteredDesc')}</p>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>{t('expertTeam')}</h3>
                <p className={styles.pillarText}>{t('expertTeamDesc')}</p>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>
                  {t('innovativeSolutions')}
                </h3>
                <p className={styles.pillarText}>
                  {t('innovativeSolutionsDesc')}
                </p>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>{t('buildingLongTerm')}</h3>
                <p className={styles.pillarText}>{t('buildingLongTermDesc')}</p>
              </div>
            </div>
          </section>
          <div>
            <h3 className={styles.pillarTitle}>{t('regulation')}</h3>
            <p className={styles.pillarText}>{t('regulationDesc')}</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Company;
