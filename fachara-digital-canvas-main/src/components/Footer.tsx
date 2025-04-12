
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkNavy py-6 text-center">
      <div className="container mx-auto">
        <p className="text-lightGray text-sm">
          © {currentYear} | Designed & Built by Raj Fachara
        </p>
      </div>
    </footer>
  );
};

export default Footer;
