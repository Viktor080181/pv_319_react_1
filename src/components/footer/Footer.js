import './Footer.css';

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
      <p>&copy; {currentYear} Все права защищены.</p>
    </footer>
  );
};

export default Footer;
