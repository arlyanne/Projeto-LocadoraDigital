import { useState } from "react"


export default function Login() {
   const [nome, setNome] = useState('');
   const [senha, setSenha] = useState('');

    return (
        <div>
           <label htmlFor="">Nome</label>
           <input 
              value={nome}
              type="text" 
              onChange={(evento) => setNome(evento.target.value)}
              placeholder="Nome"
              />

              <label htmlFor="">Senha</label>
              <input 
                value={senha}
                type="text" 
                onChange={(evento) => setSenha(evento.target.value)}
                />
        </div>
    )
}