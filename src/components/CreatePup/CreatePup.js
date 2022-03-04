import React, { useState } from "react";
// import firebase from "../../utilities/firebase";
import database from "../../utilities/firebase";
import DogIcon from "../../images/dog";
import "./CreatePup.css";
import "../PupCard/PupCard.css";
// import Calculator from "../Form/Form";
// import ModalApp from "../ModalApp/ModalApp";

function CreatePup() {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [color, setColor] = useState("");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const background = "default-background";
  const createPupObj = () => {
    const pupRef = database().ref("name-this-dog");
    const pup = {
      name,
      color,
      background,
    };
    pupRef.push(pup);
    alert("yay!");
    setName("");
    setColor("");
  };
  return (
    <div className="create-pup ">
      <div className="full-form-container box-shadow">
        <div className="form-input-container">
          <div className="form-title">NAME</div>
          <div className="form-fragments">
            <fragment className="input-fragment name-input">
              <span>Hello! My name is</span>
              <label className="name-input-label">
                <input
                  type="text"
                  placeholder="Name this dog:"
                  aria-label="Enter a name for this dog"
                  onChange={handleNameChange}
                  value={name}
                />
              </label>
            </fragment>
            <fragment className="input-fragment color-input">
              <span>I am the color</span>
              <label className="color-input-label">
                <input
                  type="color"
                  placeholder="Pick a color for this dog"
                  aria-label="Pick a color for this dog"
                  onChange={handleColorChange}
                  value={color}
                />
              </label>
            </fragment>
            <fragment className="button-fragment button-submit">
              <button className="pup-button" onClick={createPupObj}>
                Add to list
              </button>
            </fragment>
          </div>
        </div>
        <fragment className="form-preview-container grid-item">
          <div className="dog-icon-preview floating">
            <DogIcon fill={color} className="dog-icon dog-icon-top" />
          </div>
        </fragment>
      </div>
    </div>
  );
}

export default CreatePup;
