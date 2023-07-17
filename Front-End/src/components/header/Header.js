import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import cache from "../../core/cache";
import user from "../../core/api/user";

function Header (props) {
  const navigate = useNavigate();


  return (
    <header {...props}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {
              cache.get("TOKEN") ? 
              <Button variant="outline-success" onClick={user.LogoutConfig}>Logout</Button>
              :
              <Button variant="outline-success" onClick={() => navigate("/login")}>Login / Register</Button>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header