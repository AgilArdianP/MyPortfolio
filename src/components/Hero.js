import React from 'react';
import { Button } from 'react-bootstrap';

function Hero() {
  return (
    <section id="home" className="py-5 text-center">
      <h1 className="display-4">Agil Ardian Pratama</h1>
      <h2 className="lead mb-4">Full Stack Web Developer</h2>
      <p className="mb-5">Building creative web solutions with modern technologies</p>
      <Button variant="primary" href="#contact" className="me-2">Contact Me</Button>
      <Button variant="outline-primary" href="#projects">View My Work</Button>
    </section>
  );
}

export default Hero;