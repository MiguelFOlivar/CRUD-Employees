import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDataEmployeeForm } from "../hooks/useDataEmployeeForm";

export const EmployeeForm = () => {
  const navigate = useNavigate();

  const { inputValues, handleInputForm, resetDataForm } = useDataEmployeeForm({
    //Valores iniciales del formulario
    nombres: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefaut();
    /* Validaciones js de elementos */
    console.log(inputValues);
  };
  return (
    <>
      {/* Header */}
      <div className="d-flex my-5 justify-content-between">
        <Button variant="info" onClick={() => navigate("/")}>
          Volver
        </Button>
        <h2>Agregar nuevo empleado</h2>
      </div>

      {/* Formulario */}

      <Card bg="secondary" className="p-5 m-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlid="formNombre">
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa Nombre(s)"
              size="sm"
              id="txtNombres"
              name="nombres"
              value={inputValues.nombres}
              onChange={handleInputForm}
            />
            <Form.Text className="text-muted">
              Este campo es obligatorio
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlid="formApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa Apellido"
              size="sm"
              id="txtApellido"
              name="apellido"
              value={inputValues.apellido}
              onChange={handleInputForm}
            />
            <Form.Text className="text-muted">
              Este campo es obligatorio
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlid="formEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Ingresa E-mail" size="sm"
            id="txtEmail"
            name="email"
            value={inputValues.email}
            onChange={ handleInputForm } />
            <Form.Text className="text-muted">
              Este campo es obligatorio
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlid="formTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingresa Teléfono"
              size="sm"
              id="txtTelefono"
              name="telefono"
              value={inputValues.telefono}
              onChange={ handleInputForm }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlid="formDireccion">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa Dirección"
              size="sm"
              id="txtDireccion"
              name="direccion"
              value={inputValues.direccion}
              onChange={ handleInputForm }
            />
          </Form.Group>

          <div className="d-grid gap-2 mt-3">
            <Button
              variant=""
              className="btn btn-outline-primary"
              type="submit"
            >
              Guardar Datos
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
};
