/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import firebase from "../../utilities/firebase";
import "../PupCard/PupCard.css";
import { Button, Modal, Card } from "react-bootstrap";

function PupTravel({ pup }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const goHere = (e) => {
    const pupRef = firebase.database().ref("name-this-dog").child(pup.id);
    pupRef.update({
      background: e.target.value,
    });
  };
  const deletePup = () => {
    const pupRef = firebase.database().ref("name-this-dog").child(pup.id);
    pupRef.remove();
  };
  return (
    <div className="PupTravel">
      <Button
        disable
        size="sm"
        className="btn-sm "
        bsPrefix="  btn-custom-dark btn-travel"
        // onClick={goHere}
        onClick={handleShow}
        value="somewhereDefault"
      >
        <span className="btn-text">go here</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>coming soon!</Modal.Title>
        </Modal.Header>
        <Modal.Body>check back soon for more features!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Button
        variant="secondary"
        size="sm"
        className="btn-sm"
        bsPrefix="btn-custom-dark btn-travel"
        onClick={deletePup}
      >
        <span className="btn-text">go home!</span>
      </Button>
    </div>
  );
}
export default PupTravel;
