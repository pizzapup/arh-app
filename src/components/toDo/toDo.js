/* eslint-disable no-unused-vars */
import React from "react";
import firebase from "../../utilities/firebase";
import styles from "./toDo.css";
import { Button, Stack, Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DogIcon from "../../images/dog";

function Pup({ pup }) {
  const completePup = () => {
    const pupRef = firebase.database().ref("arh-final").child(pup.id);
    pupRef.update({
      complete: !pup.complete,
    });
  };
  const deletePup = () => {
    const pupRef = firebase.database().ref("arh-final").child(pup.id);
    pupRef.remove();
  };
  return (
    <div className="to-do-holder">
      {/* <h2 className={pup.complete ? "complete" : "incomplete"}>{pup.title}</h2> */}
      <Card style={{ width: "18rem" }}>
        <DogIcon />
        <Card.Body>
          <Card.Title>{pup.title}</Card.Title>
          <Card.Text>The dog is this color {pup.color}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      {/* <Stack direction="horizontal" gap={3}>
        <Button
          className={pup.complete ? "" : "d-none"}
          onClick={completePup}
          variant="success"
        >
          <FontAwesomeIcon icon="kiwi-bird" />
          Complete
        </Button>
        <Button
          variant="danger"
          className={pup.complete ? "d-none" : ""}
          onClick={completePup}
        >
          <FontAwesomeIcon icon="carrot" />
          Need to buy
        </Button>
        <div className="vr" />
        <Button variant="outline-danger" onClick={deletePup}>
          Delete
        </Button>
      </Stack> */}
    </div>
  );
}
export default Pup;
