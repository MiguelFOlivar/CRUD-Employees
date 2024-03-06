import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">CRUD Empleados</Navbar.Brand>{/* lo usamos para volver a la página de inicio */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
          ></Nav>
          <Form className="d-flex">
            <Button variant="outline-success" bg="secondary" onClick={() => navigate("/create-employee")}>Agregar Empleado</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
