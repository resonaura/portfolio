import './index.scss';

export interface IGlassStack {
  images: [string, string, string];
}
export function GlassStack(props: IGlassStack) {
  return (
    <div className='glass-stack'>
      {props.images.map((image, index) => {
        return (
          <div
            style={{ backgroundImage: `url('${image}')` }}
            key={index}
            className={`stack-image number-${index + 1}`}
          />
        );
      })}
    </div>
  );
}
