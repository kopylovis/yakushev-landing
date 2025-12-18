import { useEffect, useRef, useState } from 'react';
import { Clock, Award, Sparkles, Shield, Users, Target } from 'lucide-react';
import styles from './WhyUs.module.css';

const benefits = [
  {
    icon: Clock,
    text: 'Изготовление от 14 дней'
  },
  {
    icon: Award,
    text: 'Фурнитура Blum и Hettich'
  },
  {
    icon: Sparkles,
    text: 'Бесплатная 3D-визуализация'
  },
  {
    icon: Shield,
    text: 'Гарантия 3 года'
  },
  {
    icon: Users,
    text: 'Собственное производство'
  },
  {
    icon: Target,
    text: 'Профессиональный монтаж'
  }
];

const WhyUs = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.whyUs} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Почему выбирают нас</h2>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={styles.badge}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Icon className={styles.icon} size={20} strokeWidth={2} />
                <span className={styles.text}>{benefit.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
