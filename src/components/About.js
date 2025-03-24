import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-5">
      <h2 className="text-center mb-4">About Me</h2>
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <img 
            src="/images/Foto 4x6.jpeg" 
            alt="Profile" 
            className="img-fluid rounded-circle" 
            style={{maxWidth: "80%"}}
          />
        </Col>
        <Col md={8}>
          <p>
            Hello! I'm a passionate Full Stack Developer with expertise in React.js, Node.js, and modern web technologies.
            I have over 5 years of experience building responsive and user-friendly web applications for clients across various industries.
          </p>
          <p>
            My approach to web development focuses on creating clean, efficient, and maintainable code while delivering exceptional user experiences.
            I'm constantly learning new technologies and techniques to stay at the forefront of web development.
          </p>
          <div className="mt-4">
            <Button variant="outline-primary" className="me-2">Download Resume</Button>
            <Button variant="outline-secondary" href="#contact">Get in Touch</Button>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default About;