import { useEffect, useState } from 'react';
import { BootstrapIcon } from '../icon';
import './index.scss';
import { Link } from './link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const checkIsScrolledEvent = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', checkIsScrolledEvent);
    return () => {
      document.removeEventListener('scroll', checkIsScrolledEvent);
    };
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : undefined}>
      <img src='/av.svg' />

      <div className='links'>
        <Link
          icon={<BootstrapIcon icon='linkedin' />}
          link='https://linkedin.com/in/resonaura'
        />
        <Link
          icon={<BootstrapIcon icon='github' />}
          link='https://github.com/resonaura'
        />
      </div>
    </header>
  );
}
