import { render } from "@testing-library/react";
import React from "react";
import { Card } from "react-bootstrap";
import firebase from "../../utilities/firebase";
import StepFinal from "./StepFinal";

const Final = ({ values }) => {
  const { userName, dogName, dogColor, dogBackground } = values;
  const createPupObj = () => {
    alert("button clicked");
    const pupRef = firebase.database().ref("name-this-dog");
    const pup = {
      userName: userName,
      dogName: dogName,
      dogColor: dogColor,
      dogBackground: dogBackground,
    };
    pupRef.push(pup);
    render(<StepFinal props={pup} />);
    // alert("yay!" + dogName + "has been added to the gallery :-)");
  };
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>First Name :</strong> {userName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {dogName}{" "}
          </p>
          <p>
            <strong>dogColor :</strong> {dogColor}{" "}
          </p>
          <p>
            <strong>dogBackground :</strong> {dogBackground}{" "}
          </p>
          <button className="pup-button" onClick={createPupObj}>
            Add to list
          </button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
