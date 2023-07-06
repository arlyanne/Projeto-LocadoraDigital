import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { http } from '../../../global/http';
import { VITE_IMG } from '../../../global/api_const';
import styles from './Home.module.scss';


export default function DetalheFilmes() {
  
  const parametro = useParams();
  console.log(parametro);

  const [detalhe, setDetalhe] = useState<any>();
  const [imagens, setImagens] = useState<any>();
  
  useEffect(() => {
    http.get<any>(`movie/${parametro.id}?language=pt-BR`)
      .then(response => {
        setDetalhe(response.data);
        console.log(detalhe);
      });

    http.get<any>(`movie/${parametro.id}/images`)
      .then(response => {
        setImagens(response.data);
        console.log(imagens);
      });
  },[]);



  return (
    <div className="container">
      {detalhe && (
        <>
          <img src={VITE_IMG + imagens?.backdrops[0].file_path} alt={detalhe.title} />
          <h1>{detalhe.title}</h1>
          <h2> {detalhe.tagline}</h2>
          <h2>
            {detalhe.genres.map((item: any) => (
              <span key={item.id}> {item.name}</span>
            ))}
          </h2>
          <img src={VITE_IMG + detalhe.poster_path} alt={detalhe.title} />
          <h1> Sinopse </h1> {detalhe.overview}
          {detalhe.spoken_languages.map((e: any) => (
            <span key={e.iso_639_1}>{ e.english_name} {' '}</span>
          ))}

        </>
      )}
    </div>
  ); 
}