import { Languages } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';
import styles from './LanguageSelector.module.scss';

const LanguageSelector = () => {
  const { language, toggleLanguage } = useTranslation();

  return (
    <button onClick={toggleLanguage} className={styles.languageButton}>
      <Languages className={styles.icon} />
      <span className={styles.languageText}>
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
};

export default LanguageSelector;
