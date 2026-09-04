import { ExternalLink, Mail } from 'lucide-react';
import { Slide } from '../../components/slide';
import './index.scss';

export function AboutSlide() {
  return (
    <Slide className={'about-slide'}>
      <div className='slide-content'>
        <h1>About me</h1>
        <h2>Andrii Vynohradov</h2>
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
          <a
            className='btn-primary'
            target='_blank'
            rel='noreferrer'
            href='https://cv.vynohradov.ca'
          >
            My CV <ExternalLink size={16} />
          </a>
          <a className='btn-outline' href='mailto:andrii.vynohradov@gmail.com'>
            Contact me <Mail size={16} />
          </a>
        </div>
      </div>
    </Slide>
  );
}
