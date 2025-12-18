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
        <h2 className={styles.title}>Контакты</h2>

        <p className={styles.subtitle}>
          Свяжитесь с нами удобным способом
        </p>

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
              <span className={styles.socialIcon} aria-hidden="true">
                {social.icon}
              </span>
              <span className={styles.socialName}>{social.name}</span>
            </a>
          ))}
        </div>

        <footer className={styles.footer}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Якушев Мебель
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contacts;
