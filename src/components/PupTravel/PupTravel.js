/* eslint-disable no-unused-vars */
import React from "react";
import firebase from "../../utilities/firebase";
import "../PupCard/PupCard.css";
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
    <div className="PupTravel card-travel-section">
      <button
        className="pup-button travel-button"
        onClick={goHere}
        value="somewhereDefault"
      >
        Go Here
      </button>
      <button className="pup-button travel-button" onClick={deletePup}>
        Go Home!
      </button>
    </div>
  );
}
export default PupTravel;
