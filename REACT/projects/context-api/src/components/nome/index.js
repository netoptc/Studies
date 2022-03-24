function Nome(props) {
    return (
        <div>
            <p>Bem vindo { props.nome }</p>
            <button onClick={()=>{ props.setNome('test') }}> Alterar Nome</button>
        </div>
    );
}

export default Nome;
