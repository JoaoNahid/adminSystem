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
                <div className="flexBox boxConversao">
                    <div className="camposInputs flexChild100">
                        <p className="tituloInput">Peso médio do lote:</p>
                        <input type="text" className='inputsConversao' name='pesoFrango' defaultValue='' />
                        <p className="tituloInput">Peso médio do pintinho (dia do alojamento)</p>
                        <input type="number" className='inputsConversao' name='qtdFrangos' defaultValue='' />

                        <p className="tituloInput">Quantidade de ração consumida no total</p>
                        <input type="text" className='inputsConversao' name='qtdRacao' defaultValue='' />

                        <br />
                        <button onClick={calcularConversao()}>Calcular</button>
                    </div>
                    <div className="dadosConversao flexChild100">
                        <h4>Ganho de peso médio</h4>
                        <h4>Consumo médio de ração</h4>
                        <h4>Índice de eficiência alimentar</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}