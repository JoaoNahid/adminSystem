import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import './App.css';
import './css/style.css';
import './css/sidebar.css';


// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Telas
import Login from './routes/login.js'
import Cadastro from './routes/cadastro.js'
import Home from './routes/home.js'
import Error from './routes/404.js'
import Header from './routes/header.js'
import Lote from './routes/lote.js'
import Calculos from './routes/calculos.js'
import Sidebar from './components/sidebar.js'
import {VerificaLogin} from './components/verificaLogin.js'

export default function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/lote/:id" element={<Lote />} />
          <Route exact path="/calculos" element={<Calculos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  )
}
