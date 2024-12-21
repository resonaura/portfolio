import './index.scss';
import { IpadCursorConfig } from 'ipad-cursor';
import { IPadCursorProvider, useIPadCursor } from 'ipad-cursor/react';
import { Header } from './components/header';
import { IntroSlide } from './slides/intro';
import { AboutSlide } from './slides/about';
import { useEffect, useState } from 'react';
import { ProjectSlides } from './slides/projects';

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

  const config: IpadCursorConfig = {
    blockPadding: 'auto',
    blockStyle: {
      radius: 'auto'
    },
    enableAutoTextCursor: true
  };
  useIPadCursor();

  return (
    <IPadCursorProvider config={config}>
      <>
        <Header />

        <div className='slides'>
          <IntroSlide {...{ scrollPosition }} />
          <AboutSlide />
          <ProjectSlides />
        </div>
      </>
    </IPadCursorProvider>
  );
}

export default App;
