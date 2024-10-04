import React from 'react';
import profilePicture from './myimage.jpg'; // Replace with your actual image file name
import resume from './myresume.pdf'; // Replace with your actual resume file name

export default function About() {
    return (
        <div className="container">
            <h1>About Me</h1>
            <div className="about-container">
                <div className="image-container">
                    <img src={profilePicture} alt="Jashanjot Kaur" className="profile-picture" />
                </div>
                <div className="content-container">
                    <p>
                        My name is Jashanjot Kaur, and I am a Software Engineering Technology (Co-op) student with a strong focus on web and mobile development.
                        I have experience in various programming languages, including JavaScript, SQL, and C#, and enjoy building responsive user interfaces
                        and efficient databases.
                    </p>
                    <p>
                        You can download my resume using the link below:
                    </p>
                    <a href={resume} download className="resume-link">
                        Download My Resume
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <p>© 2024 Jashanjot Kaur. All rights reserved.</p>
            </footer>
        </div>
    );
}
