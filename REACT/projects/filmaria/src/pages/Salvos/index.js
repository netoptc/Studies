import './salvos.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Salvos(){
    

    const [filmes,setFilmes] = useState([]);

    useEffect(()=>{
        const filmesSalvos = localStorage.getItem('filmes');
        //Transformando a string em um json se esiver vazia ira receeber um array vazio
        let filmes = JSON.parse(filmesSalvos) || [];            
        
        setFilmes(filmes);

    },[]);
    
    function excluirFilme(id){
        
        
        let filtroFilme = filmes.filter((item)=>{
            return(item.id !== id)
        });

        setFilmes(filtroFilme);
    
        localStorage.setItem('filmes', JSON.stringify(filtroFilme));

        toast.warning('Filme excluido');
       
    }

    return(
        <div id="meus-filmes">

            <h1>Meus Filmes</h1>
            {filmes.length === 0 &&<span>Você ainda não possui filmes salvos</span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.nome}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}> Ver Detalhes</Link>
                                <button onClick={()=>excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}