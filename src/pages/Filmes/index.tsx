//import styles from './Filmes.module.scss';

import { useState, useEffect } from 'react';
import { http } from '../../global/http';
import CapaFilme from '../../components/CapaFilme';
import style from './Filmes.module.scss';
import { Grid } from '@mui/material';

function Filmes() {
  
  const [listaFilmes, setListaFilmes] = useState([]);

  useEffect(() => {
    http.get('movie/now_playing?language=pt-BR&page=1')
      .then(response => {
        setListaFilmes(response.data.results);
        console.log(listaFilmes);
      })
      .catch(error => {
        console.error('Erro ao buscar filmes:', error);
      });
  },[]);

  

  return (
    <div>
      <h1>CATÁLOGO DE FILMES</h1>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {listaFilmes.map((filme: any) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={filme.id}>
            <CapaFilme
              capa={filme.poster_path}
              titulo={filme.title}
              popularidade={filme.popularity}
              data={filme.release_date}
              url={`/detalhe-filme/${filme.id}`}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Filmes;