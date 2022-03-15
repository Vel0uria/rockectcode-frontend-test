import React, { useEffect } from "react"
import { StyledForm } from "./styles"
import useForm from "./useForm"

//Componente que renderiza el formulario para capturar la fecha de nacimiento.

const DateForm = ({ handleDate }) => {
  const [form, handleInputs] = useForm()
  useEffect(() => {
    handleDate(form)
  })

  return (
    <StyledForm>
      <h3>¿Cuál es tu fecha de nacimiento?</h3>
      <input
        type="number"
        name="day"
        placeholder="día"
        onChange={e => {
          handleInputs(e)
        }}
      />
      <input
        type="number"
        name="month"
        placeholder="mes"
        onChange={e => {
          handleInputs(e)
        }}
      />
      <input
        type="number"
        name="year"
        placeholder="año"
        onChange={e => {
          handleInputs(e)
        }}
      />
    </StyledForm>
  )
}

export default DateForm
