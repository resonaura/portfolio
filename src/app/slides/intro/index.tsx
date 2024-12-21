/* eslint-disable @typescript-eslint/no-explicit-any */
import { BootstrapIcon } from '../../components/icon';
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
            data-cursor='block'
            onClick={() => handleScrollTo('first-project-slide')}
          >
            See my projects <BootstrapIcon icon='arrow-right' />
          </button>
          <button
            data-cursor='block'
            onClick={() => handleScrollTo('about-slide')}
          >
            More about me
            <BootstrapIcon icon='arrow-right' />
          </button>
        </div>
      </div>
    </Slide>
  );
}
