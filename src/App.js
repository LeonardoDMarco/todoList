import './App.css';
import FormPerson from "./pages/FormPerson";
import Evento from './ComponentEvent';
import FormPersonRefactor from './pages/FormPerson/FormPessoaRefactor'

function App() {
  return (
    <div className="App">
      <FormPerson/>,
      <Evento />
      <FormPersonRefactor />

    </div>
  );
}

export default App;
