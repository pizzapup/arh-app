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
          <Card.Text>
            {pup.name} is this color {pup.color}
          </Card.Text>
          <DropDownComp pup={pup} key={pup.id} />
        </Card.Body>
      </Card>
    </div>
  );
}
export default Pup;
