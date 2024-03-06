import { Button, Card, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useDataEmployeeForm } from "../hooks/useDataEmployeeForm";
import { addEmployee, editEmployee, getEmployeeById } from "../service/localstorage";
import { AlertForm } from "./AlertForm";
import { useEffect, useState } from "react";

export const EmployeeForm = () => {
  const navigate = useNavigate();

  const [showMessage, setshowMessage] = useState( false );

  const {id} = useParams();

  const { inputValues, handleInputForm, resetDataForm, setDataForm } = useDataEmployeeForm({

    //Valores iniciales del formulario
    nombres: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Validaciones js de elementos */

    // Comprobamos si existe el id, de ser así se llama a la funcion editar, de lo contrario se agrega 
    //un nuevo registro
    id?editEmployee( id, inputValues ) : addEmployee( inputValues );

    setshowMessage( true );
    resetDataForm();
    setTimeout(() => {
        setshowMessage( false )}
        , 10000);
  };

  useEffect(() => {
    if(id) {
        const employee = getEmployeeById( id );
        setDataForm( employee );
    }

  }, [id])

  return (
    <>
      {/* Header */}
      <div className="d-flex my-5 justify-content-around">
        <Button variant="info" onClick={() => navigate("/")}>
          Volver
        </Button>
        <h1 style={{color: '#3a86ff'}}>{id?"Editar " : "Agregar "} Empleado</h1>
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
        {showMessage && <AlertForm/>}
      </Card>
    </>
  );
};
