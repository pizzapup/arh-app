import "./FormScreens.css";
import React from "react";
import firebase from "../../utilities/firebase";
import DogIcon from "../../images/dog";

// import PupGallery from "../../components/PupGallery/PupGallery";

function FormSubmit(props) {
  const formSubmit = () => {
    const pupRef = firebase.database().ref("name-this-dog");
    const pup = {
      dogName: props.dogName,
      dogColor: props.dogColor,
    };
    pupRef.push(pup);
  };

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: "19",
    elementCount: 70,
    dragFriction: 0.12,
    duration: "4680",
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <>
      <div className="form-comp">
        <div className="form-container">
          <div className="form-title txt-lg">NAME THIS DOG</div>
          <div className="form-subtitle txt-md">
            Welcome! subtitle text goes here
          </div>
          <div className="form-text-rg txt-rg">
            main content information goes here
          </div>
          <div className="form-main-content txt-rg">
            <div className="submit-content-div name-div">
              <div>Dog Name: {props.dogName}</div>
              <button className="btn-custom-edit" onClick={props.editName}>
                <span className="edit-text">Edit Name</span>
              </button>
            </div>

            <div className="submit-content-div color-div">
              <div>Dog Color: {props.dogColor}</div>
              <button className="btn-custom-edit" onClick={props.editColor}>
                <span className="edit-text">Edit Color</span>
              </button>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-custom-dark" onClick={props.startOver}>
              Start OVer
            </button>
            <button className="btn-custom-dark" onClick={formSubmit}>
              send to the dog park!
            </button>
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
