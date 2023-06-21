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
            <Link to="/">Inicio</Link>
            <Link to="/">Sobre</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
