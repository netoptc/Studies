import React,{Component} from "react";

class FormularioRefatorado extends Component{
    constructor(props){
        super(props);
        this.state = {
            
            form: {
                senha: '',
                email: '',
            },
            erro: ''
        }

        this.changeDados = this.changeDados.bind(this);
        this.enviar = this.enviar.bind(this);
    }

    //onChange retorna o objeto com os dados alterado
    changeDados(e){  
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form});
    }
    enviar(e){
        const {email,senha} = this.state.form;
        
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
                <h2>Formulario Refatorador</h2>
                <form onSubmit={this.enviar}>
                    {this.state.erro && <p>{this.state.erro}</p>}
                    <label>Email</label>
                    <input type='email' name='email' value ={this.state.form.email} onChange={this.changeDados}></input><br/>
                    <label>Senha</label>
                    <input type='password' name='senha' value ={this.state.form.senha} onChange={this.changeDados}></input><br/>
                    <input type='submit'></input>
                </form>
            
            </div>

        );
    }

}
export default FormularioRefatorado;