
import React from 'react';
import styles from './BenefitsList.module.scss';

const BenefitsList = ({ marketType }) => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.title}>Benefits of Trading {marketType} with Data FX</h2>
        
        <div className={styles.grid}>
          <div className={styles.benefitCard}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={styles.benefitTitle}>Competitive Spreads</h3>
            <p className={styles.benefitDescription}>Trade {marketType} with ultra-low spreads and zero commission fees, maximizing your profit potential.</p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className={styles.benefitTitle}>Advanced Trading Tools</h3>
            <p className={styles.benefitDescription}>Access powerful charting tools, technical indicators, and real-time market analysis to make informed trading decisions.</p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className={styles.benefitTitle}>Secure Trading</h3>
            <p className={styles.benefitDescription}>Trade with confidence using our secure platform, protected by advanced encryption and authentication measures.</p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className={styles.benefitTitle}>Expert Market Analysis</h3>
            <p className={styles.benefitDescription}>Get regular market insights and trading opportunities from our team of experienced market analysts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsList;
