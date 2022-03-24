import Nome from "../nome";

function Aluno(props) {
    
    return (
      <div>
        <h2>Component Alunos</h2>
        <Nome nome={props.nome} setNome = {props.setNome}/>
      </div>
    );
}
  
export default Aluno;
  