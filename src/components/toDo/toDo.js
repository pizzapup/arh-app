/* eslint-disable no-unused-vars */
import React from "react";
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
  ButtonGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DogIcon from "../../images/dog";
import DropDownComp from "../dropDownComp/dropDownComp";

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
        <Card.Body className="pupCardText">
          <Card.Title>{pup.name}</Card.Title>
          <Card.Text>The dog is this color {pup.color}</Card.Text>
          <DropDownComp />
        </Card.Body>
      </Card>
    </div>
  );
}
export default Pup;
