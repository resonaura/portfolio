import { BootstrapIcon } from '../../components/icon';
import { Slide } from '../../components/slide';
import { GlassStack } from './components/stack';
import { Tag } from './components/tag';

import './index.scss';

export function ProjectSlides() {
  return (
    <>
      <Slide className={'project-slide first-project-slide'}>
        <div className='slide-content'>
          <section>
            <h2>Some of my projects</h2>
            <h3>Alchemy</h3>
            <div className='tags'>
              <Tag icon={{ icon: 'boxes' }} title={'LLM'} />
              <Tag icon={{ icon: 'box' }} title={'OpenAI API'} />
              <Tag icon={{ icon: 'box' }} title={'Claude API'} />
              <Tag
                icon={{ icon: 'code-slash' }}
                title={'Frontend development'}
              />
              <Tag icon={{ icon: 'hdd-rack' }} title={'Backend development'} />
              <Tag icon={{ icon: 'rocket-takeoff' }} title={'React'} />
              <Tag
                icon={{ icon: 'browser-chrome' }}
                title={'CRX'}
                light='red'
              />
              <Tag
                icon={{ icon: 'braces' }}
                title={'TypeScript'}
                light='#4a45f5'
              />
              <Tag icon={{ icon: 'filetype-py' }} title={'Python'} />
            </div>
          </section>

          <section>
            <GlassStack
              images={[
                '/projects/alchemy/1.png',
                '/projects/alchemy/2.png',
                '/projects/alchemy/3.png'
              ]}
            />
          </section>
        </div>
      </Slide>
      <Slide className={'project-slide'}>
        <div className='slide-content'>
          <section>
            <h3>KidCanvas</h3>
            <div className='tags'>
              <Tag
                icon={{ icon: 'code-slash' }}
                title={'Frontend development'}
              />
              <Tag icon={{ icon: 'hdd-rack' }} title={'Backend development'} />
              <Tag icon={{ icon: 'rocket-takeoff' }} title={'React'} />
              <Tag
                icon={{ icon: 'braces' }}
                title={'TypeScript'}
                light='#4a45f5'
              />
              <Tag icon={{ icon: 'plug' }} title={'WebSockets'} light='cyan' />
              <Tag icon={{ icon: 'filetype-py' }} title={'NodeJS'} />
              <Tag icon={{ icon: 'easel' }} title={'Canvas'} />
              <Tag icon={{ icon: 'brush' }} title={'UI / UX'} />
            </div>
          </section>

          <section>
            <GlassStack
              images={[
                '/projects/kidcanvas/1.png',
                '/projects/kidcanvas/1.png',
                '/projects/kidcanvas/1.png'
              ]}
            />
          </section>
        </div>
      </Slide>
      <Slide className={'project-slide'}>
        <div className='slide-content'>
          <section>
            <h3>UniVent</h3>
            <div className='tags'>
              <Tag icon={{ icon: 'phone' }} title={'Mobile App Development'} />
              <Tag icon={{ icon: 'rocket-takeoff' }} title={'React Native'} />
              <Tag
                icon={{ icon: 'braces' }}
                title={'TypeScript'}
                light='#1B92E8'
              />
              <Tag icon={{ icon: 'cup-hot' }} title={'Java'} light='#4a45f5' />
              <Tag icon={{ icon: 'android' }} title={'Kotlin'} />
              <Tag icon={{ icon: 'apple' }} title={'Swift'} />
            </div>
          </section>

          <section>
            <GlassStack
              images={[
                '/projects/univent/1.png',
                '/projects/univent/2.png',
                '/projects/univent/2.png'
              ]}
            />
          </section>

          <section>
            <a data-cursor='block' href='mailto:andrii.vynohradov@gmail.com'>
              <BootstrapIcon icon='envelope' />
              Contact me
            </a>
          </section>
        </div>
      </Slide>
    </>
  );
}
