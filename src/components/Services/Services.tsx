import { useEffect, useRef, useState } from 'react';
import { Sparkles, Palette, Minimize2, Grid3x3, Home, Box } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    icon: Sparkles,
    title: 'Современные кухни',
    description: 'Минимализм, чистые линии, встроенная техника, скрытые системы хранения'
  },
  {
    icon: Palette,
    title: 'Классические кухни',
    description: 'Элегантные фасады, фрезеровка, натуральное дерево и камень'
  },
  {
    icon: Minimize2,
    title: 'Кухни в стиле лофт',
    description: 'Индустриальные элементы, открытые полки, контрастные материалы'
  },
  {
    icon: Grid3x3,
    title: 'П-образные и угловые',
    description: 'Максимальное использование пространства и эргономика'
  },
  {
    icon: Home,
    title: 'Кухни-гостиные',
    description: 'Объединенное пространство с островом и барной стойкой'
  },
  {
    icon: Box,
    title: 'Компактные кухни',
    description: 'Продуманные решения для небольших пространств'
  }
];

const Services = () => {
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
      id="services"
      ref={sectionRef}
      className={`${styles.services} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Виды кухонь</h2>
        <p className={styles.subtitle}>
          Создаем кухни любого стиля и конфигурации по вашим индивидуальным проектам
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={styles.card}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} size={28} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
