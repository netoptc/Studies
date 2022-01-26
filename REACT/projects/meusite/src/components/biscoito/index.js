import React,{Component} from "react";
import './css/style.css'

class Biscoito  extends Component{
    constructor(props){
        super(props);
        this.state = {
            fraseSortiada:'',
            frase: ['frase1', 'frase2', 'frase3']
        
        }

        this.gerarFrase = this.gerarFrase.bind(this);
    }

    gerarFrase(){
    
        let numeroSortiado = Math.floor(Math.random()*this.state.frase.length);
        this.setState({fraseSortiada: this.state.frase[numeroSortiado]});
    }

    render(){
        return(
            <div className='container' >
                <h2>Biscoito</h2>
                <img className='imagem' src={require('./assets/img/biscoito.png')}/>
                <button onClick={this.gerarFrase}>Abrir biscoito</button>
                <b>{this.state.fraseSortiada}</b>
            </div>

        );
    }

}
export default Biscoito;