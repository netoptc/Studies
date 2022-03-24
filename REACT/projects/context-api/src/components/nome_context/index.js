import { useContext } from 'react'

import { UserContext } from '../../contexts/user'

function Nome_context() {
    const { nome, setNome } = useContext(UserContext);

    return (
        <div>
            <p>Bem vindo { nome }</p>
            <button onClick={()=>{ setNome('Neto')}}> Alterar Nome</button>
        </div>
    );
}

export default Nome_context;
