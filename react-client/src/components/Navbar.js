import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="main-nav">
            <h1>Petstagram</h1>
            <ul>
                <li><a href="/api">API Docs</a></li>
                <li>Sammi Huang</li>
                <li><a href="/logout">Sign out</a></li>
            </ul>
        </nav>
    )
}

export default Navbar