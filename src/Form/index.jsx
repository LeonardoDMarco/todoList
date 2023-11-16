import React, {useState} from "react";
import style from './index.css';

const Formulario = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [exibirInformacoes, setExibirInformacoes] = useState(false);
    const [cadastros, setCadastros] = useState([]);

    const enviarCadastro = (e) => {
        e.preventDefault()
        const novoCadastro = { nome, email, idade };
        setCadastros([...cadastros, novoCadastro]);
        setNome('')
        setEmail('')
        setIdade('')
        setExibirInformacoes(true);
    }

    const limparCadastro = () => {
        setNome("");
        setEmail("");
        setIdade("");
        setExibirInformacoes(false);
    }
    


    return(
        <div>
        <section>
            <h1>Cadastre-se aqui!</h1>
            <p>Insira as informações para se cadastrar:</p>
        </section>

        <section className="form">
            <label htmlFor="name">Nome:</label>
            <input type="text" placeholder="digite seu nome:" value={nome}
            onChange={(e) => setNome(e.target.value)}/>
            
            <label htmlFor="email">E-mail:</label>
            <input type="text" placeholder="digite seu e-mail:"  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            
            <label htmlFor="idade">Idade:</label>
            <input type="text" placeholder="digite sua idade:" value={idade}
            onChange={(e) => setIdade(e.target.value)}/>
        </section>
        <section>
        <button onClick={enviarCadastro}>Enviar Cadastro</button>
        {exibirInformacoes && (
          <div>
            <p>Seu nome é: {nome}</p>
            <p>Seu e-mail é: {email}</p>
            <p>Sua idade é: {idade}</p>
          </div>
        )}
      </section>
    

        <section>
        <h2>Lista de Pessoas Cadastradas</h2>
        <ul>
          {cadastros.map((cadastro, index) => (
            <li key={index}>
              <p>Nome: {cadastro.nome}</p>
              <p>E-mail: {cadastro.email}</p>
              <p>Idade: {cadastro.idade}</p>
            </li>
          ))}
        </ul>
      </section>
        </div>
    )   
}

export default Formulario;