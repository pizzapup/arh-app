import "./FormScreens.css";
import { React, useState } from "react";
function FormColor(props) {
  const [localValue, setLocalValue] = useState("#10b56c");
  const handleLocalChange = (e) => {
    setLocalValue(e.target.value);
  };
  return (
    <div className="form-home-container">
      <div>
        <p>original value: {props.dogColor}</p>
        <p>Local Value: {localValue}</p>
        <p>
          <input type="color" onChange={handleLocalChange} value={localValue} />
          <button onClick={() => props.handleDogColorChange(localValue)}>
            click to submit
          </button>
        </p>
        <button onClick={props.back}>Back</button>
        <button onClick={props.next}>Next</button>
      </div>
    </div>
  );
}

export default FormColor;
