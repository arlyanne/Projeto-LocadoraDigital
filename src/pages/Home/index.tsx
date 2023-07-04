import { Container } from '@mui/material';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import ScrollMovies from '../../components/ScrollMovies';
import { http } from '../../global/http';


export default function Home() {
  const [buscar, setBuscar] = useState<string>();
  const [filmes, setFilmes] = useState<any>([]);

  useEffect(() => {
    http.get('trending/movie/day?language=pt-br')
      .then(response => {
        setFilmes(response.data.results);
        console.log(filmes);
      });

  },[]);

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
        <ScrollMovies data={filmes || []} />
      </div>
    </section>
  );
}
