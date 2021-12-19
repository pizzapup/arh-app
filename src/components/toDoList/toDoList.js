/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import firebase from "../../utilities/firebase";
import Pup from "../toDo/toDo";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./toDoList.css";
function PupList() {
  const [pupList, setPupList] = useState();
  useEffect(() => {
    const pupRef = firebase.database().ref("arh-final");
    pupRef.on("value", (snapshot) => {
      const pups = snapshot.val();
      const pupList = [];
      for (let id in pups) {
        pupList.push({ id, ...pups[id] });
      }
      setPupList(pupList);
    });
  }, []);
  return (
    <div className="todo-list-holder">
      <Row className="flex-row-reverse">
        {pupList
          ? pupList.map((pup, index) => <Pup pup={pup} key={index} />)
          : ""}
      </Row>
    </div>
  );
}
export default PupList;
