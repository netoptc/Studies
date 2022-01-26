import CicloComponent from './components/ciclo-de-vida';
import Membro from './components/membro';
import Contador from './components/contador';
import Formulario from './components/formulario';
import Formulario_refatorado from './components/formulario-refatorado';
import Biscoito from './components/biscoito';
import Cronometro from './components/cronometro/indes';
import Hooks from './components/hooks';

const Bemvindo = (props) => { 
  return(
    <div>
      <h2>QuickStart</h2>
      <h4>Seja bem vindo(a) {props.nome}</h4>
      <Sobre nome={props.nome} idade={props.idade} proficao={props.proficao} salario={props.salario}/>
      
    </div>
    
  );
}

const Sobre = (props)=>{
  return(
    <div>
      <p>Nome: {props.nome}</p>
      <p>Idade: {props.idade}</p>
      <p>Cargo: {props.proficao}</p>
      <p>Salario: {props.salario}</p>
    </div>
  );
}


function App() {
  return(
    <div>
      <Bemvindo nome="joao" idade ="20" proficao="Front-end" salario="R$3.000,00"/>
      <Contador/>
      <CicloComponent/>
      <Membro nome ="Matheus"/>
      <Formulario/>
      <Formulario_refatorado/>
      <Biscoito/>
      <Cronometro/>
      <Hooks/>
    </div>
  );  
}



export default App;
