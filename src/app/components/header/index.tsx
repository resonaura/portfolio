import { motion } from 'framer-motion';
import { buttonVariants } from '@heroui/react';
import { Mail } from 'lucide-react';
import BlurEffect from 'react-progressive-blur';
import { useHeaderContrast } from '../../hooks/useHeaderContrast';
import { useLowPerfDevice } from '../../hooks/useLowPerfDevice';
import { tapScale } from '../../lib/motion';
import { ThemeToggle } from '../themeToggle';
import { BootstrapIcon } from '../icon';
import './index.scss';

const HEADER_HEIGHT = 100;

export function Header() {
  const isLowPerfDevice = useLowPerfDevice();
  const contrast = useHeaderContrast(HEADER_HEIGHT + 4);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className={isLowPerfDevice ? 'no-blur' : undefined}
      data-bg={contrast}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {!isLowPerfDevice && (
        <>
          <BlurEffect position='top' intensity={60} className='header-blur' />
          <div className='header-tint header-tint--dark' aria-hidden='true' />
          <div className='header-tint header-tint--light' aria-hidden='true' />
        </>
      )}

      <motion.button
        type='button'
        className='logo'
        whileHover={{ y: -2 }}
        whileTap={tapScale}
        onClick={scrollToTop}
      >
        <img src='/av.svg' width={38} height={38} alt='Andrii Vynohradov' />
      </motion.button>

      <div className='actions'>
        <motion.a
          className={buttonVariants({ variant: 'ghost', isIconOnly: true })}
          href='https://linkedin.com/in/resonaura'
          target='_blank'
          rel='noreferrer'
          aria-label='LinkedIn'
          whileHover={{ y: -2 }}
          whileTap={tapScale}
        >
          <BootstrapIcon icon='linkedin' />
        </motion.a>

        <motion.a
          className={buttonVariants({ variant: 'ghost', isIconOnly: true })}
          href='https://github.com/resonaura'
          target='_blank'
          rel='noreferrer'
          aria-label='GitHub'
          whileHover={{ y: -2 }}
          whileTap={tapScale}
        >
          <BootstrapIcon icon='github' />
        </motion.a>

        <motion.a
          className={buttonVariants({ variant: 'ghost', isIconOnly: true })}
          href='mailto:andrii.vynohradov@gmail.com'
          aria-label='Email Andrii'
          whileHover={{ y: -2 }}
          whileTap={tapScale}
        >
          <Mail size={18} />
        </motion.a>

        <ThemeToggle />
      </div>
    </motion.header>
  );
}
