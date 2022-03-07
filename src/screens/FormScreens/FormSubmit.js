import "./FormScreens.css";
import React from "react";
import firebase from "../../utilities/firebase";
import PupGallery from "../../components/PupGallery/PupGallery";

function FormSubmit(props) {
  //   const { dogName, dogColor, background, back } = props;
  //   const pupRef = firebase.database().ref("name-this-dog");

  const formSubmit = () => {
    const pupRef = firebase.database().ref("name-this-dog");

    const pup = {
      dogName: props.dogName,
      dogColor: props.dogColor,
    };
    pupRef.push(pup);
  };
  //   const handleFormSubmit = () => {
  //     const pup = {
  //       dogName: dogName,
  //       dogColor: dogColor,
  //       background: background,
  //     };
  //     pupRef.push(pup);
  //   };
  return (
    <div className="form-home-container">
      <p>Dog Name: {props.dogName}</p>
      <p>Dog Color: {props.dogColor}</p>
      <button onClick={formSubmit}>send to firebase!</button>
      <PupGallery />
    </div>
  );
}

export default FormSubmit;
