
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
        title="About Data FX" 
        description="A leading financial technology company committed to transforming the online trading experience."
      />
      
      <div className={styles.companyContent}>
        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <div className={styles.sectionContent}>
              <div className={styles.textContent}>
                <p className={styles.paragraph}>
                  Founded in 2020, Data FX started with a simple mission: to build a more transparent and accessible trading platform for everyone, from beginners to experienced professionals.
                </p>
                <p className={styles.paragraph}>
                  What began as a small team of financial analysts and software developers has grown into a global company serving clients across 30+ countries. Our journey has been defined by continuous innovation and an unwavering commitment to our clients' success.
                </p>
              </div>
              <div className={styles.imageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623" 
                  alt="Data FX headquarters" 
                  className={styles.image}
                />
              </div>
            </div>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <div className={styles.sectionContent}>
              <div className={styles.imageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107" 
                  alt="Vision illustration" 
                  className={styles.image}
                />
              </div>
              <div className={styles.textContent}>
                <p className={styles.paragraph}>
                  We envision a financial marketplace where advanced trading tools and opportunities are not reserved for the privileged few, but are accessible to anyone with the desire to learn and participate.
                </p>
                <p className={styles.paragraph}>
                  Data FX is working toward a world where financial literacy is widespread, and where technology serves as an equalizer, giving everyone the ability to make informed investment decisions regardless of their background or starting capital.
                </p>
              </div>
            </div>
          </section>
          
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <div className={styles.valuePillars}>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                    <path d="M3 21V3H21V21H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 8L11 13L13 10L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.pillarTitle}>Innovation</h3>
                <p className={styles.pillarText}>Continuously improving our platform with cutting-edge technology and forward-thinking solutions.</p>
              </div>
              
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.pillarTitle}>Education</h3>
                <p className={styles.pillarText}>Empowering traders with knowledge through comprehensive educational resources and market insights.</p>
              </div>
              
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                    <path d="M12 14.5C15.3137 14.5 18 11.8137 18 8.5C18 5.18629 15.3137 2.5 12 2.5C8.68629 2.5 6 5.18629 6 8.5C6 11.8137 8.68629 14.5 12 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14.5V22.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 18.5H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.pillarTitle}>Transparency</h3>
                <p className={styles.pillarText}>Operating with full transparency in our pricing, practices, and performance metrics.</p>
              </div>
              
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                    <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.pillarTitle}>Security</h3>
                <p className={styles.pillarText}>Safeguarding our clients' assets and data with the highest level of security measures and protocols.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Company;
