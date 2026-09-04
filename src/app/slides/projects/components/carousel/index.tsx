import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { tapScale } from '../../../../lib/motion';
import './index.scss';

export interface IProjectCarouselProps {
  images: string[];
  title?: string;
  fit?: 'contain' | 'cover';
}

export function ProjectCarousel({ images, title, fit = 'contain' }: IProjectCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.35 });
  const [isHovered, setIsHovered] = useState(false);
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  if (!images || images.length === 0) return null;

  const len = images.length;
  const currentIndex = ((page % len) + len) % len;
  const isMultiple = len > 1;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const jumpTo = (index: number) => {
    if (index === currentIndex) return;
    const dir = index > currentIndex ? 1 : -1;
    setPage([page + (index - currentIndex), dir]);
  };

  // Autoplay when in viewport, paused when hovered
  useEffect(() => {
    if (!isMultiple || !isInView || isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 4500);
    return () => clearInterval(timer);
  }, [isMultiple, isInView, isHovered, page]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 350, damping: 32 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 350, damping: 32 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className={`project-carousel ${fit === 'cover' ? 'is-cover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='carousel-viewport'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            className='carousel-slide'
            drag={isMultiple ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -100) {
                paginate(1);
              } else if (swipe > 100) {
                paginate(-1);
              }
            }}
          >
            <img
              src={images[currentIndex]}
              alt={`${title || 'Project'} preview ${currentIndex + 1}`}
              className='carousel-image'
              draggable={false}
              loading='eager'
            />
          </motion.div>
        </AnimatePresence>

        {isMultiple && (
          <>
            <motion.button
              type='button'
              className='carousel-control prev'
              aria-label='Previous slide'
              whileHover={{ scale: 1.08 }}
              whileTap={tapScale}
              onClick={() => paginate(-1)}
            >
              <ChevronLeft size={18} />
            </motion.button>

            <motion.button
              type='button'
              className='carousel-control next'
              aria-label='Next slide'
              whileHover={{ scale: 1.08 }}
              whileTap={tapScale}
              onClick={() => paginate(1)}
            >
              <ChevronRight size={18} />
            </motion.button>

            <div className='carousel-dots'>
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type='button'
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => jumpTo(idx)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
