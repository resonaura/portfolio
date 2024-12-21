import { ReactNode } from 'react';

export interface ILink {
  icon: ReactNode;
  link: string;
}
export function Link(props: ILink) {
  return (
    <a data-cursor='block' className='link' href={props.link} target='_blank'>
      {props.icon}
    </a>
  );
}
