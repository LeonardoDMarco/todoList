import React from "react";
import styled from "styled-components";

const inscricao = styled.input` 
padding: 10px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 5px;
outline: none;

&:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
`;

const Enrollment = () => {
    return (
        <div>
        <h2>Informe seu e-mail:</h2>
        <input type="text" placeholder="digite seu e-mail:" />
        </div>
    )
}

export default Enrollment;