import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <h1>About the Author</h1>
          
          <div className="author-info">
            <div className="author-text">
              <h2>Kevin Kennedy</h2>
              <p className="author-description">
                Welcome to my corner of the internet! I'm Kevin Kennedy, a passionate developer 
                and lifelong learner who loves sharing thoughts, experiences, and insights through writing.
              </p>
              
              <h3>What I Do</h3>
              <p>
                I'm a software developer with a passion for creating meaningful digital experiences. 
                My journey in technology has taken me through various programming languages, frameworks, 
                and methodologies, and I'm always excited to learn something new.
              </p>
              
              <h3>Why I Write</h3>
              <p>
                Writing helps me process my thoughts and share knowledge with others. Whether it's 
                technical tutorials, personal reflections, or random musings, I believe that sharing 
                our experiences makes us all better developers and human beings.
              </p>
              
              <h3>Get in Touch</h3>
              <p>
                I love connecting with fellow developers and readers. Feel free to reach out if you 
                have questions, want to collaborate, or just want to chat about technology, life, 
                or anything in between.
              </p>
              
              <div className="contact-info">
                <p><strong>Email:</strong> kevin@example.com</p>
                <p><strong>GitHub:</strong> @kevinkennedy</p>
                <p><strong>LinkedIn:</strong> /in/kevinkennedy</p>
              </div>
            </div>
          </div>
          
          <div className="back-to-blog">
            <Link to="/" className="back-link">← Back to Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;