import { useEffect, useState } from 'react';
import styles from './HeaderLogo.module.css';

const HeaderLogo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.logoWrapper}>
        <img
          src="/assets/logo.png"
          alt="Якушев Мебель - логотип"
          className={styles.logo}
        />
      </div>
    </header>
  );
};

export default HeaderLogo;
