import { useEffect, useRef, useState } from 'react';
import { Ruler, Palette, FileCheck, Hammer, Truck, Wrench } from 'lucide-react';
import styles from './HowWeWork.module.css';

const steps = [
  {
    icon: Ruler,
    title: 'Замер кухни',
    description: 'Выезжаем к вам, делаем точные замеры, учитываем коммуникации и особенности помещения'
  },
  {
    icon: Palette,
    title: '3D-проект',
    description: 'Создаем детальную 3D-визуализацию вашей кухни с расстановкой техники и выбором материалов'
  },
  {
    icon: FileCheck,
    title: 'Согласование',
    description: 'Утверждаем дизайн, комплектацию, фурнитуру и финальную стоимость проекта'
  },
  {
    icon: Hammer,
    title: 'Производство',
    description: 'Изготавливаем кухню на собственном производстве с контролем качества на каждом этапе'
  },
  {
    icon: Truck,
    title: 'Доставка',
    description: 'Бережно доставляем готовую кухню на объект в удобное для вас время'
  },
  {
    icon: Wrench,
    title: 'Монтаж и подключение',
    description: 'Собираем кухню, устанавливаем технику, проверяем все механизмы и фурнитуру'
  }
];

const HowWeWork = () => {
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
      className={`${styles.howWeWork} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Как мы работаем</h2>
        <p className={styles.subtitle}>
          Полный цикл — от идеи до установки
        </p>

        <div className={styles.timeline}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={styles.step}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepIcon}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
