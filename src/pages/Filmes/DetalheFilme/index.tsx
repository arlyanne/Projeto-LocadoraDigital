import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { http } from '../../../global/http';
import { VITE_IMG } from '../../../global/api_const';
import styles from './DetalheFilme.module.scss';
import { Box } from '@mui/material';
import moment from 'moment';
import ScrollCast from '../../../components/ScrollCast';

export default function DetalheFilmes() {
  const parametro = useParams();
  console.log(parametro);

  const [detalhe, setDetalhe] = useState<any>();
  const [imagens, setImagens] = useState<any>();
  const [elenco, setElenco] = useState<any>();

  useEffect(() => {
    http.get<any>(`movie/${parametro.id}?language=pt-BR`).then((response) => {
      setDetalhe(response.data);
      console.log(detalhe);
    });

    http.get<any>(`movie/${parametro.id}/images`).then((response) => {
      setImagens(response.data);
      console.log(imagens);
    });

    http.get<any>(`movie/${parametro.id}/credits?language=pt-BR`).then((response) => {
      setElenco(response.data.cast);
      console.log(elenco);
    });
  }, []);

  return (
    <div>
      {detalhe && (
        <>
          <Box
            sx={{
              width: '100%',
              backgroundColor: '#CFD9E8',
            }}
          >
            <div className={`${styles.container} ${styles.row} container`}>
              <div>
                <img src={VITE_IMG + detalhe.poster_path} alt={detalhe.title} />
              </div>

              <div className={styles.conteudo}>
                <h1>{detalhe.title}</h1> {/* Titulo (Ind)  */}
                <span>
                  {moment(detalhe.release_date).format('DD/MM/yyyy')} /{' '}
                </span>
                <span> {detalhe.tagline} </span>{' '}
                {/* Subtitulo(Uma lenda.....) */}
                <span>
                  {detalhe.genres.map((item: any) => (
                    <span key={item.id}> {item.name}</span>
                  ))}
                </span>
                <h1> Sinopse </h1>
                <p>{detalhe.overview}</p>
              </div>
            </div>
          </Box>
         
          <div className='container'>
            <h3>Elenco principal</h3>
            <ScrollCast data={elenco || []} />
          </div>
        </>
      )}
    </div>
  );
}
