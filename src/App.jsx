import { Container } from "react-bootstrap"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router"
import { EmployeeForm } from "./components/EmployeeForm"
import { EmployeesList } from "./components/EmployeesList"

function App() {
  
  return (
    <>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<EmployeesList/>} />
          <Route path="/create-employee" element={<EmployeeForm/>} />
          <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
