import react, { Component } from 'react';
import CicloComponent from './ciclo-de-vida';
import Membro from './components/membro';

const Bemvindo = (props) => { 
  return(
    <div>
      <h1>Seja bem vindo(a) {props.nome}</h1>
      <h2>Dados</h2>
      <Sobre nome={props.nome}/>
      <Sobre idade={props.idade}/>
      <Cargo proficao={props.proficao} salario={props.salario}/>
      <hr></hr>
    </div>
    
  );
}

const Sobre = (props)=>{
  return(
    <div>
      <p>Nome: {props.nome}</p>
      <p>Idade: {props.idade}</p>
    </div>
  );
}


/*Class component*/

class Cargo extends Component{

  render(){
      return(
          <div>
              <p>Cargo: {this.props.proficao}</p>
              <p>Salario: {this.props.salario}</p>
              
          </div>
      );
  }
}


class Contador extends Component{
  constructor(prods){
    super(prods)
    this.state = {
      contador: 0
    }
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    let state = this.state;
    this.state.contador += 1;
    this.setState({state});
  }
  

  diminuir(){
    let state = this.state;
    this.state.contador -= 1;
    this.setState({state});
  }

  render(){
      return(
          <div>
            <button onClick={this.diminuir}>-</button>
            {this.state.contador}
            <button onClick={this.aumentar}>+</button>
          </div>
      );
  }

}



function App() {
  return(
    <div>
      <Bemvindo nome="joao" idade ="20" proficao="Front-end" salario="R$3.000,00"/>
      <Bemvindo nome="Maria" idade ="30" proficao="Back-end" salario="R$5.500,00"/>
      <Contador/>
      <CicloComponent/>
      <Membro nome ="Matheus"/>
    </div>
  );  
}



export default App;
