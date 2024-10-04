import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./logo.png";

export default function Layout() {
    return (
        <>
            <header>
                <h1>My Portfolio</h1>
                <div className="logo-container">
                    <img 
                        src={Logo} 
                        width={200}
                        height={300}
                        alt="My Logo" 
                        className="logo" 
                    />
                </div>
            </header>
 <nav>
 <Link to="/">Home Page</Link> | <Link to="/about">About Me</Link> | <Link to="/services">Services</Link>| <Link to="/project">Projects</Link>| <Link to="/contact">Contact Me</Link>
 </nav>
<br/>
 <hr />
 
</>
 
 );
}
