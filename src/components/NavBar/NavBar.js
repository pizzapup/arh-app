import "./NavBar.css";
import {
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Name This Dog</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Gallery</Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text>by pizzapup_</Navbar.Text>
              {/* <Nav.Link href="#deets">Hello!</Nav.Link>
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

//
// import "./App.css";
// import NavBar from "./components/NavBar/NavBar";
// import Hero from "./components/Hero/Hero";
// import CreatePup from "./components/CreatePup/CreatePup";
// import PupGallery from "./components/PupGallery/PupGallery";
// function App() {
//   return (
//     <div className="App">
//       <Hero />
//       <CreatePup />
//       <PupGallery />
//     </div>
//   );
// }

// export default App;
