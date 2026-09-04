/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight } from 'lucide-react';
import { Slide } from '../../components/slide';
import ShaderArtComponent from '../../components/water';

import './index.scss';

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
      <div className='slide-content'>
        <p>Hi, my name is</p>
        <h1>Andrii Vynohradov</h1>
        <h2>I'm a fullstack software developer</h2>

        <div className='actions'>
          <button
            className='btn-primary'
            onClick={() => handleScrollTo('first-project-slide')}
          >
            See my projects <ArrowRight size={16} />
          </button>
          <button
            className='btn-outline'
            onClick={() => handleScrollTo('about-slide')}
          >
            More about me <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </Slide>
  );
}
