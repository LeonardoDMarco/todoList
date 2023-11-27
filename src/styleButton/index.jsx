import React from "react";
import styled, { css } from "styled-components";

const themeButton = (props) => {
    console.log(props)
  return {
    primary: css`
      background: #BF4F74;
      color: black;
    `,
    secondary: css`
      background: green;
    `,
    warning: css`
      background: red;
    `,
  }[props.variante];
};

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  ${(props) => themeButton(props)}
`;

const Botao = () => {
  return (
    <div>
      <Button>Botão</Button>
      <Button variante="primary">Primary</Button>
      <Button variante="secondary">Secondary</Button>
    </div>
  );
};

export default Botao;
