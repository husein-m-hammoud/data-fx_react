import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../contexts/TranslationContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMarketsDropdownOpen, setIsMarketsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMarketsDropdown = (e) => {
    e.preventDefault();
    setIsMarketsDropdownOpen(!isMarketsDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Link to='/' className={styles.logo}>
              <img src='/img/data-fx-logo.png' alt='Data FX Logo' />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuButton}>
            <button onClick={toggleMenu} className={styles.menuButton}>
              <svg
                className={styles.menuIcon}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link to='/trade' className={styles.navLink}>
              {t('header.startTrading')}
            </Link>

            <div className={styles.dropdown}>
              <button className={styles.dropdownTrigger}>
                {t('header.markets')}
              </button>
              <div className={styles.dropdownContent}>
                <Link to='/markets/forex' className={styles.dropdownItem}>
                  {t('header.markets.forex')}
                </Link>
                <Link to='/markets/indices' className={styles.dropdownItem}>
                  {t('header.markets.indices')}
                </Link>
                <Link to='/markets/commodities' className={styles.dropdownItem}>
                  {t('header.markets.commodities')}
                </Link>
                <Link to='/markets/energies' className={styles.dropdownItem}>
                  {t('header.markets.energies')}
                </Link>
                <Link to='/markets/stocks' className={styles.dropdownItem}>
                  {t('header.markets.stocks')}
                </Link>
                <Link to='/markets/crypto' className={styles.dropdownItem}>
                  {t('header.markets.crypto')}
                </Link>
              </div>
            </div>

            <Link to='/company' className={styles.navLink}>
              {t('header.company')}
            </Link>
            <Link to='/platform' className={styles.navLink}>
              {t('header.platform')}
            </Link>
            <Link to='/partners' className={styles.navLink}>
              {t('header.partners')}
            </Link>
            <LanguageSelector />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileNav} ${
            isMenuOpen ? styles.mobileNavOpen : ''
          }`}
        >
          <div className={styles.mobileNavLinks}>
            <Link to='/trade' className={styles.mobileNavLink}>
              {t('header.startTrading')}
            </Link>

            <div className={styles.mobileDropdown}>
              <button
                className={styles.mobileDropdownTrigger}
                onClick={toggleMarketsDropdown}
              >
                {t('header.markets')}
                <svg
                  className={`${styles.chevron} ${
                    isMarketsDropdownOpen ? styles.rotate : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    stroke-width='2'
                    d='M19 9l-7 7-7-7'
                  ></path>
                </svg>
              </button>
              <div
                className={`${styles.mobileDropdownContent} ${
                  isMarketsDropdownOpen ? styles.show : ''
                }`}
              >
                <Link to='/markets/forex' className={styles.mobileDropdownItem}>
                  {t('header.markets.forex')}
                </Link>
                <Link
                  to='/markets/indices'
                  className={styles.mobileDropdownItem}
                >
                  {t('header.markets.indices')}
                </Link>
                <Link
                  to='/markets/commodities'
                  className={styles.mobileDropdownItem}
                >
                  {t('header.markets.commodities')}
                </Link>
                <Link
                  to='/markets/energies'
                  className={styles.mobileDropdownItem}
                >
                  {t('header.markets.energies')}
                </Link>
                <Link
                  to='/markets/stocks'
                  className={styles.mobileDropdownItem}
                >
                  {t('header.markets.stocks')}
                </Link>
                <Link
                  to='/markets/crypto'
                  className={styles.mobileDropdownItem}
                >
                  {t('header.markets.crypto')}
                </Link>
              </div>
            </div>

            <Link to='/company' className={styles.mobileNavLink}>
              {t('header.company')}
            </Link>
            <Link to='/platform' className={styles.mobileNavLink}>
              {t('header.platform')}
            </Link>
            <Link to='/partners' className={styles.mobileNavLink}>
              {t('header.partners')}
            </Link>
            <div className={styles.mobileLanguageSelector}>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
