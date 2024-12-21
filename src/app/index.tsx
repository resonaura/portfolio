import './index.scss';
import { Header } from './components/header';
import { IntroSlide } from './slides/intro';
import { AboutSlide } from './slides/about';
import { useEffect, useState } from 'react';
import { ProjectSlides } from './slides/projects';
import { IpadProvider } from './components/ipadProvider';

function App() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <IpadProvider>
      <Header />
      <div className='slides'>
        <IntroSlide {...{ scrollPosition }} />
        <AboutSlide />
        <ProjectSlides />
      </div>
    </IpadProvider>
  );
}

export default App;
