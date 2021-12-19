import "./App.css";
import FormComp from "./components/formComp/formComp";
import PupList from "./components/toDoList/toDoList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faKiwiBird, faCarrot } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

library.add(faKiwiBird, faCarrot);
function App() {
  return (
    <div className="App">
      <Container>
        <Row className="row1">
          <h1>List in Progress</h1>
        </Row>
        <Row className="row2">
          <FormComp />
        </Row>
        <Row className="row3">
          <PupList />
        </Row>
      </Container>
    </div>
  );
}

export default App;
