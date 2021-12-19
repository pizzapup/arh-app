import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";
import styles from "./formComp.css";
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
    <div className="formComp-holder">
      <Form>
        <Row>
          <Col sm={8}>
            <Form.Control
              placeholder="Name this dog:"
              aria-label="Enter name"
              aria-describedby="basic-addon2"
              onChange={handleNameChange}
              value={name}
            />
          </Col>
          <Col sm={12}>
            <Form.Control
              type="color"
              class="form-control form-control-color"
              id="exampleColorInput"
              value={color}
              title="Choose your color"
              onChange={handleColorChange}
            />
          </Col>
        </Row>
      </Form>
      <Button variant="primary" id="button-addon2" onClick={createPup}>
        Add to list
      </Button>
    </div>
  );
}

export default FormComp;
