import React, { useState } from "react";
import { Row, Col, Container, Form, Card, Button } from "react-bootstrap";
import DogIcon from "../../images/dog";

// creating functional component ans getting props from FormComp.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  //   }
  return (
    <Container className="h-100">
      <Card className="h-100">
        <Card.Body className=" d-flex">
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Hello, what is your name?</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="userName"
                defaultValue={values.userName}
                type="text"
                placeholder="your name"
                onChange={handleFormData("userName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>What would you like to name this dog?</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="dogName"
                defaultValue={values.dogName}
                type="text"
                placeholder="dog name"
                onChange={handleFormData("dogName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
          <div className="dog-icon-preview floating">
            <DogIcon className="dog-icon dog-icon-top" />
            {/* <DogIcon fill={color} className="dog-icon dog-icon-top" /> */}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StepOne;
