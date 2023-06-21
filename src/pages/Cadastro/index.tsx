import { useState } from 'react';
import styles from './Cadastro.module.scss';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  const salvar = () => {
    console.log(nome, email, senha, telefone);
  };

  return (
    <div className={styles.container}>
      <h2>Cadastre-se</h2>
      <label className={styles.label} htmlFor="text">Nome</label>
      <input
        className={styles.input}
        value={nome}
        type="text"
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Nome..."
      />

      <label className={styles.label} htmlFor="">Email</label>
      <input
        className={styles.input}
        value={email}
        type="text"
        onChange={(evento) => setEmail(evento.target.value)}
        placeholder="Email..."
      />

      <label className={styles.label} htmlFor="">Senha</label>
      <input
        className={styles.input}
        value={senha}
        type="text"
        onChange={(evento) => setSenha(evento.target.value)}
        placeholder="Senha..."
      />

      <label className={styles.label} htmlFor="">Telefone</label>
      <input
        className={styles.input}
        value={telefone}
        type="text"
        onChange={(evento) => setTelefone(evento.target.value)}
        placeholder="Telefone..."
      />
      <button className={styles.button} onClick={salvar}>
        Salvar
      </button>
    </div>
  );
}
