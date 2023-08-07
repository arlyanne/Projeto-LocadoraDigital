//import styles from './Filmes.module.scss';

import { useState, useEffect } from 'react';
import { http } from '../../global/http';
import CapaFilme from '../../components/CapaFilme';

function Filmes() {
  
  const [listaFilmes, setListaFilmes] = useState([]);

  useEffect(() => {
    http.get('discover/movie?include_adult=false&include_video=false&language=pt-br&page=1&sort_by=popularity.des_c')
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
      <h1>CATÁLAGO DE FILMES</h1>
      <div>{listaFilmes.map((filme:any) => (
        <CapaFilme 
          key={filme.id}
          capa={filme.poster_path} 
          titulo={filme.title} 
          popularidade={filme.popularity} 
          data={filme.release_date} url={`detalhe-filme/${filme.id}`} />
      ))}
      </div>
    </div>
  );
}

export default Filmes;