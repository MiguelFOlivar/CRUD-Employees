import { Card, Table } from "react-bootstrap";
import { EmployeeItemTable } from "./EmployeeItemTable";
import { useEffect, useState } from "react";
import { getEmployeesList } from "../service/localstorage";

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
        setEmployees(getEmployeesList());
  }, [])

  return (
    <>
      <h1 className="text-center my-5" style={{color:'#3a86ff'}}>Lista de Empleados</h1>

      {employees.length > 0 ? (
        <Card bg="secondary" className="p-3">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Apellido</th>
                <th>E-mail</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                employees.map( employee => <EmployeeItemTable employee={employee} key={employee.id} 
                    setEmployees={setEmployees}/>)
              }
            </tbody>
          </Table>
        </Card>
      ) : (
        <h3 className="text-center">Sin Empleados</h3>
      )}
    </>
  );
};
