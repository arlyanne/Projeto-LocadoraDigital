import { Navbar, Container , Nav} from 'react-bootstrap';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  const rotas = [
    {
      label: 'Início',
      to:'/',
    },
    {
      label: 'Filmes',
      to:'/',
    },
    {
      label: 'Séries',
      to:'/',
    },
    {
      label: 'Atores',
      to:'/',
    },
    {
      label: 'Sobre',
      to:'/',
    },

  ];

  return (
    <div className={styles.nav}>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Locadora</Navbar.Brand>
          <Nav className="m-auto">
            <Link className={styles.link} to="login">Inicio</Link>
            <Link className={styles.link} to="filmes">Filmes</Link>
            <Link className={styles.link} to="series">Series</Link>
            <Link className={styles.link} to= "atores">Atores</Link>
            <Link className={styles.link} to="sobre">Sobre</Link>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
