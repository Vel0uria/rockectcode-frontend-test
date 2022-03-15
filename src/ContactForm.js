import React from "react"
import { StyledForm, Button } from "./styles"
import useForm from "./useForm"
const ContactForm = ({ showAnswers }) => {
  const [form, handleInputs] = useForm()
  // showAnswers(form)
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
      <Button>Iniciar</Button>
    </StyledForm>
  )
}

export default ContactForm
