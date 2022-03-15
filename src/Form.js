import React, { useState } from "react"
import { UserInfo, Button } from "./styles"
import NameForm from "./NameForm"
import DateForm from "./DateForm"
import ContactForm from "./ContactForm"

function ChatForm() {
  // const user = JSON.parse(localStorage.getItem("USER"))
  const [userName, setUserName] = useState({})
  const [userDate, setUserDate] = useState({})
  const [usetContact, setUserContact] = useState({})
  const [next, setNext] = useState(1)

  function handleNext() {
    setNext(next + 1)
  }
  function showAnswers(index) {
    switch(index){
      case 1: 
      return(
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
      default: return null
    }
  }
  function handleForms (index) {
    switch (index) {
      case 1:
        return   <NameForm handleName={e =>setUserName(e)}/>
      case 2:
        return <DateForm handleDate={e => setUserDate(e)}/>
      case 3:
        return <ContactForm handleContact={e => setUserContact(e)}/>
      default:
        return null
    }
  }


  return (
    <div>
      <h1>TEST</h1>
      <>
      {handleForms(next)}
      </>
      {next <=2 &&
      <Button onClick={handleNext}>Siguiente</Button>
      }
     <>
     {showAnswers(next)}
     </>
      {/* <UserInfo>
        <h4>Respuestas</h4>
        {/* {userAnswer !== {} && */}
        {/* <ul>
          <li>
            Nombre: {userName.name}
          </li>
          <li>
            Segundo nombre: {userName.middleName}
          </li>
          <li>
            Apellido paterno: {userName.lastName}
          </li>
        </ul> */}
        {/* } */}
     {/*   </UserInfo> */}
    </div>
  )
}

export default ChatForm
