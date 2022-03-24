import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/auth';

function SingUp() {
    
    const [nome, setNome] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    
    const {SingUp,loadingAuth} = useContext(AuthContext);

    function handleSubmit(e){
        e.preventDefault();
        if(nome !== '' && email !== '' && password !== ''){
            SingUp(nome, email,password)
        }
    }

    return (
        <div className='container-center'>
            <div className='login'>
                <div className='logo-area'>
                    <img src={logo} alt='Sistema logo'/>
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Cadastre-se</h1>
                    <input type="text" placeholder="Seu nome" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                    <input type="text" placeholder="email@email.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="***********" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit">{loadingAuth ? 'Carregado...' : 'Cadastrar'}</button>
                </form>

                <Link to="/">Já possui uma conta? Faça o login</Link>
                
            </div>  
        </div>
    );
}
  
export default SingUp;
  