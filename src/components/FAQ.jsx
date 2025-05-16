
import React, { useState } from 'react';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I open a trading account?",
      answer: "Opening an account is simple. Click on the 'Start Trading' button, fill out the registration form with your details, verify your identity, and make your first deposit to begin trading."
    },
    {
      question: "What markets can I trade on Data FX?",
      answer: "Data FX offers a wide range of markets including Forex, Stocks, Cryptocurrencies, Commodities, Indices, and more. You can explore all available markets in the 'Markets' section."
    },
    {
      question: "Is there a minimum deposit requirement?",
      answer: "Yes, the minimum deposit requirement is $100. This allows you to start trading with a sufficient balance to explore different markets."
    },
    {
      question: "How can I withdraw my funds?",
      answer: "You can withdraw funds through your account dashboard. Select the 'Withdraw' option, choose your preferred withdrawal method, enter the amount, and follow the instructions. Withdrawals are typically processed within 1-3 business days."
    },
    {
      question: "What trading platforms do you offer?",
      answer: "We offer a proprietary web trading platform, mobile apps for iOS and Android, and support for MetaTrader 4 and 5 platforms to suit different trading preferences."
    },
    {
      question: "Do you offer leverage trading?",
      answer: "Yes, we offer leverage trading with ratios up to 1:500 depending on your account type, jurisdiction, and the asset class you're trading. Please note that leverage trading involves significant risk."
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.description}>
            Find quick answers to common questions about trading with Data FX.
          </p>
        </div>

        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.accordionItem}>
              <button 
                className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ''}`} 
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className={styles.accordionIcon}>
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div 
                className={`${styles.accordionContent} ${activeIndex === index ? styles.show : ''}`}
              >
                <div className={styles.accordionAnswer}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
