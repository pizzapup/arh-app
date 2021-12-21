import "./App.css";
import FormComp from "./components/formComp/formComp";
import PupList from "./components/toDoList/toDoList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faKiwiBird,
  faCarrot,
  faPaintRoller,
  faSnowflake,
  faCampground,
  faTree,
  faRocket,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(
  faKiwiBird,
  faCarrot,
  faPaintRoller,
  faSnowflake,
  faCampground,
  faTree,
  faRocket,
  faUmbrellaBeach
);
function App() {
  return (
    <div className="App">
      <Container>
        <Row className="m-2">
          <Col>
            <h1>Name this dog:</h1>
          </Col>
        </Row>
        <Row className="m-2">
          <Col className="FormComp-wrapper">
            <FormComp />
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <PupList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
