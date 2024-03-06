import { useNavigate } from "react-router";
import { deleteEmployee, getEmployeesList } from "../service/localstorage";

export const EmployeeItemTable = ({ employee, setEmployees }) => {
  const { id, nombres, apellido, email, telefono, direccion } = employee;

  const navigate = useNavigate();

  const removeEmployee = ( ) => {
    deleteEmployee( id );
    setEmployees( getEmployeesList() );
  }

  return (
    <>
      <tr>
        <th>{nombres}</th>
        <th>{apellido}</th>
        <th>{email}</th>
        <th>{telefono}</th>
        <th>{direccion}</th>
        <th>
          <div className="d-flex gap-3">
            <span
              role="button"
              className="badge bg-success"
              onClick={() => navigate(`/edit-employee/${id}`)}
            >
              Editar
            </span>

            <span role="button" className="badge bg-danger"
             onClick={() => removeEmployee()}>
              Eliminar
            </span>
          </div>
        </th>
      </tr>
    </>
  );
};
