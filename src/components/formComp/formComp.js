import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import styles from "./formComp.css";
import DogIcon from "../../images/dog";
import { Form, Row, Col, Button, FormLabel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormComp() {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [color, setColor] = useState("");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const createPup = () => {
    const pupRef = firebase.database().ref("arh-final");
    const pup = {
      name,
      color,
      somewhere: "somewhereDefault",
    };
    pupRef.push(pup);
  };

  return (
    <div>
      <Form>
        <Row className="flex-sm-row-reverse">
          <Col sm={12} md={6} className="align-self-center">
            <DogIcon fill={color} />
          </Col>
          <Col sm={12} md={6} className="align-self-center">
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Name this dog:"
                  aria-label="Enter name"
                  aria-describedby="basic-addon2"
                  onChange={handleNameChange}
                  value={name}
                />
              </Col>

              <Col>
                <FormLabel className="pupColorLabel">
                  <FontAwesomeIcon icon="paint-roller" />
                  <Form.Control
                    type="color"
                    className="form-control form-control-color"
                    id="pupColorInput"
                    title="Choose your color"
                    aria-label="Choose Color"
                    onChange={handleColorChange}
                    value={color}
                  />
                </FormLabel>
              </Col>
            </Row>
            <Row>
              <Button variant="primary" id="button-addon2" onClick={createPup}>
                Add to list
              </Button>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormComp;
