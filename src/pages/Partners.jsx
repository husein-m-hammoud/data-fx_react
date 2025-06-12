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

const Partners = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.bannerSection}>
          <div className={styles.bannerContainer}>
            <h1 className={styles.bannerTitle}>
              Join Data FX as an Introducing Broker
            </h1>
            <p className={styles.bannerText}>
              Earn 75% of our profits with instant payouts and enjoy the
              benefits of being a Data FX Introducing Broker. As an IB, you will
              receive dedicated support and access to powerful tools to help you
              grow your business. Start earning with Data FX today!
            </p>
            <a href='/become-broker' className={styles.bannerButton}>
              Become an IB Now
            </a>
          </div>
        </section>
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <h2 className={styles.benefitsTitle}>Why Become an IB</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <TrendingUp className={styles.benefitIcon} />
                <h3 className={styles.benefitSubtitle}>
                  Maximize Your Earnings
                </h3>
                <p className={styles.benefitDescription}>
                  As an IB, you'll earn up to 75% of our profits. The more your
                  clients trade, the more you earn, with instant payouts
                  directly to your account.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <Zap className={styles.benefitIcon} />
                <h3 className={styles.benefitSubtitle}>
                  Instant and Secure Payouts
                </h3>
                <p className={styles.benefitDescription}>
                  Enjoy instant payouts for all your earnings. Data FX ensures
                  that you can access your commissions quickly, securely, and
                  without delays.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <Users className={styles.benefitIcon} />
                <h3 className={styles.benefitSubtitle}>
                  Dedicated Account Managers
                </h3>
                <p className={styles.benefitDescription}>
                  You'll have direct access to a personal account manager, who
                  will provide you with the support and tools needed to grow
                  your IB business and maximize your earnings.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <BarChart3 className={styles.benefitIcon} />
                <h3 className={styles.benefitSubtitle}>
                  Track Your Performance in Real-Time
                </h3>
                <p className={styles.benefitDescription}>
                  Your IB account will show all your earnings in real time, so
                  you can easily track your performance, understand your
                  earnings, and plan your next steps.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.stepsSection}>
          <div className={styles.stepsContainer}>
            <h2 className={styles.stepsTitle}>
              Start Earning in 3 Simple Steps
            </h2>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <FileText className={styles.stepIcon} />
                <h3 className={styles.stepTitle}>Get Started</h3>
                <p className={styles.stepDescription}>
                  Fill out the form and take the first step towards becoming a
                  Data FX Introducing Broker.
                </p>
              </div>
              <div className={styles.stepCard}>
                <MessageCircle className={styles.stepIcon} />
                <h3 className={styles.stepTitle}>Connect</h3>
                <p className={styles.stepDescription}>
                  Our team will reach out to guide you through the process and
                  provide all the information you need.
                </p>
              </div>
              <div className={styles.stepCard}>
                <CheckCircle className={styles.stepIcon} />
                <h3 className={styles.stepTitle}>Start Earning</h3>
                <p className={styles.stepDescription}>
                  Once activated, start referring clients and earn commissions
                  with instant payouts—it's that simple!
                </p>
              </div>
            </div>
            <a href='/become-broker' className={styles.stepsButton}>
              Become an IB Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
