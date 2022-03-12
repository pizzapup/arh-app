import "./FormScreens.css";
import { React, useState } from "react";
import firebase from "../../utilities/firebase";
import DogIcon from "../../images/dog";
import { Fade } from "react-awesome-reveal";
import { Toast, Button } from "react-bootstrap";
function FormSubmit(props) {
  const formSubmit = () => {
    const pupRef = firebase.database().ref("name-this-dog");
    const pup = {
      dogName: props.dogName,
      dogColor: props.dogColor,
    };
    pupRef.push(pup);
    alert(
      "Yay!! Thank you for naming this dog! Scroll down to find {props.dogName} and friends"
    );
  };

  return (
    <>
      <div className="form-comp">
        <div className="form-container">
          <div className="form-title txt-lg">NAME THIS DOG</div>
          <div className="form-subtitle txt-md">
            Love it! Lets make things official
          </div>
          <div className="form-text-rg txt-rg">
            everything look good? click on the submit button to make things
            official !
          </div>
          <div className="form-main-content txt-rg">
            <div className="submit-content-div">
              <div>Dog Name: {props.dogName}</div>
              <div>Dog Color: {props.dogColor}</div>
              <button
                className="btn-custom-dark submit-btn"
                onClick={formSubmit}
              >
                submit!
              </button>
            </div>
          </div>
        </div>

        <div className="preview-container">
          <DogIcon className="floating" fill={props.dogColor} />
        </div>
      </div>
    </>
  );
}

export default FormSubmit;
