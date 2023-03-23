/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import firebase from "../../utilities/firebase";
import PupCard from "../PupCard/PupCard";
// import styles from "./PupGallery.css";
import cardStyles from "../PupCard/PupCard";
function PupGallery() {
  // toDoList
  const [pupGallery, setPupGallery] = useState();
  useEffect(() => {
    const pupRef = firebase.database().ref("name-this-dog");
    pupRef.on("value", (snapshot) => {
      const pups = snapshot.val();
      const pupGallery = [];
      for (let id in pups) {
        pupGallery.push({ id, ...pups[id] });
      }
      setPupGallery(pupGallery);
    });
  }, []);
  return (
    <div className="grid-comp">
      hello
      <div className="pup-gallery grid-container">
        {pupGallery
          ? pupGallery.map((pup, index) => (
              <PupCard className="pup-gallery" pup={pup} key={index} />
            ))
          : ""}
      </div>
    </div>
  );
}
export default PupGallery;
