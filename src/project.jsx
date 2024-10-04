/*
    Student Name: Jashanjot Kaur
    StudentID: 301435549
    Date: October 3, 2024
*/
import project1 from './project2.webp'; // Replace with your actual project images
import project2 from './project1.png';
import project3 from './project3.png';
import project4 from './project4.png';

export default function Project() {
    return (
        <div className="container">
            <h1>My Projects</h1>
            <p>Here are some of the academic projects I have worked on:</p>
            <ul>
                <li className="project-item">
                    <img src={project1} alt="Retail Database" className="project-image" />
                    <div className="project-description">
                        <strong>Retail Database - SQL:</strong>
                        <br />
                        Collaborated on designing an ER model, generating business rules, and creating relational database tables. Developed and executed SQL queries for data retrieval and manipulation tasks.
                    </div>
                </li>
                <li className="project-item">
                    <img src={project2} alt="Web Design" className="project-image" />
                    <div className="project-description">
                        <strong>Web Design - C#, HTML:</strong>
                        <br />
                        Designed a responsive, user-oriented website using C#, HTML, and CSS for a real estate agent. Implemented features like a scrolling image gallery, contact form, and optimized the design for web and mobile browsing.
                    </div>
                </li>
                <li className="project-item">
                    <img src={project3} alt="SRS Document - EasyJobs" className="project-image" />
                    <div className="project-description">
                        <strong>Software Requirements Specification Document - EasyJobs:</strong>
                        <br />
                        Worked collaboratively using Agile practices, including daily standups and iterative development, to deliver an SRS document for EasyJobs. Developed comprehensive use cases and system requirements for the job recruitment platform.
                    </div>
                </li>
                <li className="project-item">
                    <img src={project4} alt="Portfolio Website" className="project-image" />
                    <div className="project-description">
                        <strong>Portfolio Website:</strong>
                        <br />
                        My personal portfolio website showcasing my skills and projects.
                    </div>
                </li>
            </ul>
            <footer>
                <p>© 2024 Jashanjot Kaur. All rights reserved.</p>
            </footer>
        </div>
    );
}
