import { Alert } from "react-bootstrap"

export const AlertForm = () => {
  return (
    <Alert variant="info">
        <Alert.Heading>
            Acción Realizada.
        </Alert.Heading>
            <small>Se han registrado los datos del empleado de manera exitosa.</small>
    </Alert>
  )
}
