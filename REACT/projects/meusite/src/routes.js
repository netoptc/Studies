import { Routes as Router ,Route } from 'react-router-dom';
import Home from './pages/Home'
import Contato from './pages/Contato';
import Erro404 from './pages/404';
import Produto from './pages/Produto';

const Routes = () =>{
    
    
    return(
        <Router>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/contato' element={<Contato/>} />
            <Route exact path='/produto/:id' element={<Produto/>} />
            <Route path='*' element={<Erro404/>} /> 
        </Router>
    );
    // path = '*' é o 404 sempre tem que ser a ultima rota
}

export default Routes