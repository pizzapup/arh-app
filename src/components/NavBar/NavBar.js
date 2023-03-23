import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
// import Home from "../../screens/FormStart";
function NavBar() {
  return (
    <Navbar className="navbar-bg" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">name this dog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="/home">home</NavLink>
            {/* <NavLink href="/PupGallery">gallery</NavLink> */}
          </Nav>
          <Nav>
            <NavDropdown title="userName" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">sign out</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">userName</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
