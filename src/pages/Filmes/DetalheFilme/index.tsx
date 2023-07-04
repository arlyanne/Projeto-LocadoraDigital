import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { http } from '../../../global/http';
import { VITE_IMG } from '../../../global/api_const';


export default function DetalheFilmes() {
  
  const parametro = useParams();
  console.log(parametro);

  const [detalhe, setDetalhe] = useState<any>();
  
  useEffect(() => {
    http.get<any>(`movie/${parametro.id}?language=pt-BR`)
      .then(response => {
        setDetalhe(response.data);
        console.log(detalhe);
      });
  },[]);

  return(
    <div className='container'>
      <h1>{parametro.id}</h1>
      {detalhe && <img src={VITE_IMG + detalhe.backdrop_path} alt="" />}
    </div>
  ); 
}