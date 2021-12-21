/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import styles from "./toDo.css";
import {
  Button,
  Stack,
  Form,
  Card,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DogIcon from "../../images/dog";

function Pup({ pup }) {
  const goHere = (e) => {
    const pupRef = firebase.database().ref("arh-final").child(pup.id);
    pupRef.update({
      somewhere: e.target.value,
    });
  };
  const deletePup = () => {
    const pupRef = firebase.database().ref("arh-final").child(pup.id);
    pupRef.remove();
  };
  return (
    <div className="col">
      <Card
        className="pupcardbody"
        id={pup.somewhere}
        style={{ width: "18rem" }}
      >
        <DogIcon fill={pup.color} />
        <Card.Body>
          <Card.Title>{pup.name}</Card.Title>
          <Card.Text>The dog is this color {pup.color}</Card.Text>
          <DropdownButton id="dropdown-basic-button" title="Go Somewhere">
            <Dropdown.Item
              onClick={goHere}
              value="somewhereDefault"
            ></Dropdown.Item>
            <Dropdown.Item onClick={goHere} value="someForest">
              Another action
            </Dropdown.Item>
            <Dropdown.Item id="somewhere2" onClick={goHere} value="somewhere3">
              Something else
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>
              *Sending Dog home will delete information from Firebase Database
            </Dropdown.Header>
            <Dropdown.Item onClick={deletePup}>Go Home!</Dropdown.Item>
          </DropdownButton>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Pup;
