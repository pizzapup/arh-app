import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import DogIcon from "../../images/DogIcon/DogIcon";
import "./CreatePup.css";
import "../PupCard/PupCard.css";

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
    <div className="create-pup">
      <h1 className="form-title">Name this dog:</h1>
      <fragment className="name-input-fragment">
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
      <fragment className="color-input-fragment">
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
      <fragment className="form-button-fragment">
        <button className="pup-button" onClick={createPupObj}>
          Add to list
        </button>
      </fragment>
      <fragment className="form-preview-fragment">
        <h2 className="form-preview-title">{name}hi</h2>
        <DogIcon fill={color} className="dog-icon-preview floating" />
      </fragment>
    </div>
  );
}

export default CreatePup;
