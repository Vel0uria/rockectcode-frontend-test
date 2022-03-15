import React from "react"
import ReactDOM from "react-dom"
//import "./index.css"
import GlobalStyles from "./styles"
//import App from "./App"
import MainForm from "./MainForm"
//import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <MainForm />
  </React.StrictMode>,
  document.getElementById("root")
)

//reportWebVitals()
