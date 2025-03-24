import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

function Contact({ darkMode }) {
  return (
    <section id="contact" className="py-5">
      <h2 className="text-center mb-4">Get In Touch</h2>
      <Row>
        <Col lg={5} className="mb-4 mb-lg-0">
          <div className={`p-4 rounded ${darkMode ? "bg-secondary" : "bg-light"}`}>
            <h4>Contact Information</h4>
            <p>Feel free to contact me for any project inquiries or collaboration opportunities.</p>
            <div className="mb-3">
              <strong>Email:</strong> johndoe@example.com
            </div>
            <div className="mb-3">
              <strong>Phone:</strong> +1 (123) 456-7890
            </div>
            <div className="mb-3">
              <strong>Location:</strong> San Francisco, CA
            </div>
            <div className="mt-4">
              <h5>Follow Me</h5>
              <div className="d-flex gap-3">
                <Button variant="outline-primary" href="https://linkedin.com" target="_blank">LinkedIn</Button>
                <Button variant="outline-dark" href="https://github.com" target="_blank">GitHub</Button>
                <Button variant="outline-info" href="https://twitter.com" target="_blank">Twitter</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={7}>
          <Form className={`p-4 rounded ${darkMode ? "bg-secondary" : "bg-light"}`} onSubmit={(e) => e.preventDefault()}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your Message" />
            </Form.Group>
            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
}

export default Contact;