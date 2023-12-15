import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import styled from 'styled-components'

const Divisoria = styled.h1`
    background-color: red;
    color: blue;
    
`;


const root = ReactDOM.createRoot(document.getElementById('root'))
const Janio = () => (
    <div>
        <Divisoria>Home</Divisoria>
        <ul>
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
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contato" element={<Janio />} />
                <Route path="/informações" element={<Janio />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

reportWebVitals()
