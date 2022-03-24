import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import  Header  from '../../components/Header'

function Dashboard() {
    
    const { SingOut } = useContext(AuthContext);
    
    return (
        <div>
            <Header/>
            <h1>dashboard</h1>
            <button onClick={()=>SingOut()}>Fazer logout</button>
        </div>
    );
}
  
export default Dashboard;