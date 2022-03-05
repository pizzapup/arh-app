/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import DogIcon from "../../images/dog";
import "./CreatePup.css";
import {
  InputGroup,
  Col,
  Form,
  Container,
  Card,
  Button,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";

function CreatePup() {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [color, setColor] = useState("#10b56c");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const background = "default-background";
  const createPupObj = () => {
    const pupRef = firebase.database().ref("name-this-dog");
    const pup = {
      name,
      color,
      background,
    };
    pupRef.push(pup);
    setName("");
    setColor("");
  };
  return (
    <div className="create-pup-container">
      <div className="create-pup">
        <div className="form-side">
          <Card.Title>Name this dog:</Card.Title>
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">name:</InputGroup.Text>
              <FormControl
                onChange={handleNameChange}
                value={name}
                placeholder="dog name"
                aria-label="dog name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">color:</InputGroup.Text>
              <FormControl
                type="color"
                onChange={handleColorChange}
                value={color}
                placeholder="dog color"
                aria-label="dog color"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button bsPrefix="btn-custom-dark mb-3" onClick={createPupObj}>
              Add to list
            </Button>
          </Card.Body>
        </div>
        <Container style={{ width: "18rem" }}>
          <h2 className="form-preview-title">{name}</h2>
          <DogIcon fill={color} className="dog-icon-preview floating" />
        </Container>
      </div>
    </div>
  );
}

export default CreatePup;

// <div className="create-pup">
// <h1 className="form-title">Name this dog:</h1>
// <div className="name-input-div">
//   <label className="name-input-label">
//     <input
//       type="text"
//       placeholder="Name this dog:"
//       aria-label="Enter a name for this dog"
//       onChange={handleNameChange}
//       value={name}
//     />
//   </label>
// </div>
// <div className="color-input-div">
//   <label className="color-input-label">
//     <input
//       type="color"
//       placeholder="Pick a color for this dog"
//       aria-label="Pick a color for this dog"
//       onChange={handleColorChange}
//       value={color}
//     />
//   </label>
// </div>
// <div className="form-button-div">
//   <button className="pup-button" onClick={createPupObj}>
//     Add to list
//   </button>
// </div>
// <div className="form-preview-div">
//   <h2 className="form-preview-title">{name}hi</h2>
//   <DogIcon fill={color} className="dog-icon-preview floating" />
// </div>
// </div>
