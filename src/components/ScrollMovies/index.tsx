import { Link } from 'react-router-dom';
import { VITE_IMG } from '../../global/api_const';
import s from './ScrollMovies.module.scss';
import style from './ScrollMovies.module.scss';
import CapaFilme from '../CapaFilme';

interface Props {
   data: any [];
   url: string; 
}


export default function ScrollMovies (props:Props) {
  return (
    <>
      <div className={`${s.container} ${s.scrollerWrap} ${s.scroller}`}>
        {props.data.map((e: any) => (
          <Link
            className={style.link}
            to={props.url.replace('id', e.id)}
            key={e.id}
          >
            <div className={style.imagem}>
              <CapaFilme
                capa={e.poster_path}
                titulo={e.title}
                popularidade={e.popularity}
                data={e.release_date}
                url={`/detalhe-filme/${e.id}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );  
}