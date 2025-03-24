import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import komponen
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"} style={{minHeight: "100vh"}}>
      <NavbarComponent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Container>
        <Hero />
        <About />
        <Skills />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </Container>
      
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;