import React from 'react';

export default function Services() {
    return (
        <div className="container">
            {/* ===== Section: Header ===== */}
            <h1>What I Offer</h1>
            <p>Transform your business with my specialized development services designed to deliver efficient and scalable solutions:</p>
            
            {/* ===== Section: Services List ===== */}
            <ul className="services-list">
                <li className="service-item">
                    <img 
                        src="https://tse4.mm.bing.net/th?id=OIP.YraxiK4XKQjdWqDTHUD4vAHaDV&pid=Api&P=0&h=180" 
                        alt="Responsive Web Design" 
                        className="service-image" 
                        style={{ width: '120px', height: '120px' }} /* Increased image size */
                    />
                    <div className="service-description">
                        <strong>Responsive Web Design:</strong> Crafting visually stunning websites that adapt perfectly to any device, offering a seamless user experience.
                    </div>
                </li>
                <li className="service-item">
                    <img 
                        src="https://tse1.mm.bing.net/th?id=OIP.xkiL8sAo4IqWTWyKRF_1egHaDt&pid=Api&P=0&h=1800" 
                        alt="Custom API Solutions" 
                        className="service-image" 
                        style={{ width: '120px', height: '120px' }} /* Increased image size */
                    />
                    <div className="service-description">
                        <strong>Custom API Solutions:</strong> Developing scalable APIs tailored to your business needs for smooth integration across platforms.
                    </div>
                </li>
                <li className="service-item">
                    <img 
                        src="https://tse4.mm.bing.net/th?id=OIP.031uUBJKpWCuuX8VKfr9jAHaFj&pid=Api&P=0&h=180" 
                        alt="Data-Driven Insights" 
                        className="service-image" 
                        style={{ width: '120px', height: '120px' }} /* Increased image size */
                    />
                    <div className="service-description">
                        <strong>Data-Driven Insights:</strong> Expert database management, ensuring your data is organized, secure, and ready to drive business intelligence.
                    </div>
                </li>
                <li className="service-item">
                    <img 
                        src="https://tse1.mm.bing.net/th?id=OIP.AC_Q43XECRQ&pid=Api&P=0" 
                        alt="AI-Enhanced Solutions" 
                        className="service-image" 
                        style={{ width: '120px', height: '120px' }} /* Increased image size */
                    />
                    <div className="service-description">
                        <strong>AI-Enhanced Solutions:</strong> Leverage cutting-edge AI technologies, integrating OpenAI and Gemini APIs to optimize user engagement and business processes.
                    </div>
                </li>
            </ul>

            {/* ===== Section: Footer ===== */}
            <footer>
                <p>© 2024 Jashanjot Kaur. All rights reserved.</p>
            </footer>
        </div>
    );
}
