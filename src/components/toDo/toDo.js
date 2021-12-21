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
            <Button onClick={goHere} value="somewhereDefault">
              Nowhere
            </Button>

            <Button onClick={goHere} value="someSpace">
              Space <FontAwesomeIcon icon="rocket" />
            </Button>

            <Button onClick={goHere} value="someWinter">
              Winter
              <FontAwesomeIcon icon="snowflake" />
            </Button>

            <Button onClick={goHere} value="someBeach">
              Beach
              <FontAwesomeIcon icon="umbrella-beach" />
            </Button>

            <Button onClick={goHere} value="someDayForest">
              Forest
              <FontAwesomeIcon icon="tree" />
            </Button>

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
