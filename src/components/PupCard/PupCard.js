/* eslint-disable no-unused-vars */
import React from "react";
import firebase from "../../utilities/firebase";
import styles from "./PupCard.css";
import DogIcon from "../../images/dog";
import PupTravel from "../PupTravel/PupTravel";

function PupCard({ pup }) {
  // toDo
  return (
    <div className="pup-card box-shadow">
      <div className="pup-card-background" id={pup.background}>
        <DogIcon fill={pup.color} className="dog-icon card-svg" />
        <div className="pup-card-text">
          <div className="pup-card-title">{pup.name}</div>
          <div>
            {pup.name} is this color: {pup.color}
          </div>
          <PupTravel pup={pup} />
        </div>
      </div>
    </div>
  );
}
export default PupCard;
