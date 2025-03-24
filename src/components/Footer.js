import React from 'react';
import { Container } from 'react-bootstrap';

function Footer({ darkMode }) {
  return (
    <footer className={`py-4 mt-5 ${darkMode ? "bg-dark text-white border-top border-secondary" : "bg-light border-top"}`}>
      <Container className="text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} John Doe | Portfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;