import api from "../../services/api";

import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import './filme.css'

export default function Filme(){
    

    const [filme, setFilme] = useState([]);
    const [load, setLoad] = useState(true);
    const {id} = useParams();
    const history = useHistory();

    useEffect(()=>{
        async function getFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0){
                //Se a respota for vazia significa que o filme nao foi encontrado na api
                history.replace('/');
                return;
            }
            
            setFilme(response.data);
            setLoad(false);
        

        }
        getFilme();
    },[id, history])

    if(load){
        return(
            <div className="filme-info">
                <h2>Carregado o Filme</h2>
            </div>
        )
    }


    function salvarFilme(){

        const filmesSalvos = localStorage.getItem('filmes');
        
     
        //Transformando a string em um json se esiver vazia ira receeber um array vazio
        let filmes = JSON.parse(filmesSalvos) || [];
      
        //verificando se o filme atual ja esta salvo - retorna true se ja estiver salvo
        const hasFilme = filmes.some((filmeSalvo)=>filmeSalvo.id === filme.id);
    
        if(!hasFilme){
            filmes.push(filme);
            localStorage.setItem('filmes',JSON.stringify(filmes));
            toast.success('Filme Salvo com Sucesso')
        }else{
            toast.warning('Filme já esta Salvo');
        }

    }

    return(        
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>
            <p>{filme.sinopse}</p>
            <button onClick={salvarFilme}>SALVAR</button>
            
        </div>
    )
}