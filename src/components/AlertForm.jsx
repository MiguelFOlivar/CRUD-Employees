import { Alert } from "react-bootstrap"

export const AlertForm = () => {
  return (
    <Alert variant="info">
        <Alert.Heading>
            Acción Realizada.
        </Alert.Heading>
        <p>
            Se han registrado los datos del empleado de manera exitosa.
        </p>
        <hr />
        <p className="mb-0">
            puede volver a la página principal para ver los resultados.
        </p>
    </Alert>
  )
}
