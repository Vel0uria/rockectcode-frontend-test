import React from "react"
import styled from "styled-components"

function Form() {
  const Button = styled.button`
    background-color: PaleVioletRed;
    border: none;
    border-radius: 3px;
    color: azure;
    margin: 1em;
    padding: .5em 0.7em;
    font-weight: bold;
  `
  const Form = styled.form`
    background-color: aliceblue;
    border-color: LightSeaGreen;
    border-style: solid;
    border-radius: 10px;
    display: flex;
    align-content: center;
    flex-direction: column;
    margin-top: 3%;
    margin-left: 25%;
    padding: 20px;
    max-width: 30vw;
    max-height: 50vh;
    input {
      margin: 0.5em;
      border-color: snow;
      font-size: 1.5rem;
    }
    h3 {
      display: flex;
      align-self: center;
    }
  `
  const UserInfo = styled.div`
    background-color: PaleVioletRed;
    padding: 10px;
    max-width: 30vw;
    max-height: 30vh;
    margin-top: 3%;
    margin-left: 25%;
    text-align: center;
  `

  const NameForm = () => {
    return (
      <Form>
        <h3>¿Cuál es tu nombre?</h3>
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="text" name="segundo-nombre" placeholder="Segundo nombre" />
        <input type="text" name="apellido-1" placeholder="Apellido paterno" />
        <Button>Iniciar</Button>
      </Form>
    )
  }
  return (
    <div>
      <h1>TEST</h1>
      <NameForm />
      <UserInfo>
        <h4>Respuestas</h4>
      </UserInfo>
    </div>
  )
}

export default Form
