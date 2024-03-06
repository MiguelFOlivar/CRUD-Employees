import { useState } from "react"

export const useDataEmployeeForm = ( initialState={} ) => {

    const [inputValues, setinputValues] = useState(initialState);

    const resetDataForm = () => {
        setinputValues(initialState);
    }

    const handleInputForm = ({target}) => {
        setinputValues(
            {
                ...inputValues,
                [target.name]:target.value
            }
        );
    }

    const setDataForm = ( newValues ) => {
        setinputValues( newValues );
    }
    return{
        inputValues,
        resetDataForm,
        handleInputForm,
        setDataForm
    }
}
