import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import FAQToggle from './FAQToggle';
import faq from '../../../data/faq';

const FAQ = () => (
  <section className="bg-white">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-9">
          <h3 className="h2">Frequently Asked Questions</h3>
          <Accordion>
            {faq.map((question, idx) => (
              <div className="card card-sm card-body hover-shadow-sm mb-0 mt-0">
                <FAQToggle eventKey={idx + 1}>{question.title}</FAQToggle>
                <Accordion.Collapse eventKey={idx + 1}>
                  <Card.Body className="p-2">{question.body}</Card.Body>
                </Accordion.Collapse>
              </div>
            ))}
          </Accordion>
          <p className="mt-2">Still have questions? <a href="#">Get in touch</a></p>
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
