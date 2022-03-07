import { React, useState } from "react";
import "./FormScreens.css";
function FormName(props) {
  const [localValue, setLocalValue] = useState("");
  const handleLocalChange = (e) => {
    setLocalValue(e.target.value);
  };
  return (
    <div className="form-home-container">
      <div>
        <p>original value: {props.dogName}</p>
        <p>local value: {localValue}</p>,
        <p>
          <input
            type="text"
            onChange={handleLocalChange}
            value={localValue}
            placeholder="enter dog name :)"
          />
          <button onClick={() => props.handleDogNameChange(localValue)}>
            click to submit
          </button>
        </p>
        <button onClick={props.back}>Back</button>
        <button onClick={props.next}>Next</button>
      </div>
    </div>
  );
}

export default FormName;
