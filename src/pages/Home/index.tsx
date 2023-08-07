import {ToggleButtonGroup,ToggleButton } from '@mui/material';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import ScrollMovies from '../../components/ScrollMovies';
import { http } from '../../global/http';
import CapaFilme from '../../components/CapaFilme';


export default function Home() {
  const [buscar, setBuscar] = useState<string>();
  const [filmes, setFilmes] = useState<any>([]);
  const [tempo, setTempo] = useState('day');


  useEffect(() => {
    http.get(`trending/movie/${tempo}?language=pt-br`)
      .then(response => {
        setFilmes(response.data.results);
        console.log(filmes);
      });
  },[]);

  const atualizarTempo = (e:any) => {
    e.preventDefault();
    console.log(e);
    setTempo(e.target.value);
   
    http.get(`trending/movie/${e.target.value}?language=pt-br`)
      .then(response => {
        setFilmes(response.data.results);
        console.log(filmes);
      });
    console.log(tempo);
  };

  
  return (
    <section>
      <div className='container'>
        <header className={styles.header}>
          <div className={styles.header__text}>
            <h2>Seja Bem Vindo(a).</h2>
            <h3>
              Milhões de Filmes, Séries e Atores para Descobrir. Explore já.
            </h3>
            <input
              className={styles.input}
              value={buscar}
              type="text"
              onChange={(e) => setBuscar(e.target.value)}
              placeholder="Buscar..."
            />
          </div>
        </header>

        <div className={styles.estilo__botaoTendencia}>
          <h3 className={styles.mr10}> Tendências </h3>
          <ToggleButtonGroup
            color="primary"
            value={tempo}
            exclusive
            onChange={atualizarTempo}
            aria-label="Platform">
            <ToggleButton value="day">Hoje</ToggleButton>
            <ToggleButton value="week">Esta semana</ToggleButton>
          </ToggleButtonGroup>
        </div>

        <ScrollMovies url="detalhe-filme/id" data={filmes || []} />
        {/* <CapaFilme 
        titulo='A menina que roubava livros'
        data='2014-01-31'
        popularidade='98%'
        url=''
        capa={'https://2.bp.blogspot.com/-TOCRLYBV3N4/UsbbAXBZmkI/AAAAAAAAPuM/DbPHOcuv6HA/s1600/A-Menina-Que-Roubava-Livros-capa-filme-1.jpg'}/> */}
      </div>
    </section>
  );
}
