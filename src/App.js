import React from "react";
import "./App.css";
import Button from "./components/Button";
import Formulario from "./Form";
import { Link } from "react-router-dom";


import './App.css';

import Botao from './styleButton';
import List from './styleComponent/index';
import Botoes from './testComponent';
import Enrollment from './styleInput';





function App() {

  return (
    <div className="App">
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
      <Enrollment />
      <Button />
      <Botoes/>
      <Botao />
      <List />

    </div>
    </div>
  );
}

export default App;
