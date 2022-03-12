import { React, useState } from "react";
import "./FormScreens.css";
import DogIcon from "../../images/dog";
// import { Fade } from "react-awesome-reveal";
import { FloatingLabel, Form } from "react-bootstrap";
function FormName(props) {
  const [localValue, setLocalValue] = useState("");
  const handleLocalChange = (e) => {
    setLocalValue(e.target.value);
  };
  const handleNextClick = () => {
    alert(`whoohoo! Welcome to the pack: ${localValue} !`);

    props.handleDogNameChange(localValue);
  };
  return (
    <div className="form-comp">
      <div className="form-container">
        <div className="form-title txt-lg">NAME THIS DOG</div>
        <div className="form-subtitle txt-md">Time to name your new friend</div>
        <div className="form-text txt-rg">make it a fun one!</div>
        <div className="form-main-content txt-rg">
          <div className="input-container">
            <div className="display-content">Name: {localValue}</div>
            <FloatingLabel
              controlId="floatingTextarea"
              label="dog name"
              className="mb-3"
            >
              <Form.Control
                placeholder="enter dog name here :)"
                type="text"
                onChange={handleLocalChange}
                value={localValue}
              />
            </FloatingLabel>
          </div>
          <button
            className="btn-custom-dark btn-left"
            onClick={handleNextClick}
          >
            NEXT
          </button>
        </div>
      </div>
      <div className="preview-container">
        <DogIcon />
      </div>
    </div>
  );
}

export default FormName;
