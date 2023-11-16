import './App.css';
import FormPerson from "./pages/FormPerson";
import Evento from './ComponentEvent';
import FormPersonRefactor from './pages/FormPerson/FormPessoaRefactor'
import Condicional from './Condicional';
import { useState } from 'react';
import SeuNome from './StateLift';
import Saudacao from './StateLift/saudacao';



function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <FormPerson/>
      <Evento />
      <FormPersonRefactor />
      <Condicional />

      <h2>State Lift</h2>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>

    </div>
  );
}

export default App;
