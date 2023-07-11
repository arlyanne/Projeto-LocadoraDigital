import { Link } from 'react-router-dom';
import { VITE_IMG } from '../../global/api_const';
import s from './ScrollMovies.module.scss';
import style from './ScrollMovies.module.scss';

interface Props {
   data: any []
}

export default function ScrollMovies (props:Props) {
  return (
    <>
      <div className={`${s.container} ${s.scrollerWrap} ${s.scroller}`}>
        {props.data.map((e: any) => (
          <Link className={style.link} to={`detalhe-filme/${e.id}`}  key={e.id}>
            <img  className={s.imagem} src={VITE_IMG + e.poster_path} alt={e.title} />
            <strong>{e.title}</strong>
          </Link>
        ))}
      </div>
    </>
  );  
}