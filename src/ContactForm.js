import React from "react"
import { StyledForm, Button } from "./styles"
import useForm from "./useForm"
const ContactForm = ({ handleContact }) => {
  const [form, handleInputs] = useForm()
  handleContact(form)
  return (
    <StyledForm>
      <h3>Datos de contacto</h3>
      <input
        type="email"
        name="email"
        placeholder="correo electrónico"
        onChange={e => {
          handleInputs(e)
        }}
      />
      <input
        type="number"
        name="phone"
        placeholder="teléfono celular"
        onChange={e => {
          handleInputs(e)
        }}
      />
    </StyledForm>
  )
}

export default ContactForm
