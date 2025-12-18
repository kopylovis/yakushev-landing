import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { socialLinks } from '../../config/contacts';
import styles from './CTA.module.css';

const CTA = () => {
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

  const telegram = socialLinks.find(link => link.name === 'Telegram');
  const whatsapp = socialLinks.find(link => link.name === 'WhatsApp');

  return (
    <section
      ref={sectionRef}
      className={`${styles.cta} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Готовы создать кухню вашей мечты?</h2>
          <p className={styles.subtitle}>
            Рассчитаем стоимость и создадим 3D-визуализацию в течение дня
          </p>

          <div className={styles.buttons}>
            {telegram && (
              <a
                href={telegram.url}
                className={`${styles.button} ${styles.buttonPrimary}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={telegram.ariaLabel}
              >
                <Send size={20} strokeWidth={2} />
                <span>Написать в Telegram</span>
              </a>
            )}
            {whatsapp && (
              <a
                href={whatsapp.url}
                className={`${styles.button} ${styles.buttonSecondary}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={whatsapp.ariaLabel}
              >
                <MessageCircle size={20} strokeWidth={2} />
                <span>Написать в WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
