import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

function Skills() {
  const frontendSkills = [
    { name: "React.js", percentage: 90 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "Bootstrap", percentage: 80 }
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 85 },
    { name: "Express.js", percentage: 80 },
    { name: "MongoDB", percentage: 75 },
    { name: "SQL", percentage: 70 }
  ];

  return (
    <section id="skills" className="py-5">
      <h2 className="text-center mb-4">My Skills</h2>
      <Row>
        <Col md={6}>
          <h4>Frontend</h4>
          <div className="mb-3">
            {frontendSkills.map((skill, index) => (
              <div key={index}>
                <div className="d-flex justify-content-between">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <ProgressBar 
                  now={skill.percentage} 
                  variant="success" 
                  className={index < frontendSkills.length - 1 ? "mb-3" : ""} 
                />
              </div>
            ))}
          </div>
        </Col>
        
        <Col md={6}>
          <h4>Backend</h4>
          <div className="mb-3">
            {backendSkills.map((skill, index) => (
              <div key={index}>
                <div className="d-flex justify-content-between">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <ProgressBar 
                  now={skill.percentage} 
                  variant="info" 
                  className={index < backendSkills.length - 1 ? "mb-3" : ""} 
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Skills;