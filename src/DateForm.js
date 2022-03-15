import React, { useEffect } from "react"
import { StyledForm } from "./styles"
import useForm from "./useForm"
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
