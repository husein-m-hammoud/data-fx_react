
import React from 'react';
import { CreditCard, PoundSterling, Bitcoin } from 'lucide-react';
import styles from './PaymentMethods.module.scss';

const PaymentMethods = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Accepted Payment Methods</h2>
          <p className={styles.description}>
            Deposit and withdraw funds using your preferred payment method. We support multiple secure options for your convenience.
          </p>
        </div>

        <div className={styles.methodsContainer}>
          <div className={styles.method}>
            <div className={styles.iconWrapper}>
              <CreditCard className={styles.visaIcon} />
            </div>
            <span className={styles.methodName}>Visa</span>
          </div>

          <div className={styles.method}>
            <div className={styles.iconWrapper}>
              <CreditCard className={styles.mastercardIcon} />
            </div>
            <span className={styles.methodName}>Mastercard</span>
          </div>

          <div className={styles.method}>
            <div className={styles.iconWrapper}>
              <Bitcoin className={styles.tetherIcon} />
            </div>
            <span className={styles.methodName}>Tether (USDT)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
