import React,{useEffect, useMemo, useState} from "react";


function Hooks(){

    //Criando um estado e desconstruindo
    const [tarefas, setTarefa] = useState(['Tarefa1', 'Tarefa2']);
    const [input, setInput] = useState('');
    


    //Funciona da mesma forma que o didUpdate - ira executar toda for atualizado
    useEffect(
        ()=>{console.log('item adiciona a lista(UseEffect)')}, [tarefas]
    );

    //Funcoina da mesma forma que o didMount - ira executar quando a pagina for montada 
    useEffect(()=>{console.log('componente montado')}, [])

    
    //É acionado somneto quando ouver uma alteração em tarefas 
    const totalTarefas = useMemo(
        ()=>tarefas.length,[tarefas]
    );

    function addTarefa(){
        setTarefa([...tarefas,input]);
        setInput('');
    }


   

    return(
        <div>
            <h2>Hooks</h2>
            <strong>Você tem {totalTarefas} tarefas</strong>
            <ul>
                {
                tarefas.map(
                    (tarefa)=>{return(<li>{tarefa}</li>);
                })}
            </ul>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
       
            <button type="button" onClick={addTarefa}>ADD TAREFA</button>
    
        </div>

    );
}
export default Hooks;