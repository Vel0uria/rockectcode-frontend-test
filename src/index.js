import React from "react"
import ReactDOM from "react-dom"
//import "./index.css"
import GlobalStyles from "./styles"
//import App from "./App"
import ChatForm from "./Form"
//import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ChatForm />
  </React.StrictMode>,
  document.getElementById("root")
)

//reportWebVitals()
