import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './WorksSlider.module.css';

interface WorksSliderProps {
  onImageClick: (imageUrl: string) => void;
}

const getImagePath = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;

const images = [
  getImagePath('IMG_5094.JPG'),
  getImagePath('IMG_5100.JPG'),
  getImagePath('IMG_5547.JPG'),
  getImagePath('IMG_5549.JPG'),
  getImagePath('IMG_6359.JPG'),
  getImagePath('IMG_6371.JPG'),
  getImagePath('IMG_6378.JPG'),
  getImagePath('IMG_6679.JPG'),
  getImagePath('IMG_6697.JPG'),
];

const WorksSlider = ({ onImageClick }: WorksSliderProps) => {
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
      id="works"
      ref={sectionRef}
      className={`${styles.works} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Примеры работ</h2>

        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className={styles.swiper}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <button
                  className={styles.imageButton}
                  onClick={() => onImageClick(image)}
                  aria-label={`Открыть изображение работы ${index + 1} в полном размере`}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={image}
                      alt={`Пример работы ${index + 1} - Якушев Мебель`}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WorksSlider;
