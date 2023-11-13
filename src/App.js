import './App.css';
import FormPerson from "./pages/FormPerson";
import Evento from './ComponentEvent';
import FormPersonRefactor from './pages/FormPerson/FormPessoaRefactor'
import Condicional from './Condicional';



function App() {

  return (
    <div className="App">
      <FormPerson/>,
      <Evento />
      <FormPersonRefactor />
      <Condicional />
    </div>
  );
}

export default App;
