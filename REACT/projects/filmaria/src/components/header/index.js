import './header.css'

import { Link } from "react-router-dom"



export default function Header(){
    return(
        <div>
            <header>
                <Link className="logo" to="/">Filmaria</Link>
                <Link className="salvos" to="/salvos">Salvos</Link>
            </header>

            
        </div>
    )
}