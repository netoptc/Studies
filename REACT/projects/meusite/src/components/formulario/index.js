import React,{Component} from "react";

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:  '',
            senha: '',
            erro: ''
        }

        this.changeEmail = this.changeEmail.bind(this);
        this.enviar = this.enviar.bind(this);
    }

    //onChange retorna o objeto com os dados alterado
    changeEmail(e){  
        this.setState({email: e.target.value});
    }
    enviar(e){
        const {email,senha} = this.state;
        
        if(email !== '' && senha !== ''){
            this.setState({erro: ''});
            alert(`Email: ${email} \n Senha: ${senha}`);     
        }else{
            this.setState({erro: 'Ops, parece que esta faltando algo!'});
        }
        

        //para não atualiza a pagina quando enviar o formulario
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h2>Formulario</h2>
                <form onSubmit={this.enviar}>
                    {this.state.erro && <p>{this.state.erro}</p>}
                    <label>Email</label>
                    <input type='email' name='email' value ={this.state.email} onChange={this.changeEmail}></input><br/>
                    <label>Senha</label>
                    <input type='password' name='password' value ={this.state.senha} onChange={(e)=>{this.setState({senha:e.target.value})}}></input><br/>
                    <input type='submit'></input>
                </form>
            
            </div>

        );
    }

}
export default Formulario;