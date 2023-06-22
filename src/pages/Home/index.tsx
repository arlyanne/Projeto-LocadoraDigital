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
          <h3> Sobre </h3>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </Container>
    </section>
  );
}
