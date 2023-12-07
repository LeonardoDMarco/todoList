import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function App() {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {' '}
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'contato'}>Contato</Link>
                </li>
                <li>
                    <Link to={'informações'}>Informações</Link>
                </li>
            </ul>
        </div>
    )
}

export default App
