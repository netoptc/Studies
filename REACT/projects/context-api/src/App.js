import Aluno from "./components/aluno";
import Aluno_context from "./components/aluno _context";
import { useState } from "react";
import UserProvider from "./contexts/user";

function App() {
  
  const [nome, setNome] = useState('João Queiroz')
  
  return (
    <div>
      <h1>Sem Context-api</h1>
      <hr></hr>
      <Aluno nome={ nome } setNome={ setNome }/>
      
      <UserProvider>
        <h1>Com Context-api</h1>
        <hr></hr>
        <Aluno_context/>
      </UserProvider>
    </div>
  );
}

export default App;
