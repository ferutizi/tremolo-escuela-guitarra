import { useState } from "react";

const useFormulario = (inicial, validateForm) => {
    const [formulario, setFormulario] = useState(inicial);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormulario({
          ...formulario,
          [e.target.name]: e.target.value,
        })
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(formulario));
    }

    const reset = () => {
        setFormulario(inicial)
    }

    return(
        [formulario, handleChange, handleBlur, errors, reset]
    );
}

export default useFormulario;