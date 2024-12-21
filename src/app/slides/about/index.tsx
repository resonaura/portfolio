import { BootstrapIcon } from '../../components/icon';
import { Slide } from '../../components/slide';

import './index.scss';

export function AboutSlide() {
  return (
    <Slide className={'about-slide'}>
      <div className='slide-content'>
        <h2>🚀 About me</h2>
        <p>
          I am a <strong>Full Stack Web Developer</strong> with over 5 years of
          experience in creating scalable and efficient web applications. My
          journey started with hobbyist game development, evolving into a career
          focused on modern web technologies and user-centric solutions.
        </p>

        <p>
          I specialize in the <strong>MERN</strong> and <strong>.NET</strong>{' '}
          stacks, proficient in frameworks like React, Node.js, TypeScript, and
          ASP.NET Core. My expertise includes developing AI-powered
          applications, optimizing performance, and enhancing user experience
          through design and functionality.
        </p>

        <p>
          With a proven track record in mobile development using{' '}
          <strong>React Native, Swift, and Kotlin</strong>, as well as PHP-based
          solutions like Telegram bots, I have consistently delivered
          high-quality products for diverse platforms.
        </p>

        <p>
          Currently, I focus on building <strong>AI-driven solutions</strong>,
          Chrome extensions, and leveraging modern development tools like
          Webpack, Rollup, and Vite to create seamless and performant
          applications.
        </p>

        <a data-cursor='block' target='_blank' href='https://cv.vynohradov.ca'>
          <BootstrapIcon icon='box-arrow-up-right' />
          My CV
        </a>
        <a data-cursor='block' href='mailto:andrii.vynohradov@gmail.com'>
          <BootstrapIcon icon='envelope' />
          Contact me
        </a>
      </div>
    </Slide>
  );
}
