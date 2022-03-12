import { React, useState } from "react";
import { Toast, Button } from "react-bootstrap";
function ToastyComp(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
          <strong className="me-auto">name this dog</strong>
          <small></small>
        </Toast.Header>
        <Toast.Body>Woohoo! Welcome to the pack {props.dogName}!</Toast.Body>
      </Toast>
    </>
  );
}
export default ToastyComp;
