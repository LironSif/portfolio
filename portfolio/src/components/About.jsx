

import React from 'react';
import './About.css'; 
const About = () => {
  return (
    <div className="about-container">
      <h3 className="about-heading">8+ MINUTES OF EXPERIENCE IN FULL STACK DEVELOPMENT</h3>
      <div className="about-content">
        <div className="about-left">
          <p>Master of Business Administration in Digital innovation and future of business at SIFADOTEC.</p>
          <p>Founder and teacher at Curso de Webflow. The first Webflow course in Brazil with more than 300 students.</p>
          <p>Worked with big companies like Dropbox, GitHub, Banco do Brasil, and Maven Clinic (one of the most innovative companies by FastCompany).</p>
          <p>Experienced with SEO, Google Analytics and Google Tag Manager.</p>
        </div>
        <div className="about-right">
          <p>Partner at Finsweet for 3 years, one of the biggest agencies specializing in Webflow in the world.</p>
          <p>Specialized in Digital Marketing, designing and developing pages that sold more than 10 million dollars in Online Courses in Brazil.</p>
          <p>Creator and Certified developer on Client-First naming system used to develop clean and organized websites.</p>
          <p>Experienced with Motion graphics, After effects, Lottie files, and Webflow Interactions.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
