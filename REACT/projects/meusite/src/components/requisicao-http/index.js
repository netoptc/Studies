////API: https://sujeitoprogramador.com/rn-api/?api=posts

import React,{useEffect, useState} from "react";
import  './css/style.css'

function RequisicaoHttp(){

    const[dadosJson, setDadosJson] =useState([]);
    
    useEffect(()=>{
        function loadApi(){ 
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
            fetch(url) //fetch retorna uma promisse
            .then((r)=>r.json()) //Convertendo os dados para json tabem retorna uma promisse
            .then((dados)=>setDadosJson(dados));  
        } 

        loadApi();
    },[]); 
    
    return(
        <div>
            <h2>Requisição http</h2>
            {dadosJson.map(
                
                (item)=>{
                    return(
                        <article key={item.id}>
                            <img className='img' src={item.capa} alt={item.titulo}/>
                            <strong>{item.titulo}</strong>
                            <p>{item.subtitulo}</p>
                        </article>
                    );
                }
                
            )}
           
        </div>
    );

}

export default RequisicaoHttp;