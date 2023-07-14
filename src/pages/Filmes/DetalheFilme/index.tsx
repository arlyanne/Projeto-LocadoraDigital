import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { http } from '../../../global/http';
import { VITE_IMG } from '../../../global/api_const';
import styles from './DetalheFilme.module.scss';
import { Box } from '@mui/material';
import moment from 'moment';
import ScrollCast from '../../../components/ScrollCast';
import Grid from '@mui/material/Grid';

export default function DetalheFilmes() {
  const parametro = useParams();
  console.log(parametro);

  const [detalhe, setDetalhe] = useState<any>();
  const [imagens, setImagens] = useState<any>();
  const [elenco, setElenco] = useState<any>();
  const [equipe, setEquipe] = useState<any>([]);

  

  useEffect(() => {
    http.get<any>(`movie/${parametro.id}?language=pt-BR`).then((response) => {
      setDetalhe(response.data);
     
    });

    http.get<any>(`movie/${parametro.id}/images`).then((response) => {
      setImagens(response.data);
     
    });

    http.get<any>(`movie/${parametro.id}/credits?language=pt-BR`).then((response) => {
      setElenco(response.data.cast);

      response.data.crew.forEach((item:any) => {
        if(item.job == 'Director') {
          equipe.push(item);
        } if(item.job == 'Writer') {
          equipe.push(item);
        }
      });
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
                <img  src={VITE_IMG + detalhe.poster_path} alt={detalhe.title} />
              </div>

              <div className={styles.conteudo}>
                <h1>
                  {detalhe.title}
                  {moment(detalhe.release_date).format(' (yyyy)')} {' '}
                </h1> {/* Titulo (Ind)  */}
                <span>
                  {moment(detalhe.release_date).format('DD/MM/yyyy .')} {' '}
                </span>
                <span>
                  {detalhe.genres.map((item: any) => (
                    <span key={item.id}> {item.name}</span>
                  ))}
                </span>
                <p>
                  {detalhe.tagline} {' '}
                  {/* Subtitulo(Uma lenda.....) */}
                </p>
                <h1> Sinopse </h1>
                <p>{detalhe.overview}</p>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {equipe.map((item:any) => (
                    <Grid item xs={2} sm={4} md={4} key={item.id}>
                      <span>{item.name}</span>
                      <strong> {item.job}</strong>
                    </Grid>
                  ))}
                </Grid>
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
