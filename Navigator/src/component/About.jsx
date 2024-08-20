// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <div className='about'>
           <div style={{marginRight:"70%"}}>
           <h1>About Our Application</h1>
            <p>
                Welcome to our product catalog application!
                <br /> We are dedicated to providing users with a comprehensive and user-friendly platform 
                to explore a diverse range of products. 
                <br />Whether you're on the hunt for the latest gadgets, home essentials, or unique gifts, 
                our application is designed to meet your needs.
            </p>

           </div>


            
            <div style={{marginLeft:"70%",marginBottom:"58px"}}>
            <h2>Key Features</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><strong>Extensive Product Catalog:</strong> Access a wide variety of products across different categories.</li>
                <li><strong>User-Friendly Navigation:</strong> Easily find what you're looking for with our simple and clean layout.</li>
                <li><strong>Detailed Product Information:</strong> Get in-depth descriptions, specifications, and images for each product.</li>
                <li><strong>Personalized Experience:</strong> Create an account to save your favorite products and manage your preferences.</li>
                <li><strong>Secure Access:</strong> Enjoy peace of mind with our secure login system, ensuring your information is safe.</li>
            </ul>
            </div>

            

            <div>
            <h2>Join Us Today!</h2>
            <p>
                Ready to start exploring?
                <br /> Sign up today to unlock the full potential of our product catalog and discover products that fit 
                your lifestyle. 
                <br />We can't wait to have you on board!
            </p>
            </div>
        </div>
    );
};

export default About;