import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { tapScale } from '../../../../lib/motion';
import './index.scss';

export interface IProjectCarouselProps {
  images: string[];
  title?: string;
}

export function ProjectCarousel({ images, title }: IProjectCarouselProps) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  if (!images || images.length === 0) return null;

  const currentIndex = Math.abs(page % images.length);
  const isMultiple = images.length > 1;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const jumpTo = (index: number) => {
    const dir = index > currentIndex ? 1 : -1;
    setPage([page + (index - currentIndex), dir]);
  };

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
    <div className='project-carousel'>
      <div className='carousel-viewport'>
        <AnimatePresence initial={false} custom={direction} mode='wait'>
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

            <div className='carousel-counter'>
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </div>

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
