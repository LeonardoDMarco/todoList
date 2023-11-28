
import './App.css';
import Button from './components/Button/index';
import Botao from './styleButton';
import List from './styleComponent/index';
import Botoes from './testComponent';
import Enrollment from './styleInput';





function App() {

  return (
    <div className="App">
      <Enrollment />
      <Button />
      <Botoes/>
      <Botao />
      <List />
    </div>
  );
}

export default App;
