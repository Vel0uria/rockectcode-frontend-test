import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body{
  background-color:  whitesmoke;
  font-family:'Open Sans', sans-serif; 
  text-align:center;
  margin:0;

.userInfo{
  display:flex
  flex-direction:column;
li{
  color:snow;
  font-weight: bold;
  font-size: larger;
}
}

`
export const Nav = styled.nav`
  width: 100vw;
  height: 8vh;
  background-color: LightSeaGreen;
`
export const StyledForm = styled.form`
  background-color: aliceblue;
  border-color: LightSeaGreen;
  border-style: solid;
  border-radius: 10px;
  display: flex;
  align-content: center;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 30%;
  padding: 20px;
  max-width: 450px;
  max-height: 350px;
  input {
    margin: 0.5em;
    border-color: snow;
    font-size: 1.5rem;
  }
  h3 {
    display: flex;
    align-self: center;
    font-size: 2em;
  }
`
export const Button = styled.button`
  background-color: deeppink;
  border: none;
  border-radius: 3px;
  color: azure;
  margin: 1em;
  padding: .5em 0.7em;
  font-weight: bold;
  font-size: 1.5em;
`
export const UserInfo = styled.div`
  background-color: hotpink;
  padding: 10px;
  max-width: 450px;
  max-height: 300px;
  margin-left: 30%;
  margin-top: 5%;
  text-align: left;
  font-weight: bold;
  font-size: 1.5em;
`
