import { BootstrapIcon } from '../icon';
import './index.scss';
import { Link } from './link';

export function Header() {
  return (
    <header>
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
