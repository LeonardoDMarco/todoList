import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Divisoria = styled.h1`
    background-color: red;
    color: blue;
    font-style: initial;

;
`


function App() {
    return (
        <div>
            <Divisoria>Home</Divisoria>
            <ul>
                {' '}
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/contato'}>Contato</Link>
                </li>
                <li>
                    <Link to={'/informações'}>Informações</Link>
                </li>
            </ul>
        </div>
    )
}

export default App
