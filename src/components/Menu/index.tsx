import { Navbar, Container , Nav} from 'react-bootstrap';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className={styles.nav}>
      <Navbar bg="light" variant="light" className='mb-3'>
        <Container>
          <Navbar.Brand href="#home">Locadora</Navbar.Brand>
          <Nav className="me-auto">
            <Link className={styles.link} to="/">Inicio</Link>
            <Link className={styles.link} to="/">Sobre</Link>
            <Link className={styles.link} to= "/">Categoria</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
