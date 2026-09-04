import { ExternalLink, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { Slide } from '../../components/slide';
import { GlassStack } from './components/stack';
import { Tag } from './components/tag';
import { BootstrapIcon } from '../../components/icon';
import { tapScale } from '../../lib/motion';

import './index.scss';

const MotionButton = motion.create(Button);

export function ProjectSlides() {
  return (
    <>
      {/* 1. ResoStage */}
      <Slide className={'project-slide first-project-slide'}>
        <div className='slide-content'>
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
              <Tag title='C++20' light='#00599c' />
              <Tag title='JUCE 9' light='#000000' />
              <Tag title='Lock-Free SPSC' light='#f59e0b' />
              <Tag title='DMX-512 / Art-Net / sACN' light='#ef4444' />
              <Tag title='Three.js WebGL' light='#049ef4' />
              <Tag title='Electron / React 19' light='#61dafb' />
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='outline'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura', '_blank')}
              >
                Private Codebase <ExternalLink size={14} />
              </MotionButton>
            </div>
          </section>

          <section>
            <GlassStack
              images={[
                '/projects/resostage/main.png',
                '/projects/resostage/timeline.png',
                '/projects/resostage/spatial.png'
              ]}
            />
          </section>
        </div>
      </Slide>

      {/* 2. Indago AI Platform */}
      <Slide className={'project-slide'}>
        <div className='slide-content'>
          <section>
            <span className='badge-category'>Distributed Platforms • AI Agent Infrastructure</span>
            <h3>Indago AI Platform</h3>
            <p className='project-tagline'>
              Distributed multi-agent orchestration infrastructure and local high-throughput LLM inference execution runtime.
            </p>
            <ul className='project-bullets'>
              <li><strong>Microservices Architecture</strong>: Decomposed legacy monolith into event-driven NestJS services, supporting 1,000+ parallel AI agents.</li>
              <li><strong>Latency Optimization</strong>: Reduced p95 gateway latency from 450ms to 315ms under high concurrent agent workloads.</li>
              <li><strong>Hybrid RAG Pipeline</strong>: Combines pgvector semantic search with structured metadata pre-filtering, cutting token overhead by ~40%.</li>
              <li><strong>Bare-Metal S3 Cluster</strong>: Distributed Linux MinIO storage cluster eliminating 70% of cloud data storage and egress expenses.</li>
            </ul>
            <div className='tags'>
              <Tag title='NestJS / Fastify' light='#e0234e' />
              <Tag title='Python (FastAPI)' light='#3776ab' />
              <Tag title='vLLM / Ollama' light='#10b981' />
              <Tag title='LangGraph' light='#6366f1' />
              <Tag title='pgvector / PostgreSQL' light='#336791' />
              <Tag title='Redis Streams' light='#dc382d' />
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='outline'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura', '_blank')}
              >
                IndagoDev System <ExternalLink size={14} />
              </MotionButton>
            </div>
          </section>

          <section>
            <GlassStack
              images={[
                '/projects/alchemy/main.png',
                '/projects/alchemy/editor.png',
                '/projects/alchemy/preview.png'
              ]}
            />
          </section>
        </div>
      </Slide>

      {/* 3. Snappie & Scrypted Tuya Bridge */}
      <Slide className={'project-slide'}>
        <div className='slide-content'>
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
              <Tag title='TypeScript' light='#3178c6' />
              <Tag title='FFmpeg / C' light='#007808' />
              <Tag title='RTSP / WebRTC' light='#4b0082' />
              <Tag title='NVENC / QSV / VAAPI' light='#10b981' />
              <Tag title='MQTT / Docker' light='#2496ed' />
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='primary'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/scrypted-tuya', '_blank')}
              >
                GitHub Repo <BootstrapIcon icon='github' />
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
            <GlassStack
              images={[
                '/projects/scrypted-tuya/dashboard.png',
                '/projects/scrypted-tuya/dashboard.png',
                '/projects/scrypted-tuya/dashboard.png'
              ]}
            />
          </section>
        </div>
      </Slide>

      {/* 4. ResoPatch */}
      <Slide className={'project-slide'}>
        <div className='slide-content'>
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
              <Tag title='libavoid-js (C++ WASM)' light='#654ff0' />
              <Tag title='React 19 / TypeScript' light='#3178c6' />
              <Tag title='@xyflow/react' light='#ff0055' />
              <Tag title='HeroUI v3' light='#000000' />
              <Tag title='NestJS / Fastify' light='#e0234e' />
              <Tag title='Puppeteer' light='#00d8a2' />
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='primary'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/resopatch', '_blank')}
              >
                GitHub Repo <BootstrapIcon icon='github' />
              </MotionButton>
            </div>
          </section>

          <section>
            <GlassStack
              images={[
                '/projects/resopatch/main.png',
                '/projects/resopatch/graph.png',
                '/projects/resopatch/main.png'
              ]}
            />
          </section>
        </div>
      </Slide>

      {/* 5. Scratcher & Flopster */}
      <Slide className={'project-slide'}>
        <div className='slide-content'>
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
              <Tag title='C++17 / C++20' light='#00599c' />
              <Tag title='JUCE 8 / 9' light='#000000' />
              <Tag title='VST3 / AU / Standalone' light='#f59e0b' />
              <Tag title='DSP Time-Stretching' light='#10b981' />
              <Tag title='Rotational Physics' light='#6366f1' />
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='primary'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/scratcher', '_blank')}
              >
                Scratcher <BootstrapIcon icon='github' />
              </MotionButton>
              <MotionButton
                variant='outline'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/flopster', '_blank')}
              >
                Flopster <BootstrapIcon icon='github' />
              </MotionButton>
            </div>
          </section>

          <section>
            <GlassStack
              images={[
                '/projects/scratcher/turntable.gif',
                '/projects/scratcher/gui.png',
                '/projects/scratcher/turntable.gif'
              ]}
            />
          </section>
        </div>
      </Slide>

      {/* 6. ResoBox */}
      <Slide className={'project-slide'}>
        <div className='slide-content'>
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
              <Tag title='Embedded C++' light='#00599c' />
              <Tag title='Fixed-Point DSP' light='#10b981' />
              <Tag title='ADC / DAC Memory Bus' light='#f59e0b' />
              <Tag title='Hardware Interrupts' light='#ef4444' />
              <Tag title='Hardware Prototyping' light='#6366f1' />
            </div>
            <div className='project-actions'>
              <MotionButton
                variant='primary'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/resobox-core', '_blank')}
              >
                resobox-core <BootstrapIcon icon='github' />
              </MotionButton>
              <MotionButton
                variant='outline'
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onPress={() => window.open('https://github.com/resonaura/resobox-ui', '_blank')}
              >
                resobox-ui <BootstrapIcon icon='github' />
              </MotionButton>
            </div>
          </section>

          <section>
            <GlassStack
              images={[
                '/projects/resobox/hardware.jpg',
                '/projects/resobox/hardware.jpg',
                '/projects/resobox/hardware.jpg'
              ]}
            />
          </section>
        </div>
      </Slide>

      {/* Contact Section */}
      <Slide className={'project-slide'}>
        <div className='slide-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span className='badge-category'>Get in Touch</span>
          <h3>Let's Build Systems Together</h3>
          <p className='project-tagline' style={{ maxWidth: '500px' }}>
            Available for Lead Backend, Systems Architecture, Low-Latency C++, and AI Platform roles in Canada & US Remote.
          </p>
          <div className='project-actions' style={{ marginTop: '20px' }}>
            <MotionButton
              variant='primary'
              whileHover={{ y: -3 }}
              whileTap={tapScale}
              onPress={() => window.location.href = 'mailto:andrii.vynohradov@gmail.com'}
            >
              Contact me <Mail size={16} />
            </MotionButton>
            <MotionButton
              variant='outline'
              whileHover={{ y: -3 }}
              whileTap={tapScale}
              onPress={() => window.open('https://cv.vynohradov.ca', '_blank')}
            >
              Download CV <ExternalLink size={16} />
            </MotionButton>
          </div>
        </div>
      </Slide>
    </>
  );
}
