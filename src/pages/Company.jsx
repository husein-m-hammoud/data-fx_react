import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MarketBanner from '../components/MarketBanner';
import styles from './Company.module.scss';

const Company = () => {
  return (
    <>
      <Header />
      <MarketBanner
        title='About Data FX'
        description='DATA FX Inc. provides institutional high net worth and retail customers with multi-asset and multi-market derivatives dealing capability through Foreign Exchange and CFDs products. The firm delivers unrivaled levels of customer support from knowledgeable staff with the utmost client confidentiality.'
        sub='Innovative products to web and telephone clients and highly competitive pricing.'
      />

      <div className={styles.companyContent}>
        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Mission</h2>
            <div className={styles.sectionContent}>
              <div className={styles.textContent}>
                <p className={styles.paragraph}>
                  We believe that providing our clients with the opportunity to
                  invest in an environment of complete knowledge, transparency,
                  integrity, and service excellence in all areas of our
                  financial services will raise their confidence and help grow
                  their wealth by partnering with a dedicated and passionate
                  team.
                </p>
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
            <h2 className={styles.sectionTitle}>Vision</h2>
            <div className={styles.sectionContent}>
              <div className={styles.imageContainer}>
                <img
                  src='https://images.unsplash.com/photo-1523961131990-5ea7c61b2107'
                  alt='Vision illustration'
                  className={styles.image}
                />
              </div>
              <div className={styles.textContent}>
                <p className={styles.paragraph}>
                  Our vision is to be a leading trusted financial firm that
                  provides investment solutions and opportunities that meet the
                  needs of all market segments.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Why Data FX</h2>
            <div className={styles.valuePillars}>
              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>Client-Centered Approach</h3>
                <p className={styles.pillarText}>
                  At Data FX, we put our clients first, striving to understand
                  their unique needs and offering tailored solutions to help
                  them achieve their financial goals. Our dedicated team works
                  tirelessly to ensure each client enjoys a seamless and
                  satisfying trading experience.
                </p>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>
                  Expert Team of Professionals
                </h3>
                <p className={styles.pillarText}>
                  Our team consists of experienced professionals who bring a
                  wealth of knowledge and expertise to the table. With a strong
                  focus on transparency, integrity, and client success, we
                  continuously work to provide our traders with valuable
                  insights, market analysis, and reliable support.
                </p>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>
                  Innovative Solutions for Your Benefit
                </h3>
                <p className={styles.pillarText}>
                  Data FX is committed to developing and offering innovative
                  trading solutions that empower our clients. We constantly
                  improve our technology and tools, including the MetaTrader 5
                  platform, to ensure that our clients have access to the best
                  trading experience possible.
                </p>
              </div>

              <div className={styles.pillar}>
                <h3 className={styles.pillarTitle}>
                  Building Long-Term Relationships
                </h3>
                <p className={styles.pillarText}>
                  We believe in building lasting partnerships with our clients.
                  By fostering trust and delivering consistent results, we aim
                  to grow together with our traders, providing continuous
                  support and working hard to help them achieve long-term
                  success.
                </p>
              </div>
            </div>
          </section>
          <div>
            <h3 className={styles.pillarTitle}>REGULATION</h3>
            <p className={styles.pillarText}>
              DATA FX Inc. is registered BC # 25250-2018 in Saint Vincent and
              the Grenadines and approved by FSA to provide Forex Trading
              Services.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Company;
