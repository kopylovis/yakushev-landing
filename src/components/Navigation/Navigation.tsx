import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`${styles.nav} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <button
          onClick={() => scrollToSection('services')}
          className={styles.link}
          aria-label="Перейти к видам кухонь"
        >
          Кухни
        </button>
        <span className={styles.divider}>·</span>
        <button
          onClick={() => scrollToSection('works')}
          className={styles.link}
          aria-label="Перейти к примерам работ"
        >
          Работы
        </button>
        <span className={styles.divider}>·</span>
        <button
          onClick={() => scrollToSection('contacts')}
          className={styles.link}
          aria-label="Перейти к контактам"
        >
          Контакты
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
