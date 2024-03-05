import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand href="#">CRUD Empleados</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0" style={{maxHeight: '100px'}}
          ></Nav>
          <Form className="d-flex">
            <Button variant="outline-success">Agregar Empleado</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
