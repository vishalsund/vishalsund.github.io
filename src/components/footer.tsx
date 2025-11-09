// src/components/footer.tsx

import React from 'react';
// Import the icons
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'; 

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // ⬅️ REPLACE with your actual URLs/Email
  const githubUrl = "https://github.com/vishalsund"; 
  const linkedinUrl = "https://www.linkedin.com/in/vishal-sund/";
  const emailAddress = "mailto:vishals@utexas.edu"; 

  return (
    <footer className="mt-auto border-t border-custom-light-border-primary dark:border-custom-dark-border-primary bg-custom-light-bg-tertiary dark:bg-custom-dark-bg-tertiary text-custom-light-text-tertiary dark:text-custom-dark-text-tertiary transition-all duration-200 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm space-y-2">
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6"> {/* Increased space-x for three items */}
          
          {/* GitHub Link with Icon */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-custom-light-text-primary dark:hover:text-custom-dark-text-primary transition-colors duration-200 flex items-center"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5 mr-1" />
            GitHub
          </a>

          {/* LinkedIn Link with Icon */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-custom-light-text-primary dark:hover:text-custom-dark-text-primary transition-colors duration-200 flex items-center"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5 mr-1" />
            LinkedIn
          </a>
            
          {/* Email Link with Icon */}
          <a
            href={`mailto:${emailAddress}`}
            className="hover:text-custom-light-text-primary dark:hover:text-custom-dark-text-primary transition-colors duration-200 flex items-center"
            aria-label="Email Address"
          >
            <FaEnvelope className="w-5 h-5 mr-1" />
            Email
          </a>
        </div>

        {/* Copyright Notice */}
        <p>
          &copy; {currentYear} <strong>Vishal Sundaram</strong>. All rights reserved.
        </p>

      </div>
    </footer>
  );
};