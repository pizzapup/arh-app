/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import DogIcon from "../../images/dog";
import "./CreatePup.css";
import { SwatchesPicker } from "react-color";
import ReactColorPicker from "@radial-color-picker/react-color-picker";
import "@radial-color-picker/react-color-picker/dist/react-color-picker.min.css";

import {
  InputGroup,
  Col,
  Form,
  Container,
  Card,
  Button,
} from "react-bootstrap";
import ColorPick from "./ColorPick";
function CreatePup() {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  // const [color, setColor] = useState("");
  const [color, setColor] = React.useState({
    hue: 200,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const onInput = (hue) => {
    setColor({ ...color, hue });
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
          <div>Name this dog:</div>
          <label className="name-input-label">
            <input
              className="custom-input-bite custom-input-text"
              type="text"
              placeholder="Name this dog:"
              aria-label="Enter a name for this dog"
              onChange={handleNameChange}
              value={name}
            />
          </label>
          <div className="color-input-div">
            <label className="color-input-label">
              {/* <input
                className="custom-input-bite "
                type="color"
                placeholder="Pick a color for this dog"
                aria-label="Pick a color for this dog"
                onChange={handleColorChange}
                value={color}
              /> */}
              <ReactColorPicker {...color} onInput={onInput} />
            </label>
          </div>
          <div className="form-button-div">
            <Button bsPrefix="btn-custom-dark" onClick={createPupObj}>
              Add to list
            </Button>
          </div>
        </div>
        <Card style={{ width: "18rem" }}>
          <h2 className="form-preview-title">{name}</h2>
          <DogIcon fill={color} className="dog-icon-preview floating" />
        </Card>
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
