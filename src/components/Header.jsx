
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMarketsDropdownOpen, setIsMarketsDropdownOpen] = useState(false);

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
            <Link to="/" className={styles.logo}>Data FX</Link>
          </div>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuButton}>
            <button onClick={toggleMenu} className={styles.menuButton}>
              <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link to="/trade" className={styles.navLink}>Start Trading</Link>
            
            <div className={styles.dropdown}>
              <button className={styles.dropdownTrigger}>Markets</button>
              <div className={styles.dropdownContent}>
                <Link to="/markets/forex" className={styles.dropdownItem}>Forex</Link>
                <Link to="/markets/indices" className={styles.dropdownItem}>Indices</Link>
                <Link to="/markets/commodities" className={styles.dropdownItem}>Commodities</Link>
                <Link to="/markets/energies" className={styles.dropdownItem}>Energies</Link>
                <Link to="/markets/stocks" className={styles.dropdownItem}>Stocks</Link>
                <Link to="/markets/crypto" className={styles.dropdownItem}>Cryptocurrencies</Link>
              </div>
            </div>
            
            <Link to="/company" className={styles.navLink}>Company</Link>
            <Link to="/platform" className={styles.navLink}>Platform</Link>
            <Link to="/partners" className={styles.navLink}>Partners</Link>
            <button className={styles.signInButton}>Sign In</button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          <div className={styles.mobileNavLinks}>
            <Link to="/trade" className={styles.mobileNavLink}>Start Trading</Link>
            
            <div className={styles.mobileDropdown}>
              <button 
                className={styles.mobileDropdownTrigger} 
                onClick={toggleMarketsDropdown}
              >
                Markets
                <svg className={`${styles.chevron} ${isMarketsDropdownOpen ? styles.rotate : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`${styles.mobileDropdownContent} ${isMarketsDropdownOpen ? styles.show : ''}`}>
                <Link to="/markets/forex" className={styles.mobileDropdownItem}>Forex</Link>
                <Link to="/markets/indices" className={styles.mobileDropdownItem}>Indices</Link>
                <Link to="/markets/commodities" className={styles.mobileDropdownItem}>Commodities</Link>
                <Link to="/markets/energies" className={styles.mobileDropdownItem}>Energies</Link>
                <Link to="/markets/stocks" className={styles.mobileDropdownItem}>Stocks</Link>
                <Link to="/markets/crypto" className={styles.mobileDropdownItem}>Cryptocurrencies</Link>
              </div>
            </div>
            
            <Link to="/company" className={styles.mobileNavLink}>Company</Link>
            <Link to="/platform" className={styles.mobileNavLink}>Platform</Link>
            <Link to="/partners" className={styles.mobileNavLink}>Partners</Link>
            <button className={styles.mobileSignInButton}>Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
