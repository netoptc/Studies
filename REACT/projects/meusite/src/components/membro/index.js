import react,{ Component } from "react";

class Membro extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            nome: props.nome,
            auth: false,
            usuarios:[
                {id: 1, username:'Neto', curtidas: 10, comentarios: 1},
                {id: 2, username:'Lukas', curtidas: 20, comentarios: 2},
                {id: 3, username:'Paulo', curtidas: 30, comentarios: 3},
            ]
        }
        
        this.entrar = this.entrar.bind(this);

    }    

    entrar(){
        this.setState({auth: true});
    }
    
    render(){
        //operador Ternario
        return(
            <div>
                <h2>Listas</h2>
                {this.state.auth ? 
                    <div>
                        <p>Bem-vindo(a) {this.state.nome}</p>
                        <button onClick={ ()=>{this.setState({auth: false})} }>Sair</button>    

                        <p>Lista de Usuarios</p>

                        {this.state.usuarios.map((item)=>{
                            return (
                                <div key={item.id}>
                                    <p>{item.username} - {item.curtidas} - {item.comentarios}</p>
                                </div>
                            )
                        })}


                    </div> :
                    <div>
                        <p>Bem-vindo Visitante</p>
                        <button onClick={this.entrar}>Entrar</button>
                    </div>
                }
            </div> 

            
        )
    }

}

export default Membro;

