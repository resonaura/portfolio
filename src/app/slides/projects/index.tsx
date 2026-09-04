import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { Slide } from '../../components/slide';
import { GlassStack } from './components/stack';
import { Tag } from './components/tag';
import { tapScale } from '../../lib/motion';

import './index.scss';

const MotionButton = motion.create(Button);

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
              <Tag
                icon={{ icon: 'bezier2' }}
                title={'Canvas API'}
                light='rgb(41 247 186)'
              />
            </div>
          </section>

          <section>
            <GlassStack
              images={[
                '/projects/kidcanvas/1.png',
                '/projects/kidcanvas/2.png',
                '/projects/kidcanvas/3.png'
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
              <Tag
                icon={{ icon: 'code-slash' }}
                title={'Frontend development'}
              />
              <Tag icon={{ icon: 'hdd-rack' }} title={'Backend development'} />
              <Tag
                icon={{ icon: 'phone' }}
                title={'React Native'}
                light='#4a45f5'
              />
              <Tag
                icon={{ icon: 'braces' }}
                title={'TypeScript'}
                light='#4a45f5'
              />
              <Tag icon={{ icon: 'apple' }} title={'iOS'} />
              <Tag icon={{ icon: 'android2' }} title={'Android'} light='green' />
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

          <section style={{ marginTop: '40px' }}>
            <MotionButton
              variant='primary'
              whileHover={{ y: -3 }}
              whileTap={tapScale}
              onPress={() => window.location.href = 'mailto:andrii.vynohradov@gmail.com'}
            >
              Contact me <Mail size={16} />
            </MotionButton>
          </section>
        </div>
      </Slide>
    </>
  );
}
