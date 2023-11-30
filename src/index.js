import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
const Janio = () => (
    <div>
        <h1>Users</h1>
        <ul>
            <li>
                <Link to={'/'}>Link Home</Link>
            </li>
            <li>
                <Link to={'janio'}>Link Janio</Link>
            </li>
        </ul>
    </div>
)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/janio" element={<Janio />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
