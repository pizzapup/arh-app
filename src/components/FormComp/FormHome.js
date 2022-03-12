/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./FormScreens.css";
import FormStart from "./FormStart";
import FormName from "./FormName";
import FormColor from "./FormColor";
import FormSubmit from "./FormSubmit";
import firebase from "../../utilities/firebase";
import PupGallery from "../PupGallery/PupGallery";
function FormHome() {
  const [step, setStep] = useState(1);
  const next = () => {
    setStep(step + 1);
  };
  const back = () => {
    setStep(step - 1);
  };
  const editColor = () => {
    setStep(step - 1);
  };
  const editName = () => {
    setStep(step - 2);
  };
  const startOver = () => {
    setStep(step - 3);
  };
  const [dogName, setDogName] = useState("no name yet!");
  const handleDogNameChange = (dogName) => {
    setDogName(dogName);
    setStep(step + 1);
  };
  const [dogColor, setDogColor] = useState("#000");
  const handleDogColorChange = (dogColor) => {
    setDogColor(dogColor);
    setStep(step + 1);
  };
  const goNext = () => {
    setStep(step + 1);
  };
  switch (step) {
    case 1:
      return <FormStart next={next} />;

    case 2:
      return (
        <FormName
          dogName={dogName}
          handleDogNameChange={handleDogNameChange}
          next={next}
          back={back}
        />
      );
    case 3:
      return (
        <FormColor
          dogColor={dogColor}
          dogName={dogName}
          handleDogColorChange={handleDogColorChange}
          next={next}
          back={back}
        />
      );
    case 4:
      return (
        <>
          <FormSubmit
            dogName={dogName}
            dogColor={dogColor}
            next={next}
            editColor={editColor}
            editName={editName}
          />
          <PupGallery />
        </>
      );
    case 5:
      return <PupGallery />;
    default:
      return <p>error</p>;
  }
}

export default FormHome;
