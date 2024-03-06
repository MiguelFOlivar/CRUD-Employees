import { Card, Table } from "react-bootstrap"
import { EmployeeItemTable } from "./EmployeeItemTable"

export const EmployeeList = () => {
  return (
    <>
    <h2 className="text-center my-5">Lista de Empleados</h2>
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
                <EmployeeItemTable/>
            </tbody>
        </Table>
    </Card>
    </>
  )
}
