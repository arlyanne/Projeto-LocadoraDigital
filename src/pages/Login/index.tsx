import { useState } from 'react';
import styles from './Login.module.scss';


export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className={styles.container} >
      <h4 className={styles.h4}> CUSTOMER LOGIN </h4>
      <label className={styles.label} htmlFor="text"></label>
      <input 
        value={nome}
        type="text" 
        id="login" className={styles.input}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Login"
      />

      <label className={styles.label}></label>
      <input 
        value={senha}
        type="text" 
        id="senha" className={styles.input}
        placeholder="Senha"
        onChange={(evento) => setSenha(evento.target.value)}
      />

      <button className={styles.button}>
        Entrar
      </button>
    </div>
  );
}