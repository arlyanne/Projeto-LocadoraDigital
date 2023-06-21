import { Navbar, Container , Nav} from 'react-bootstrap';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className={styles.nav}>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Locadora</Navbar.Brand>
          <Nav className="m-auto">
            <Link className={styles.link} to="/">Inicio</Link>
            <Link className={styles.link} to="/">Filmes</Link>
            <Link className={styles.link} to="/">Series</Link>
            <Link className={styles.link} to= "/">Atores</Link>
            <Link className={styles.link} to="/">Sobre</Link>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
