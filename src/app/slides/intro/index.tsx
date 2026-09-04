/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { Slide } from '../../components/slide';
import ShaderArtComponent from '../../components/water';
import { tapScale } from '../../lib/motion';

import './index.scss';

const MotionButton = motion.create(Button);

export interface IIntroSlide {
  scrollPosition: number;
}

export function IntroSlide(props: IIntroSlide) {
  const handleScrollTo = (targetId: string) => {
    const targetElement = document.querySelector('.' + targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Slide
      className={'intro-slide'}
      style={{ '--offset': props.scrollPosition + 'px' } as any}
    >
      <ShaderArtComponent />
      <motion.div
        className='slide-content'
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <p>Hi, my name is</p>
        <h1>Andrii Vynohradov</h1>
        <h2>Systems Architect &amp; Low-Latency Engineer</h2>

        <div className='actions'>
          <MotionButton
            variant='primary'
            whileHover={{ y: -3 }}
            whileTap={tapScale}
            onPress={() => handleScrollTo('first-project-slide')}
          >
            See my projects <ArrowRight size={16} />
          </MotionButton>
          <MotionButton
            className='more-about-btn'
            variant='outline'
            whileHover={{ y: -3 }}
            whileTap={tapScale}
            onPress={() => handleScrollTo('about-slide')}
          >
            More about me <ArrowRight size={16} />
          </MotionButton>
        </div>
      </motion.div>
    </Slide>
  );
}
