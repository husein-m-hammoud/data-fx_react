import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { useTranslation } from "../contexts/TranslationContext";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.companyInfo}>
            <h3 className={styles.footerTitle}>Data FX</h3>
            <p className={styles.companyDescription}>{t("dataFxFooterDesc")}</p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/people/Data-FX-inc/61563579251492/"
                className={styles.socialLink}
                target="_blank"
              >
                <svg
                  className={styles.socialIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/datafx.global/?hl=en"
                className={styles.socialLink}
                target="_blank"
              >
                <svg
                  className={styles.socialIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://t.me/DataFXInc"
                className={styles.socialLink}
                target="_blank"
              >
                <svg
                  className={styles.socialIcon}
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      stroke="#000000"
                      stroke-width="12"
                      d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"
                    ></path>
                  </g>
                </svg>
              </a>
              <a
                href="https://x.com/DataFXInc"
                className={styles.socialLink}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 30"
                  className={styles.socialIcon}
                  fill="currentColor"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.footerTitle}>{t("quickLinks")}</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/" className={styles.footerLink}>
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link to="/trade" className={styles.footerLink}>
                  {t("header.startTrading")}
                </Link>
              </li>
              <li>
                <Link to="/platform" className={styles.footerLink}>
                  {t("header.platform")}
                </Link>
              </li>
              <li>
                <Link to="/company" className={styles.footerLink}>
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  to="https://my.data-fx.net/en/login"
                  className={styles.footerLink}>
                 
                  {t("header.signIn")}
                </Link>
              </li>

              <li>
                <Link
                  to="https://my.data-fx.net/en/register"
                  className={styles.footerLink}>
                 
                  {t("header.signUp")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.footerTitle}>{t("header.markets")}</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/markets/forex" className={styles.footerLink}>
                  {t("forex")}
                </Link>
              </li>
              <li>
                <Link to="/markets/indices" className={styles.footerLink}>
                  {t("indices")}
                </Link>
              </li>
              <li>
                <Link to="/markets/commodities" className={styles.footerLink}>
                  {t("commodities")}
                </Link>
              </li>
              <li>
                <Link to="/markets/energies" className={styles.footerLink}>
                  {t("energies")}
                </Link>
              </li>
              <li>
                <Link to="/markets/stocks" className={styles.footerLink}>
                  {t("stocks")}
                </Link>
              </li>
              <li>
                <Link to="/markets/crypto" className={styles.footerLink}>
                  {t("cryptocurrencies")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.contactColumn}>
            <h3 className={styles.footerTitle}>{t("contactUs")}</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <svg
                  className={styles.contactIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:Info@data-fx.net"
                  className={styles.contactText}
                >
                  Info@data-fx.net
                </a>
              </li>
              <li className={styles.contactItem}>
                <svg
                  className={styles.contactIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+447537167176" className={styles.contactText}>
                  +447537167176
                </a>
              </li>
              <li className={styles.contactItem}>
                <svg
                  className={styles.contactIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className={styles.address}>
                  <p>{t("add1")}</p>
                  <p>{t("add2")}</p>
                  <p>{t("add3")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomFooter}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>{t("copyright1")}</p>
            <p className={styles.copyright}>{t("copyright2")}</p>
            <p className={styles.copyright}>{t("copyright3")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
