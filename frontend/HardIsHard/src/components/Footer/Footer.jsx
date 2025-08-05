import React from 'react';
// components
// css
import './Footer.css'
// image

const Footer = () => (
  <footer className="bg-dark text-center text-white py-3">
    <small>&copy; {new Date().getFullYear()} HardisHard</small>
  </footer>
);

export default Footer;
