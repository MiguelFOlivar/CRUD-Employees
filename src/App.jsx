import { Container } from "react-bootstrap"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router"
import { EmployeeList } from "./components/EmployeeList"
import { EmployeeForm } from "./components/EmployeeForm"

function App() {
  
  return (
    <>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<EmployeeList/>} />
          <Route path="/create-employee" element={<EmployeeForm/>} />
          <Route path="/edit-employee/:id" element={<EmployeeForm/>} />
        </Routes>
      </Container>
    </>
  )
}

export default App
