import React, { useState } from "react"
import { UserInfo, Button, Nav } from "./styles"
import NameForm from "./NameForm"
import DateForm from "./DateForm"
import ContactForm from "./ContactForm"

//Componente tipo "landing-page" sobre el cual se muestran los componentes independientes y otros elementos secundarios.

function MainForm() {
  const [userName, setUserName] = useState({})
  const [userDate, setUserDate] = useState({})
  const [userContact, setUserContact] = useState({})
  const [next, setNext] = useState(1)

  //Variables de almacenamiento de sesión con los datos de usuario.
  const name = JSON.parse(localStorage.getItem("USERNAME"))
  const date = JSON.parse(localStorage.getItem("USERDATE"))
  const contact = JSON.parse(localStorage.getItem("USERCONTACT"))

  //función encargada de actualizar los componentes
  function handleNext() {
    setNext(next + 1)
  }

  //función encargada de mostrar el recuadro con la información capturada
  function showAnswers(index) {
    switch (index) {
      case 1:
        return (
          <UserInfo>
            <ul>
              <li>
                Nombre: {userName.name}
              </li>
              <li>
                Segundo nombre: {userName.middleName}
              </li>
              <li>
                Apellido paterno: {userName.lastName}
              </li>
            </ul>
          </UserInfo>
        )
      case 2:
        return (
          <UserInfo>
            <li>
              Fecha de nacimiento: {userDate.day}/{userDate.month}/{userDate.year}
            </li>
          </UserInfo>
        )
      case 3:
        return (
          <UserInfo>
            <ul>
              <li>
                Correo electrónico: {userContact.email}
              </li>
              <li>
                celular: {userContact.phone}
              </li>
            </ul>
          </UserInfo>
        )
      case 4:
        return (
          <UserInfo>
            <ul>
              <li>
                Nombre: {name.name}
              </li>
              <li>
                Segundo nombre: {name.middleName}
              </li>
              <li>
                Apellido paterno: {name.lastName}
              </li>
              <li>
                Fecha de nacimiento: {date.day}/{date.month}/{date.year}
              </li>
              <li>
                correo electrónico: {contact.email}
              </li>
              <li>
                Teléfono: {contact.phone}
              </li>
            </ul>
          </UserInfo>
        )
      default:
        return null
    }
  }
  //función encargada de mostrar los componentes nombre, fecha de nacimiento y datos de contacto en su respectivo orden.
  function handleForms() {
    switch (next) {
      case 1:
        localStorage.setItem("USERNAME", JSON.stringify(userName))
        return <NameForm handleName={e => setUserName(e)} />
      case 2:
        localStorage.setItem("USERDATE", JSON.stringify(userDate))
        return <DateForm handleDate={e => setUserDate(e)} />
      case 3:
        localStorage.setItem("USERCONTACT", JSON.stringify(userContact))
        return <ContactForm handleContact={e => setUserContact(e)} />
      default:
        return null
    }
  }

  return (
    <div>
      <Nav />
      <h1>TÍTULO DE FORMULARIO</h1>
      <div className="userInfo">
        {handleForms(next)}
        {next <= 2 && <Button onClick={handleNext}>Siguiente</Button>}
        {next === 3 && <Button onClick={handleNext}>Iniciar</Button>}
        <div>
          {showAnswers(next)}
        </div>
      </div>
    </div>
  )
}

export default MainForm
