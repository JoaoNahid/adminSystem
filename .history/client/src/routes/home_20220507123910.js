import React, { Component, useState, useEffect } from "react"
import Axios from "axios"
import Sidebar from './components/sidebar.js'
import { VerificaLogin } from './components/verificaLogin.js'

export default function Home(){

    const [users, setUsers] = useState([])
    console.log(users)
     /* useEffect((e) => {
       e.preventDefault()
        Axios.get('http://localhost:3001/login').then((response) => {
            console.log(response)
            setUsers(response.data)
        })
    }) */ 




    return(
        
        <div>
            <Sidebar />
            <div className="container">
                <h1>Lotes 2022</h1>
                <div id="gridLotes">
                    <div className="boxLote loteFechado">
                        <p className="nomeLote">Lote 1</p>
                        <p className="diasLote">23 dias</p>
                    </div>

                    <div className="boxLote loteAberto">
                        <p className="nomeLote">Lote 1</p>
                        <p className="diasLote">23 dias</p>
                    </div>

                </div>          
                
            </div>
        </div>
    )
}