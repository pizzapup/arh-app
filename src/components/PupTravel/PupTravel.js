/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import firebase from "../../utilities/firebase";
import "../PupCard/PupCard.css";
import { Modal, Button } from "react-bootstrap";
function PupTravel({ pup }) {
  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // travel
  const goHere = (e) => {
    const pupRef = firebase.database().ref("name-this-dog").child(pup.id);
    pupRef.update({
      background: e.target.value,
    });
  };
  // delete
  const deletePup = () => {
    const pupRef = firebase.database().ref("name-this-dog").child(pup.id);
    pupRef.remove();
  };
  // display
  return (
    <div className="PupTravel card-travel-section">
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}
export default PupTravel;
// eslint-disable-next-line no-lone-blocks
/* <div className="PupTravel card-travel-section">
<button
  className="pup-button travel-button"
  onClick={goHere}
  value="somewhereDefault"
>
  Go Here
</button>
<button className="pup-button travel-button" onClick={deletePup}>
  Go Home!
</button>
</div> */
