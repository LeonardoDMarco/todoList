import React, { useEffect, useState } from "react";

const FormPersonRefactor = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    estado: "",
  });

  const { name, email, password, estado } = inputValue;

  useEffect(() => {
    console.log("janio", inputValue);
  }, [inputValue]);

  const onChangeValue = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const resultado = { ...inputValue, [id]: value };
    setInputValue(resultado);
  };

  return (
    <div>
      <section>
        <h4>Cadastro de Alunos</h4>
        <p>cadastrar alunos para o ano letivo de 2024</p>
      </section>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: 800,
          justifyContent: "center",
        }}
      >
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => onChangeValue(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => onChangeValue(e)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => onChangeValue(e)}
        />
        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          id="estado"
          name="estado"
          placeholder="Digite seu estado"
          value={estado}
          onChange={(e) => onChangeValue(e)}
        />
      </form>
    </div>
  );
};

export default FormPersonRefactor;
