
import React from "react";

import styled from 'styled-components';




const ColorButton = styled.button`
color: green;
background:red;
font-size: 1em;
margin: 1em;
padding: 0.30em 1em;
&:hover {background: #ff0fa8;
color: black;

`;


const Button = ({nome}) => {

    return (
        <ColorButton>Enviar!</ColorButton>
    );
};

export default Button;
