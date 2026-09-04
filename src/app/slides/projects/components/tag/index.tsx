/* eslint-disable @typescript-eslint/no-explicit-any */
import { BootstrapIcon, IBootstrapIcon } from '../../../../components/icon';
import './index.scss';

export interface ITag {
  icon?: IBootstrapIcon;
  light?: string;
  title: string;
}
export function Tag(props: ITag) {
  return (
    <div
      className='tag'
      
      style={
        {
          '--light': props.light
        } as any
      }
    >
      {props.icon && <BootstrapIcon {...props.icon} />}
      <span className='title' aria-hidden='true'>
        {props.title}
      </span>
    </div>
  );
}
