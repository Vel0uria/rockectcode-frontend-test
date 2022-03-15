import { useState } from "react"

//Custom hook que captura la información ingresada en los inputs de los formularios.

const useForm = () => {
  const [form, setForm] = useState({})

  const handleInputs = e => {
    e.persist()
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return [form, handleInputs]
}

export default useForm
