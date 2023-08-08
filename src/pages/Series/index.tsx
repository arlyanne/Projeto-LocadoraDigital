import { error } from 'console';
import { http } from '../../global/http';
import styles from './Series.module.scss';
import {useState, useEffect} from 'react';

export default function Series() {

  const [listaSeries, setListaSeries] = useState ([]);

  useEffect(() => {
    http.get('tv/popular?language=pt-BR&page=1')
      .then(response => {
        setListaSeries(response.data.results);
        console.log(listaSeries);
      })
      .catch(error => {
        console.log('Erro ao buscar series: ', error);
      });
  });


  return(
    <div>
      <h2>
        CATÁLOGO DE SÉRIES
      </h2>

    </div>
  );
}