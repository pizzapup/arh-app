import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import {
  Form,
  Row,
  Col,
  Button,
  // InputGroup,
  // FormControl,
  // FloatingLabel,
} from "react-bootstrap";
import styles from "./formComp.css";
import DogIcon from "../../images/dog";
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
    };
    pupRef.push(pup);
  };

  return (
    <div className="container-fluid formComp-holder">
      <Form>
        <Row>
          <Col>
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
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="color"
                  class="form-control form-control-color"
                  id="pupColorInput"
                  title="Choose your color"
                  aria-label="Choose Color"
                  onChange={handleColorChange}
                  value={color}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  id="button-addon2"
                  onClick={createPup}
                >
                  Add to list
                </Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <DogIcon fill={color} />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormComp;
