import './header.css'
import avatar from '../../assets/avatar.png'

import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { Link } from 'react-router-dom'

function Header(){

    const {user} = useContext(AuthContext);

    return(
        <div className='sidebar'>
            <div>
                <img src={user.avatarUrl ?  user.avatarUrl : avatar}/>
            </div>
            <Link>
                <AiOutlineHome color="#FFF" size={24}/>
                Chamados
            </Link>
            <Link>
                <AiOutlineUser color="#FFF" size={24}/>
                Clientes
            </Link>
            <Link>
                <AiOutlineSetting color="#FFF" size={24}/>
                Configurações
            </Link>
            
        </div>
    )
}
export default Header;

