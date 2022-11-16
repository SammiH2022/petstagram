import React from 'react'
import './Navbar.css'
import PetsIcon from '@mui/icons-material/Pets';

function Navbar() {
    return (
        <nav className="main-nav">
            <h1>Petstagram</h1>
            <ul>
                <li><a href="/api">API Docs</a></li>
                <li><PetsIcon/>Sammi Huang</li>
                <li><a href="/logout">Sign out</a></li>
            </ul>
        </nav>
    )
}

export default Navbar