import React, { Component, useState, useEffect } from "react"
import Axios from "axios"

export default function Calculos() {

    const [users, setUsers] = useState([])
    console.log(users)
    /* useEffect((e) => {
      e.preventDefault()
       Axios.get('http://localhost:3001/login').then((response) => {
           console.log(response)
           setUsers(response.data)
       })
   }) */

    function calcularConversao() {

    }



    return (
        <div>
            <div className="container">
                <h1>Aqui iremos calcular a conversão alimentar da granja</h1>
                <div className="flexBox">
                    <p className="tituloInput">Quantidade em Kg do frango:</p>
                    <input type="text" className='inputsConversao' name='pesoFrango' defaultValue='' />
                    <p className="tituloInput">Quantidade de frangos vendidos</p>
                    <input type="number" className='inputsConversao' name='qtdFrangos' defaultValue='' />

                    <p className="tituloInput">Quantidade de ração consumida no total</p>
                    <input type="text" className='inputsConversao' name='qtdRacao' defaultValue='' />

                    <br />
                    <button onClick={calcularConversao()}>Calcular</button>
                </div>
            </div>
        </div>
    )
}