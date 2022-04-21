import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import './App.css';
import './css/style.css';


// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Telas
import Login from './routes/login.js'
import Cadastro from './routes/cadastro.js'
import Home from './routes/home.js'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="login" element={<Login />} />
          <Route exact path="cadastro" element={<Cadastro />} />
          <Route exact path="home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

/* function App() {

  const [values, setValues] = useState([])
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/cadastroNoticia", {
      titulo: values.nome,
      conteudo: values.conteudo

    }).then((response) => {
      console.log(response)
    })
    console.log(values)
  }
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }
  return (
    <div className="App">
      <input type="text" name="nome" placeholder="Nome" className="input" onChange={handleChangeValues} />
      <input type="text" name="conteudo" placeholder="Categoria" className="input" onChange={handleChangeValues} />
      <input type="text" name="preco" placeholder="Preço" className="input" onChange={handleChangeValues} />
      <button className="btnSalvar" onClick={() => handleClickButton()} >Salvar</button>
    </div>
  );
} */

export default App;
