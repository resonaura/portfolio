import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../providers/theme/context';
import { tapScale } from '../../lib/motion';
import './index.scss';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type='button'
      className='theme-toggle'
      data-cursor='block'
      aria-label='Toggle theme'
      whileTap={tapScale}
      onClick={toggleTheme}
    >
      <Sun className='icon icon-sun' size={18} />
      <Moon className='icon icon-moon' size={18} />
      <span className='sr-only'>
        Switch to {theme === 'dark' ? 'light' : 'dark'} theme
      </span>
    </motion.button>
  );
}
