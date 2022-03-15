import React from "react"
import ReactDOM from "react-dom"
import GlobalStyles from "./styles"
import MainForm from "./MainForm"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <MainForm />
  </React.StrictMode>,
  document.getElementById("root")
)

//reportWebVitals()
