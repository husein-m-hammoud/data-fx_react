import React from 'react';
import styles from './BenefitsList.module.scss';

const BenefitsList = ({ benefits }) => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.title}>{benefits.title}</h2>

        <div className={styles.grid}>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>{benefits.desc1.title}</h3>
            <p className={styles.benefitDescription}>{benefits.desc1.desc}</p>
          </div>

          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>{benefits.desc2.title}</h3>
            <p className={styles.benefitDescription}>{benefits.desc2.desc}</p>
          </div>

          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>{benefits.desc3.title}</h3>
            <p className={styles.benefitDescription}>{benefits.desc3.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsList;
