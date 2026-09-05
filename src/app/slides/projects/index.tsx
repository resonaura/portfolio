import { ExternalLink, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, Chip } from '@heroui/react';
import { Slide } from '../../components/slide';
import { ProjectCarousel } from './components/carousel';
import { tapScale } from '../../lib/motion';
import { GithubIcon, LinkedinIcon, BuyMeACoffeeIcon } from '../../components/icons';
import { SystemsBackground } from '../../components/systemsBackground';

import './index.scss';

const MotionButton = motion.create(Button);

const contentMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

export function ProjectSlides() {
  return (
    <>
      {/* 1. ResoStage */}
      <Slide className={'project-slide first-project-slide'}>
        <motion.div className='slide-content' {...contentMotion}>
          <section>
            <span className='badge-category'>Flagship Architecture • Real-Time Systems</span>
            <h3>ResoStage</h3>
            <p className='project-tagline'>
              Deterministic live performance DAW & automated stage lighting sequencer engineered for zero-dropout multitrack playback.
            </p>
            <ul className='project-bullets'>
              <li><strong>Zero-Allocation Audio Thread</strong>: Strict zero-heap policy in callbacks with precomputed 64-point Kaiser Sinc interpolation across 32+ stems.</li>
              <li><strong>Lock-Free Concurrency</strong>: SPSC ring buffers and atomic fences eliminate priority inversions and audio dropouts during disk stalls.</li>
              <li><strong>Kaishaku Supervisor</strong>: Native daemon relaunches crashed UI in under 300ms while audio playback continues uninterrupted.</li>
              <li><strong>Lighting & 3D Spatial</strong>: 60Hz DMX-512, Art-Net, sACN packet generation + real-time 60FPS Three.js WebGL visualizer.</li>
            </ul>
            <div className='tags'>
              <Chip size='sm' variant='secondary'>C++20</Chip>
              <Chip size='sm' variant='secondary'>JUCE 9</Chip>
              <Chip size='sm' variant='secondary'>Lock-Free SPSC</Chip>
              <Chip size='sm' variant='secondary'>DMX-512 / Art-Net / sACN</Chip>
              <Chip size='sm' variant='secondary'>Three.js WebGL</Chip>
              <Chip size='sm' variant='secondary'>Electron / React 19</Chip>
            </div>
            <div className='project-actions'>
              <Chip size='md' variant='secondary' className='cursor-default opacity-85'>
                <Lock size={13} style={{ display: 'inline', marginRight: 6 }} /> Private Codebase
              </Chip>
            </div>
          </section>

          <section>
            <ProjectCarousel
              images={[
                '/projects/resostage/main.png',
                '/projects/resostage/timeline.png',
                '/projects/resostage/spatial.png'
              ]}
              title='ResoStage'
            />
          </section>
        </motion.div>
      </Slide>

      {/* 2. Alchemy & AI Agent Systems */}
      <Slide className={'project-slide is-reversed'}>
        <motion.div className='slide-content' {...contentMotion}>
          <section>
            <span className='badge-category'>Enterprise AI Systems • IndagoDev (2024–2026)</span>
            <h3>Alchemy &amp; Agent Systems</h3>
            <p className='project-tagline'>
              Multi-model LLM workbench, autonomous agent OS, and sandboxed execution infrastructure engineered at IndagoDev.
            </p>
            <ul className='project-bullets'>
              <li><strong>Alchemy (Public Workbench)</strong>: Multi-model prompt studio and browser extension streaming responses from Claude, OpenAI, and local Ollama models.</li>
              <li><strong>Autonomous Agent OS &amp; Computer Use</strong>: Multi-agent execution runtime supporting complex generation workflows, VM sandboxing, OS automation, and cross-agent social feeds.</li>
              <li><strong>High-Density Agent Hosting</strong>: Scaled cloud hosting infrastructure for autonomous Hermes / OpenClaw agents with WebSocket daemon tunnels and self-healing watchdogs.</li>
              <li><strong>Declarative Media Pipelines</strong>: AI photo/video generation studio and custom timeline video editor built with custom declarative FFmpeg rendering engine.</li>
            </ul>
            <div className='tags'>
              <Chip size='sm' variant='secondary'>NestJS / Fastify</Chip>
              <Chip size='sm' variant='secondary'>TypeScript / Python</Chip>
              <Chip size='sm' variant='secondary'>VM Sandboxing</Chip>
              <Chip size='sm' variant='secondary'>Daemon Tunnels</Chip>
              <Chip size='sm' variant='secondary'>vLLM / Ollama</Chip>
              <Chip size='sm' variant='secondary'>FFmpeg Engine</Chip>
              <Chip size='sm' variant='secondary'>WireGuard Mesh</Chip>
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='primary'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://raw.githubusercontent.com/resonaura/resonaura/main/cv.pdf', '_blank')}
              >
                Experience Details <ExternalLink size={14} />
              </MotionButton>
            </div>
          </section>

          <section>
            <ProjectCarousel
              images={[
                '/projects/alchemy/main.png',
                '/projects/alchemy/editor.png',
                '/projects/alchemy/preview.png'
              ]}
              title='Alchemy & AI Systems'
            />
          </section>
        </motion.div>
      </Slide>

      {/* 3. Snappie & Scrypted Tuya Bridge */}
      <Slide className={'project-slide'}>
        <motion.div className='slide-content' {...contentMotion}>
          <section>
            <span className='badge-category'>Edge Video Pipelines • Hardware Transcoding</span>
            <h3>Snappie & Tuya Bridge</h3>
            <p className='project-tagline'>
              Sub-second RTSP/WebRTC demuxer and frame ingestion server with hardware-accelerated transcoding pipelines.
            </p>
            <ul className='project-bullets'>
              <li><strong>Sub-Second Stream Relay</strong>: Demuxes proprietary camera WebRTC feeds into local RTSP streams with zero-copy packet relay and no cloud dependencies.</li>
              <li><strong>Hardware Acceleration</strong>: Zero-disk in-memory ring buffers supporting NVENC/CUDA, Intel VA-API/QSV, and Apple VideoToolbox.</li>
              <li><strong>Home Assistant Ecosystem</strong>: Full bidirectional MQTT talkback integration and dynamic port migration for high-density camera deployments.</li>
            </ul>
            <div className='tags'>
              <Chip size='sm' variant='secondary'>TypeScript</Chip>
              <Chip size='sm' variant='secondary'>FFmpeg / C</Chip>
              <Chip size='sm' variant='secondary'>RTSP / WebRTC</Chip>
              <Chip size='sm' variant='secondary'>NVENC / QSV / VAAPI</Chip>
              <Chip size='sm' variant='secondary'>MQTT / Docker</Chip>
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='primary'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/scrypted-tuya', '_blank')}
              >
                GitHub Repo <ExternalLink size={14} />
              </MotionButton>
              <MotionButton
                variant='outline'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/snappie', '_blank')}
              >
                Snappie <ExternalLink size={14} />
              </MotionButton>
            </div>
          </section>

          <section>
            <ProjectCarousel
              images={[
                '/projects/scrypted-tuya/dashboard.png'
              ]}
              title='Snappie & Scrypted Tuya Bridge'
            />
          </section>
        </motion.div>
      </Slide>

      {/* 4. ResoPatch */}
      <Slide className={'project-slide is-reversed'}>
        <motion.div className='slide-content' {...contentMotion}>
          <section>
            <span className='badge-category'>Computational Geometry • WebAssembly</span>
            <h3>ResoPatch</h3>
            <p className='project-tagline'>
              In-browser computational geometry engine compiling C++ libavoid to WebAssembly for dynamic hardware patchbay routing.
            </p>
            <ul className='project-bullets'>
              <li><strong>WASM in Background Worker</strong>: Ported C++ libavoid to WASM running inside Web Workers to calculate dynamic orthogonal non-overlapping cable trajectories at 60 FPS.</li>
              <li><strong>Physical Signal Validation</strong>: Enforces electrical boundary rules across balanced line level, mic signals, high-Z instruments, and DC pedalboard rails.</li>
              <li><strong>Technical Rider Compiler</strong>: Compiles stage topologies into printable A4 stage plots, channel charts, and packing checklists via headless Puppeteer.</li>
            </ul>
            <div className='tags'>
              <Chip size='sm' variant='secondary'>libavoid-js (C++ WASM)</Chip>
              <Chip size='sm' variant='secondary'>React 19 / TypeScript</Chip>
              <Chip size='sm' variant='secondary'>@xyflow/react</Chip>
              <Chip size='sm' variant='secondary'>HeroUI v3</Chip>
              <Chip size='sm' variant='secondary'>NestJS / Fastify</Chip>
              <Chip size='sm' variant='secondary'>Puppeteer</Chip>
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='primary'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/resopatch', '_blank')}
              >
                GitHub Repo <ExternalLink size={14} />
              </MotionButton>
            </div>
          </section>

          <section>
            <ProjectCarousel
              images={[
                '/projects/resopatch/main.png',
                '/projects/resopatch/graph.png'
              ]}
              title='ResoPatch'
            />
          </section>
        </motion.div>
      </Slide>

      {/* 5. Scratcher & Flopster */}
      <Slide className={'project-slide'}>
        <motion.div className='slide-content' {...contentMotion}>
          <section>
            <span className='badge-category'>Audio DSP Plugins • Physical Modeling</span>
            <h3>Scratcher & Flopster</h3>
            <p className='project-tagline'>
              Native audio plugins (VST3, AU, Standalone) delivering turntable vinyl scratch physics and acoustic floppy drive simulation.
            </p>
            <ul className='project-bullets'>
              <li><strong>Scratcher</strong>: JUCE 8 & C++17 dual-deck turntable vinyl scratch emulator featuring real-time inertia physics, fractional delay time-stretching, and MIDI control surface mapping.</li>
              <li><strong>Flopster</strong>: Software acoustic synthesizer accurately simulating mechanical stepping motor frequencies, head seek resonance, and vintage ADSR envelopes.</li>
              <li><strong>DSP Algorithms</strong>: Non-linear tape saturation, biquad filter topologies, and fractional sample interpolation.</li>
            </ul>
            <div className='tags'>
              <Chip size='sm' variant='secondary'>C++17 / C++20</Chip>
              <Chip size='sm' variant='secondary'>JUCE 8 / 9</Chip>
              <Chip size='sm' variant='secondary'>VST3 / AU / Standalone</Chip>
              <Chip size='sm' variant='secondary'>DSP Time-Stretching</Chip>
              <Chip size='sm' variant='secondary'>Rotational Physics</Chip>
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='primary'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/scratcher', '_blank')}
              >
                Scratcher <ExternalLink size={14} />
              </MotionButton>
              <MotionButton
                variant='outline'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/flopster', '_blank')}
              >
                Flopster <ExternalLink size={14} />
              </MotionButton>
            </div>
          </section>

          <section>
            <ProjectCarousel
              images={[
                '/projects/scratcher/turntable.gif',
                '/projects/scratcher/gui.png'
              ]}
              title='Scratcher & Flopster'
            />
          </section>
        </motion.div>
      </Slide>

      {/* 6. ResoBox */}
      <Slide className={'project-slide is-reversed'}>
        <motion.div className='slide-content' {...contentMotion}>
          <section>
            <span className='badge-category'>Embedded Silicon • Physical Hardware</span>
            <h3>ResoBox</h3>
            <p className='project-tagline'>
              Embedded real-time audio appliance and custom hardware guitar pedalboard powered by a dedicated low-latency DSP unit.
            </p>
            <ul className='project-bullets'>
              <li><strong>Embedded DSP Engine</strong>: Executes fixed-point digital filtering with hardware interrupts and zero-allocation processing loops.</li>
              <li><strong>Direct Memory Bus</strong>: High-speed ADC/DAC communication bus minimizing roundtrip latency from guitar input to stage output.</li>
              <li><strong>Physical Prototyping</strong>: CNC-machined aluminum enclosure, footswitch debounce logic, low-noise power regulation, and responsive UI controls.</li>
            </ul>
            <div className='tags'>
              <Chip size='sm' variant='secondary'>Embedded C++</Chip>
              <Chip size='sm' variant='secondary'>Fixed-Point DSP</Chip>
              <Chip size='sm' variant='secondary'>ADC / DAC Memory Bus</Chip>
              <Chip size='sm' variant='secondary'>Hardware Interrupts</Chip>
              <Chip size='sm' variant='secondary'>Hardware Prototyping</Chip>
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='primary'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/resobox-core', '_blank')}
              >
                resobox-core <ExternalLink size={14} />
              </MotionButton>
              <MotionButton
                variant='outline'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/resobox-ui', '_blank')}
              >
                resobox-ui <ExternalLink size={14} />
              </MotionButton>
            </div>
          </section>

          <section>
            <ProjectCarousel
              images={[
                '/projects/resobox/hardware.jpg'
              ]}
              title='ResoBox'
              fit='cover'
            />
          </section>
        </motion.div>
      </Slide>

      {/* 7. rsnra.link */}
      <Slide className={'project-slide'}>
        <motion.div className='slide-content' {...contentMotion}>
          <section>
            <span className='badge-category'>Interactive Web • Audio Streaming & Identity</span>
            <h3>rsnra.link</h3>
            <p className='project-tagline'>
              Hybrid music ecosystem combining high-fidelity direct audio streaming, interactive band storytelling, and unified identity.
            </p>
            <ul className='project-bullets'>
              <li><strong>High-Fidelity Audio Engine</strong>: Direct in-browser losslessly streamed audio player with dynamic queue management, waveform telemetry, and seamless track transitions.</li>
              <li><strong>Interactive Visual Storytelling</strong>: Atmospheric canvas aesthetics, retro Win95 digital desktop counterpart (rsnra.art), and unified smart release links.</li>
              <li><strong>Microservice Architecture</strong>: Engineered with NestJS, Fastify, Docker, and Redis caching for instant global delivery with high concurrent listener capacity.</li>
            </ul>
            <div className='tags'>
              <Chip size='sm' variant='secondary'>React 19 / Vite</Chip>
              <Chip size='sm' variant='secondary'>TypeScript</Chip>
              <Chip size='sm' variant='secondary'>NestJS / Fastify</Chip>
              <Chip size='sm' variant='secondary'>Audio Streaming</Chip>
              <Chip size='sm' variant='secondary'>OAuth / SSO</Chip>
              <Chip size='sm' variant='secondary'>Redis / Docker</Chip>
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='primary'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://rsnra.link', '_blank')}
              >
                rsnra.link <ExternalLink size={14} />
              </MotionButton>
              <MotionButton
                variant='outline'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://rsnra.art', '_blank')}
              >
                rsnra.art <ExternalLink size={14} />
              </MotionButton>
              <MotionButton
                variant='outline'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/rsnra-art', '_blank')}
              >
                GitHub Repo <ExternalLink size={14} />
              </MotionButton>
            </div>
          </section>

          <section>
            <ProjectCarousel
              images={[
                '/projects/rsnra/main.png',
                '/projects/rsnra/art.png'
              ]}
              title='rsnra.link'
            />
          </section>
        </motion.div>
      </Slide>

      {/* 8. More Projects / GitHub Showcase */}
      <Slide className={'project-slide more-projects-slide'}>
        <motion.div className='slide-content' {...contentMotion}>
          <Chip size='sm' variant='secondary'>More Projects & Open Source</Chip>
          <h3>30+ More Projects on GitHub</h3>
          <p className='project-tagline'>
            Explore the complete open-source archive: audio plugins, reverse-engineered IoT protocols, embedded firmware, and distributed systems.
          </p>
          <div className='project-actions'>
            <MotionButton
              variant='primary'
              whileHover={{ y: -3 }}
              whileTap={tapScale}
              onPress={() => window.open('https://github.com/resonaura', '_blank')}
            >
              View all on GitHub <ExternalLink size={16} />
            </MotionButton>
          </div>
        </motion.div>
      </Slide>

      {/* Contact Section */}
      <Slide className={'project-slide contact-slide'}>
        <SystemsBackground />
        <motion.div className='slide-content' {...contentMotion}>
          <Chip size='sm' variant='secondary' className='contact-chip'>Get in touch</Chip>
          <h3>Let's Build Systems Together</h3>
          <p className='project-tagline'>
            Available for Lead Backend, Systems Architecture, Low-Latency C++, and AI Platform roles in Canada & US Remote.
          </p>
          <div className='contact-actions-wrapper'>
            <div className='project-actions'>
              <MotionButton
                variant='primary'
                whileHover={{ y: -3 }}
                whileTap={tapScale}
                onPress={() => window.location.href = 'mailto:andrii.vynohradov@gmail.com'}
              >
                <Mail size={16} /> Contact Me
              </MotionButton>
              <MotionButton
                variant='outline'
                whileHover={{ y: -3 }}
                whileTap={tapScale}
                onPress={() => window.open('https://raw.githubusercontent.com/resonaura/resonaura/main/cv.pdf', '_blank')}
              >
                Download CV <ExternalLink size={16} />
              </MotionButton>
            </div>

            <div className='project-actions'>
              <MotionButton
                variant='outline'
                whileHover={{ y: -3 }}
                whileTap={tapScale}
                onPress={() => window.open('https://buymeacoffee.com/resonaura', '_blank')}
              >
                <BuyMeACoffeeIcon size={16} /> Buy Me a Coffee
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
          </div>
        </motion.div>
      </Slide>
    </>
  );
}
