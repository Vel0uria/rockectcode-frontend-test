import React, { useEffect } from "react"
import { StyledForm } from "./styles"
import useForm from "./useForm"

//Componente que renderiza el formulario para capturar el nombre y apellidos.

const NameForm = ({ handleName }) => {
  const [form, handleInputs] = useForm()
  useEffect(() => {
    handleName(form)
  })

  return (
    <StyledForm>
      <h3>¿Cuál es tu nombre?</h3>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        onChange={e => {
          handleInputs(e)
        }}
      />
      <input
        type="text"
        name="middleName"
        placeholder="Segundo nombre"
        onChange={e => {
          handleInputs(e)
        }}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Apellido paterno"
        onChange={e => {
          handleInputs(e)
        }}
      />
    </StyledForm>
  )
}
export default NameForm
