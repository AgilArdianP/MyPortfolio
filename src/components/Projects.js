import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

function Projects({ darkMode }) {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-featured online store built with React, Node.js, and MongoDB with payment integration.",
      image: "/images/Projects1.png",
      demoLink: "https://multijayat.github.io/Servis/",
      codeLink: "https://github.com/MultiJayaT/Servis.git",
      technologies: "React, Node.js, MongoDB"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task manager with real-time updates using React, Socket.io and Express.",
      image: "/images/Projects2.png",
      //demoLink: "#",
      codeLink: "#",
      technologies: "React, Express, Socket.io"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data and forecasts using external APIs.",
      image: "/images/project3.jpg",
      demoLink: "#",
      codeLink: "#",
      technologies: "React, OpenWeather API"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <h2 className="text-center mb-4">Recent Projects</h2>
      <Row>
        {projects.map(project => (
          <Col md={4} className="mb-4" key={project.id}>
            <Card className={darkMode ? "bg-dark text-white border-secondary" : ""}>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="primary" size="sm" href={project.demoLink}>View Demo</Button>
                  <Button variant="outline-secondary" size="sm" href={project.codeLink}>Source Code</Button>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                <small className={darkMode ? "text-light" : "text-muted"}>{project.technologies}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="outline-primary">See More Projects</Button>
      </div>
    </section>
  );
}

export default Projects;