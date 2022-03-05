/* eslint-disable no-unused-vars */
import React from "react";
import firebase from "../../utilities/firebase";
import "../PupCard/PupCard.css";
import { Button, Card } from "react-bootstrap";

function PupTravel({ pup }) {
  const goHere = (e) => {
    const pupRef = firebase.database().ref("name-this-dog").child(pup.id);
    pupRef.update({
      background: e.target.value,
    });
  };
  const deletePup = () => {
    const pupRef = firebase.database().ref("name-this-dog").child(pup.id);
    pupRef.remove();
  };
  return (
    <Card className="PupTravel card-travel-section">
      <Button
        size="sm"
        className="pup-button travel-button"
        onClick={goHere}
        value="somewhereDefault"
      >
        Go Here
      </Button>
      <Button
        variant="secondary"
        size="sm"
        className="pup-button travel-button"
        onClick={deletePup}
      >
        Go Home!
      </Button>
    </Card>
  );
}
export default PupTravel;
