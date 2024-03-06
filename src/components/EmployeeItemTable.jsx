import { useNavigate } from "react-router";

export const EmployeeItemTable = ({ employee }) => {
  const { id, nombres, apellido, email, telefono, direccion } = employee;

  const navigate = useNavigate();

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
            <span role="button" className="badge bg-danger">
              Eliminar
            </span>
          </div>
        </th>
      </tr>
    </>
  );
};
