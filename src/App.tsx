import { useState } from 'react';
import HeaderLogo from './components/HeaderLogo/HeaderLogo';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Services from './components/Services/Services';
import WorksSlider from './components/WorksSlider/WorksSlider';
import HowWeWork from './components/HowWeWork/HowWeWork';
import WhyUs from './components/WhyUs/WhyUs';
import Contacts from './components/Contacts/Contacts';
import Lightbox from './components/Lightbox/Lightbox';
import styles from './App.module.css';

function App() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setLightboxImage(imageUrl);
  };

  const handleCloseLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className={styles.app}>
      <div className={styles.backgroundEffect}></div>

      <main className={styles.main}>
        <HeaderLogo />
        <Navigation />
        <About />
        <Services />
        <WorksSlider onImageClick={handleImageClick} />
        <HowWeWork />
        <WhyUs />
        <Contacts />
      </main>

      <Lightbox imageUrl={lightboxImage} onClose={handleCloseLightbox} />
    </div>
  );
}

export default App;
