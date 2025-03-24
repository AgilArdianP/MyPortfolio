import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

function Projects({ darkMode }) {
  const projects = [
    {
      id: 1,
      title: "Company Profle",
      description: "Company profile engaged in IT equipment repair services",
      image: "/images/Projects1.png",
      demoLink: "https://multijayat.github.io/Servis/",
      codeLink: "https://github.com/MultiJayaT/Servis.git",
      technologies: "HTML, CSS, JavaScript"
    },
    {
      id: 2,
      title: "POS Application",
      description: "an application for managing store transactions that is very flexible",
      image: "/images/Projects2.png",
      demoLink: "#",
      codeLink: "https://github.com/MultiJayaT/POS-APP.git",
      technologies: "CodeIgniter, MYSQL, Bootstrap"
    },
    {
      id: 3,
      title: "ERP Application",
      description: "an application to manage company data (products, suppliers, members, staff).",
      image: "/images/project3.jpg",
      demoLink: "#",
      codeLink: "#",
      technologies: "Express.js, MySQL, React.js, TailwindCss"
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