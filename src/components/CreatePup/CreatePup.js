import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import DogIcon from "../../images/dog";
import "./CreatePup.css";

function CreatePup() {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [color, setColor] = useState("");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const createPup = () => {
    const pupRef = firebase.database().ref("name-this-dog");
    const pup = {
      name,
      color,
      background: "default-background",
    };
    pupRef.push(pup);
  };
  return (
    <div className="create-pup">
      <div className="dog-icon-container">
        <DogIcon fill={color} className="dog-icon floating" />
      </div>
      <div>
        <input
          type="text"
          placeholder="Name this dog:"
          aria-label="Enter a name for this dog"
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <div>
        <input
          type="color"
          placeholder="Pick a color for this dog"
          aria-label="Pick a color for this dog"
          onChange={handleColorChange}
          value={color}
        />
      </div>
      <button onClick={createPup}>Add to list</button>
    </div>
  );
}

export default CreatePup;
