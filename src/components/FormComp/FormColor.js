import "./FormScreens.css";
import { React, useState } from "react";
import DogIcon from "../../images/dog";
function FormColor(props) {
  const handleNextClick = () => {
    alert(`whoohoo! Welcome to the pack: ${localValue} !`);

    props.handleDogColorChange(localValue);
  };
  const [localValue, setLocalValue] = useState("#000");
  const handleLocalChange = (e) => {
    setLocalValue(e.target.value);
  };

  return (
    <div className="form-comp">
      <div className="form-container">
        <div className="form-title txt-lg">NAME THIS DOG</div>
        <div className="form-subtitle txt-md">
          What color should {props.dogName} be?
        </div>
        <div className="form-text txt-rg">get inspired!</div>
        <div className="form-main-content txt-rg">
          <div className="input-container">
            <div className="display-content">Color: {localValue}</div>
            <input
              type="color"
              onChange={handleLocalChange}
              value={localValue}
            />
          </div>
          <div className="btn-container">
            <button className="btn-custom-dark" onClick={props.back}>
              Back
            </button>
            <button className="btn-custom-dark" onClick={handleNextClick}>
              NEXT
            </button>
          </div>
        </div>
      </div>
      <div className="preview-container">
        <DogIcon className="floating" fill={localValue} />
      </div>
    </div>
  );
}

export default FormColor;
