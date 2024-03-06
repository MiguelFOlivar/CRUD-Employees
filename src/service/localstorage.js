import uuid from "react-uuid";

export const getEmployeesList = ( ) => {
    if( !(localStorage["@employees"]) ) {
        localStorage["@employees"] = JSON.stringify([]);
    }
    let employees = JSON.parse(localStorage["@employees"]);
    return employees;
}

export const addEmployee = ( newEmployee ) => {
    const employees = getEmployeesList();
    employees.push({id:uuid(), ...newEmployee });
    localStorage["@employees"] = JSON.stringify( employees );
}
export const getEmployeeById = ( id ) => {
    const employees = getEmployeesList();
    const employee = employees.find((employee) => employee.id === id);
    return employee;
}
export const editEmployee = ( id, editedEmployee ) => {
    let employees = getEmployeesList();
    employees = employees.filter( employee => employee.id!==id);
    employees.push( editedEmployee );
    localStorage["@employees"] = JSON.stringify( employees );
}

export const deleteEmployee = ( id ) => {
    let employees = getEmployeesList();
    employees = employees.filter(employee => employee.id!==id);
    localStorage["@employees"] = JSON.stringify( employees );
}