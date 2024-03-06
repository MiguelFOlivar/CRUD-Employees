
export const EmployeeItemTable = () => {
  return (
    <>
        <tr>
            <th>Nombres ejemplo</th>
            <th>Apellido ejemplo</th>
            <th>Email ejemplo</th>
            <th>Tel ejemplo</th>
            <th>Direccion ejemplo</th>
            <th>
                <div className="d-flex gap-3">
                    <span role="button" className="badge bg-success">
                        Editar
                    </span>
                    <span role="button" className="badge bg-danger">
                        Eliminar
                    </span>
                </div>
            </th>
        </tr>
    </>
  )
}

