import Menu from '../../components/Menu';
import Container from 'react-bootstrap/Container';
import styles from './Home.module.scss';
import { useState } from 'react';


export default function Home() {
  const [buscar, setBuscar] = useState<string>();

  return (
    <section>
      <Menu />
      {/* USAR CONTAINER DO BOOTSTRAP PARA DAR MAGEM AO LADO */}
      <Container>
        <div>
          <header className={styles.header}>
            <div className={styles.header__text}>
              <h2>
                Seja Bem Vindo(a).
              </h2>
              <h3>
                  Milhões de Filmes, Séries e Atores para Descobrir. Explore já.
              </h3>
              <input
                className={styles.input}
                value={buscar}
                type="text"
                onChange={(e) =>setBuscar(e.target.value)}
                placeholder="Buscar..." />
            </div>
          </header>    
        </div>
      </Container>
    </section>
  );
}
