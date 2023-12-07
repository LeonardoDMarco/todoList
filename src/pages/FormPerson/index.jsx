import React, { useEffect } from "react";

const FormPerson = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [estado, setEstado] = React.useState("");

  useEffect(() => {
    console.log("janio", { name, email, password, estado });
  }, [name, email, password, estado]);

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
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          id="estado"
          name="estado"
          placeholder="Digite seu estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
      </form>
    </div>
  );
};

export default FormPerson;
