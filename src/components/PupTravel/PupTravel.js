/* eslint-disable no-unused-vars */
import React from "react";
import firebase from "../../utilities/firebase";
function PupTravel({ pup }) {
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
      <div>
        <button onClick={goHere} value="somewhereDefault">
          Go Here
        </button>
        <div>
          *Sending Dog home will delete information from Firebase Database
          <button onClick={deletePup}>Go Home!</button>
        </div>
      </div>
    </div>
  );
}
export default PupTravel;
