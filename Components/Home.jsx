import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
            <header>
                <h1>Welcome to My Portfolio</h1>
            </header>
            <section class="intro-section">
                <p>
                    Hello! I'm Jashanjot Kaur, a passionate Software Developer Intern with experience in web and mobile development, database design, and problem-solving through innovative technology solutions. 
                    This portfolio showcases my skills, projects, and journey in the world of software engineering.
                </p>
                <p class="mission-statement">
                    <strong>Mission Statement:</strong> My mission is to leverage technology to solve real-world problems and continuously grow and learn in the field of software engineering.
                </p>
            </section>
            <section className="button-section">
                <div className="button-container">
                    <Link to="/about">
                        <button>Learn More About Me</button>
                    </Link>
                    <Link to="/services">
                        <button>My Services</button>
                    </Link>
                    <Link to="/project">
                        <button>View My Projects</button>
                    </Link>
                </div>
            </section>
            {/* Footer Section */}
            <footer>
                <p>© 2024 Jashanjot Kaur. All rights reserved.</p>
            </footer>
        </div>
    );
}
