import { useEffect } from 'react';
import styles from './Lightbox.module.css';

interface LightboxProps {
  imageUrl: string | null;
  onClose: () => void;
}

const Lightbox = ({ imageUrl, onClose }: LightboxProps) => {
  useEffect(() => {
    if (imageUrl) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [imageUrl]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (imageUrl) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [imageUrl, onClose]);

  if (!imageUrl) return null;

  return (
    <div
      className={styles.lightbox}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр изображения в полном размере"
    >
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Закрыть просмотр изображения"
      >
        ✕
      </button>

      <div className={styles.imageWrapper} onClick={(e) => e.stopPropagation()}>
        <img
          src={imageUrl}
          alt="Просмотр работы в полном размере"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Lightbox;
