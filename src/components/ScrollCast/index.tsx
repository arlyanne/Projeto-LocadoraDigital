import { Link } from 'react-router-dom';
import { VITE_IMG } from '../../global/api_const';
import style from './ScrollCasst.module.scss';

interface Props {
 data: any []

}

export default function ScrollCast(props: Props) {
  return (
    <>
      <div className={`${style.container} ${style.stylecrollerWrap} ${style.scroller}`}>
        {props.data.map((e: any) => (
          <div key={e.id}>
            <img className={style.imagem}
              src={VITE_IMG + e.profile_path}
              alt={e.name}
            />
            <strong>{e.name}</strong>
          </div>
        ))}
      </div>
    </>
  );
}
