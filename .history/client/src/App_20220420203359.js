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
import Error from './routes/404.js'

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  )
}
