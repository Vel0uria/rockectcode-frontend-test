import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body{
  background-color:  whitesmoke;
 font-family:'Open Sans', sans-serif; 
`
export const StyledForm = styled.form`
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
export const Button = styled.button`
  background-color: PaleVioletRed;
  border: none;
  border-radius: 3px;
  color: azure;
  margin: 1em;
  padding: .5em 0.7em;
  font-weight: bold;
`
export const UserInfo = styled.div`
  background-color: PaleVioletRed;
  padding: 10px;
  max-width: 30vw;
  max-height: 30vh;
  margin-top: 3%;
  margin-left: 25%;
  text-align: center;
`
