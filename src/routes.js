import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Atores from './pages/Atores';
import Series from './pages/Series';
import Sobre from './pages/Sobre';
import Menu from './components/Menu';
import DetalheFilme from './pages/Filmes/DetalheFilme';


export default function AppRouter() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='cadastro' element={<Cadastro />} />
        <Route path='filmes' element={<Filmes />}/>
        <Route path='atores' element={<Atores />}/>
        <Route path='series' element={<Series/>}/>
        <Route path='sobre' element={<Sobre/>}/>
        <Route path='detalhe-filme/:id' element={<DetalheFilme/>} />
      </Routes>
    </Router>
    
  );
}