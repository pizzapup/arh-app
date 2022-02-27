/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import firebase from "../../utilities/firebase";
import Pup from "../CreatePup/CreatePup";
import styles from "./PupCard.css";
function PupCard() {
  const [pupCard, setPupCard] = useState();
  useEffect(() => {
    const pupRef = firebase.database().ref("name-this-dog");
    pupRef.on("value", (snapshot) => {
      const pups = snapshot.val();
      const pupCard = [];
      for (let id in pups) {
        pupCard.push({ id, ...pups[id] });
      }
      setPupCard(pupCard);
    });
  }, []);
  return (
    <div className="pup-card-holder">
      {pupCard
        ? pupCard.map((pup, index) => <Pup pup={pup} key={index} />)
        : ""}
    </div>
  );
}
export default PupCard;
