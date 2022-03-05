/* eslint-disable no-unused-vars */
import React from "react";
import firebase from "../../utilities/firebase";
import styles from "./PupCard.css";
import PupTravel from "../PupTravel/PupTravel";
import DogIcon from "../../images/dog";
import { Container, Card, Button } from "react-bootstrap";

function PupCard({ pup }) {
  // toDo
  return (
    <div className="pup-card">
      <div className="pup-card-background" id={pup.background}>
        <DogIcon fill={pup.color} class-name="dog-icon card-svg}" />
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
