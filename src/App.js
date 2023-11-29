import "./App.css";
import Button from "./components/Button";
import Condicional from "./Condicional";
import Formulario from "./Form";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Users</h1>
        <ul>
          {" "}
          <li>
            <Link to={"/"}>Link Home</Link>
          </li>
          <li>
            <Link to={"janio"}>Link Janio</Link>
          </li>
        </ul>
      </div>
      <Formulario />
    </div>
  );
}

export default App;
