import { CSSProperties, ReactNode } from 'react';

import './index.scss';

export interface ISlide {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function Slide(props: ISlide) {
  return (
    <section
      style={props.style}
      className={'slide' + (props.className ? ' ' + props.className : '')}
    >
      {props.children}
    </section>
  );
}
