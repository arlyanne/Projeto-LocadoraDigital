import { VITE_IMG } from '../../global/api_const';
import s from './ScrollMovies.module.scss';

interface Props {
   data: any []
}

export default function ScrollMovies (props:Props) {
  return (
    <>
      <div className={`${s.container} ${s.scrollerWrap} ${s.scroller}`}>
        {props.data.map((e: any) => (
          <div className={s.imagem} key={e.id}>
            <img src={VITE_IMG + e.poster_path} alt={e.title} />
            <strong>{e.title}</strong>
          </div>
        ))}
      </div>
    </>
  );  
}