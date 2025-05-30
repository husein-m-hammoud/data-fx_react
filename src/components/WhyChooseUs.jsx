import React from 'react';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Competitive Pricing',
      description:
        'At Data FX, we offer the lowest spreads and commissions to maximize your profits.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={styles.icon}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    {
      title: 'Diverse Asset Selection',
      description:
        'Trade across 10,000+ instruments, including forex, stocks, commodities, and cryptocurrencies.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={styles.icon}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605'
          />
        </svg>
      ),
    },
    {
      title: 'Powerful Trading Tools',
      description:
        'Access MetaTrader 5 with advanced tools to execute trades efficiently and effectively.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={styles.icon}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
          />
        </svg>
      ),
    },
    {
      title: '24/7 Expert Support',
      description:
        'Our expert team provides round-the-clock assistance to ensure you never trade alone.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={styles.icon}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>Why Data FX</h2>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.iconContainer}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.educationSection}>
        <div className={styles.wrapper}>
          <div className={styles.educationContent}>
            <div className={styles.educationText}>
              <h2 className={styles.title}>Expand Your Trading Knowledge</h2>
              <p className={styles.educationParagraph}>
                At Data FX, we provide you with all the educational resources
                you need to enhance your trading skills. Whether you're a
                beginner or an experienced trader, we offer valuable insights
                and strategies through various channels. Stay updated with the
                latest market news and trading tips:
              </p>
              <p className={styles.educationParagraph}>
                Join our{' '}
                <a
                  href='https://t.me/DataFXInc'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.socialLink}
                >
                  Telegram
                </a>{' '}
                channel for Arabic market news and updates on key financial
                events.
              </p>
              <p className={styles.educationParagraph}>
                For English market news, follow us on{' '}
                <a
                  href='https://x.com/DataFXInc'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.socialLink}
                >
                  X
                </a>{' '}
                where we share daily updates, tips, and trading strategies.
              </p>
              <p className={styles.educationParagraph}>
                Our educational content, including tutorials, webinars, and
                tips, is designed to give you the knowledge and confidence you
                need to succeed in the financial markets.
              </p>
            </div>
            <div className={styles.videoContainer}>
              <video className={styles.educationVideo} controls>
                <source src='/videos/data-fx-trading.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
