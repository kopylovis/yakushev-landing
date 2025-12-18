import { useEffect, useRef, useState } from 'react';
import { socialLinks } from '../../config/contacts';
import styles from './Contacts.module.css';

const Contacts = () => {
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
      id="contacts"
      ref={sectionRef}
      className={`${styles.contacts} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.ctaBlock}>
          <h2 className={styles.title}>Готовы создать кухню вашей мечты?</h2>
          <p className={styles.subtitle}>
            Рассчитаем стоимость и создадим 3D-визуализацию в течение дня
          </p>
        </div>

        <div className={styles.socialLinks}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className={styles.socialLink}
              aria-label={social.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.socialName}>{social.name}</span>
            </a>
          ))}
        </div>

        <footer className={styles.footer}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ИП Якушев Василий Владиславович
          </p>
          <p className={styles.legalInfo}>
            ОГРНИП 322619600184670, ИНН 614003685754
          </p>
          <p className={styles.email}>
            Электронная почта: <a href="mailto:yakushevmebel@mail.ru" className={styles.emailLink}>yakushevmebel@mail.ru</a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contacts;
