/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./FormScreens.css";
import FormName from "./FormName";
import FormColor from "./FormColor";
// import FormFinal from "./FormFinal";
import FormSubmit from "./FormSubmit";
import firebase from "../../utilities/firebase";
import PupGallery from "../../components/PupGallery/PupGallery";
function FormHome() {
  const [step, setStep] = useState(1);
  const next = () => {
    setStep(step + 1);
  };
  const back = () => {
    setStep(step - 1);
  };
  const [dogName, setDogName] = useState("no name yet!");
  const handleDogNameChange = (dogName) => {
    setDogName(dogName);
  };
  const [dogColor, setDogColor] = useState("");
  const handleDogColorChange = (dogColor) => {
    setDogColor(dogColor);
  };
  const goNext = () => {
    setStep(step + 1);
  };
  switch (step) {
    case 1:
      return <button onClick={goNext}>start</button>;
    case 2:
      return (
        <FormName
          dogName={dogName}
          handleDogNameChange={handleDogNameChange}
          next={next}
        />
      );
    case 3:
      return (
        <FormColor
          dogColor={dogColor}
          handleDogColorChange={handleDogColorChange}
          next={next}
          back={back}
        />
      );
    case 4:
      return <FormSubmit dogName={dogName} dogColor={dogColor} next={next} />;
    default:
      return <p>error</p>;
  }
}

export default FormHome;
