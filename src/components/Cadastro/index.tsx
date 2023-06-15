import { useState } from "react";
import styles from './Cadastro.module.scss';


export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");

const salvar= () =>{
    console.log(nome, email, senha, telefone);
}

  return (
    <div className={styles.container}>
        <h2>Cadastro</h2>
      <label htmlFor="">Nome</label>
      <input 
        value={nome}
        type="text"
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Nome"
      />

      <label htmlFor="">Email</label>
      <input 
        value={email}
        type="text"
        onChange={(evento) => setEmail(evento.target.value)}
        placeholder="Email"
      />

      <label htmlFor="">Senha</label>
      <input
        value={senha}
        type="text"
        onChange={(evento) => setSenha(evento.target.value)}
        placeholder="Senha"
      />

      <label htmlFor="">Telefone</label>
      <input
        value={telefone}
        type="text"
        onChange={(evento) => setTelefone(evento.target.value)}
      />

      <button onClick={salvar}>
        Salvar
      </button>
    </div>
  );
}
