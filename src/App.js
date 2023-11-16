import './App.css';
import FormPerson from "./pages/FormPerson";
import Evento from './ComponentEvent';
import FormPersonRefactor from './pages/FormPerson/FormPessoaRefactor'
import Condicional from './Condicional';
import { useState } from 'react';
import SeuNome from './StateLift';
import Saudacao from './StateLift/saudacao';
import Button from "./components/Button";



function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
     <Button/>

    </div>
  );
}

export default App;
