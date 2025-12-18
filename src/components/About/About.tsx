import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.about} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.content}>
        <p className={styles.description}>
          Создаем кухни на заказ с учетом ваших пожеланий и особенностей пространства.
          Каждая кухня — это индивидуальный проект, где функциональность встречается с эстетикой.
        </p>

        <ul className={styles.benefits}>
          <li className={styles.benefit}>
            <span className={styles.benefitIcon}>✓</span>
            <span>3D-визуализация перед началом производства</span>
          </li>
          <li className={styles.benefit}>
            <span className={styles.benefitIcon}>✓</span>
            <span>Премиальные материалы и фурнитура европейского качества</span>
          </li>
          <li className={styles.benefit}>
            <span className={styles.benefitIcon}>✓</span>
            <span>Гарантия 3 года на все изделия</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
