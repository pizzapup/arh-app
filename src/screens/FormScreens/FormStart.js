import { React } from "react";
import "./FormScreens.css";
import "../../App.css";
import DogIcon from "../../images/dog";
import PupGallery from "../../components/PupGallery/PupGallery";
// import { Link, useHistory } from "react-router-dom";
// import { Redirect } from "react-router";
function FormStart(props) {
  // const openGallery = () => history.push("/PupGallery");
  // const history = useHistory();

  return (
    <div className="form-comp">
      <div className="form-container">
        <div className="form-title txt-lg">NAME THIS DOG</div>
        <div className="form-subtitle txt-md">
          Welcome! Meet your new furry friend
        </div>
        <div className="form-text txt-rg">
          It's up to you to give him a name, color, and home
        </div>
        <div className="form-main-content txt-rg">
          <button className="btn-custom-dark start-button" onClick={props.next}>
            start
          </button>
          {/* <button className="btn-custom-skip" onClick={openGallery}>
            Skip to Gallery
          </button> */}
        </div>
      </div>
      <div className="preview-container">
        <DogIcon className="floating" />
        {/* <DogIcon /> */}
      </div>
    </div>
  );
}

export default FormStart;
