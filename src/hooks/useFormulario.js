import { useState, useEffect } from 'react'

const useFormulario = (inicial, validateForm) => {
  const [formulario, setFormulario] = useState(inicial)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    setErrors(validateForm(formulario))
  }, [formulario])

  const handleBlur = () => {
    setErrors(validateForm(formulario))
  }

  const reset = () => {
    setFormulario(inicial)
  }

  return (
    [formulario, handleChange, handleBlur, errors, reset]
  )
}

export default useFormulario
