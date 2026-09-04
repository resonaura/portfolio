import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { Slide } from '../../components/slide';
import { tapScale } from '../../lib/motion';
import { GithubIcon, LinkedinIcon, BuyMeACoffeeIcon } from '../../components/icons';
import './index.scss';

const MotionButton = motion.create(Button);

export function AboutSlide() {
  return (
    <Slide className={'about-slide'}>
      <motion.div
        className='slide-content'
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1>About me</h1>
        <p>
          I have over <strong>8 years</strong> of commercial development
          experience, starting my journey at <strong>14</strong>. Over the
          years, I've worked on high-load projects, contributed to startups, and
          developed my own products, gaining expertise across the full stack.
        </p>

        <p>
          Throughout my career, I've built and scaled solutions, architected
          complex systems, and worked with diverse technologies, including{' '}
          <strong>React</strong>, <strong>Node.js</strong>,{' '}
          <strong>NestJS</strong>, <strong>TypeScript</strong>, and cloud
          infrastructures. I take pride in writing clean, maintainable code,
          optimizing performance, and continuously learning to deliver
          high-quality products for diverse platforms.
        </p>

        <p>
          Currently, I focus on building <strong>AI-driven solutions</strong>,
          distributed systems, real-time audio DSP, and high-performance applications.
        </p>

        <div className='actions'>
          <MotionButton
            variant='primary'
            whileHover={{ y: -3 }}
            whileTap={tapScale}
            onPress={() => window.open('https://raw.githubusercontent.com/resonaura/resonaura/main/cv.pdf', '_blank')}
          >
            My CV <ArrowRight size={16} />
          </MotionButton>
          <MotionButton
            variant='outline'
            whileHover={{ y: -3 }}
            whileTap={tapScale}
            onPress={() => window.location.href = 'mailto:andrii.vynohradov@gmail.com'}
          >
            <Mail size={16} /> Contact Me
          </MotionButton>
          <MotionButton
            isIconOnly
            variant='outline'
            aria-label='Buy Me a Coffee'
            whileHover={{ y: -3 }}
            whileTap={tapScale}
            onPress={() => window.open('https://buymeacoffee.com/resonaura', '_blank')}
          >
            <BuyMeACoffeeIcon size={16} />
          </MotionButton>
          <MotionButton
            isIconOnly
            variant='outline'
            aria-label='LinkedIn'
            whileHover={{ y: -3 }}
            whileTap={tapScale}
            onPress={() => window.open('https://linkedin.com/in/resonaura', '_blank')}
          >
            <LinkedinIcon size={16} />
          </MotionButton>
          <MotionButton
            isIconOnly
            variant='outline'
            aria-label='GitHub'
            whileHover={{ y: -3 }}
            whileTap={tapScale}
            onPress={() => window.open('https://github.com/resonaura', '_blank')}
          >
            <GithubIcon size={16} />
          </MotionButton>
        </div>
      </motion.div>
    </Slide>
  );
}
