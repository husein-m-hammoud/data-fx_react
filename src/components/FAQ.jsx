import React, { useState } from 'react';
import styles from './FAQ.module.scss';
import { useTranslation } from '../contexts/TranslationContext';

const FAQ = ({ faqs }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('faq')}</h2>
        </div>

        <div className={styles.accordionContainer}>
          {faqs &&
            faqs.map((faq, index) => (
              <div key={index} className={styles.accordionItem}>
                <button
                  className={`${styles.accordionButton} ${
                    activeIndex === index ? styles.active : ''
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span className={styles.accordionIcon}>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`${styles.accordionContent} ${
                    activeIndex === index ? styles.show : ''
                  }`}
                >
                  <div className={styles.accordionAnswer}>{faq.answer}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
