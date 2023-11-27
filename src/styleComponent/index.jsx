import React from "react";
import styled, { css } from "styled-components";


const ThemeList = (props) => {
return {
    primary: css`
      color: red;
    `,
    secondary: css`
      color: green;
    `,
    warning: css`
      color: orange;
    `,
  }[props.variante];
};




const Listas = styled.p`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #BF4F74;
border-radius: 3px;
${(props) => ThemeList(props)}
`;


const List = () => {

    return(
        <div>
            <h1>Lista:</h1>
            
            <Listas variante="primary">Ir para a academia</Listas>
            <Listas variante="secondary">Estudar styled-Component</Listas>
            <Listas variante="warning">cuidar da Laila</Listas>
            
            
        </div>
    )
} 

export default List;