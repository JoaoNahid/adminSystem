import React, { Component, useState, useEffect } from "react"
import Axios from "axios"

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

    function calcularConversao(){

    }



    return(
        <div>
            <div className="container">
                <h1>Aqui iremos calcular a conversão alimentar da granja</h1>
                <p>Quantidade em Kg do frango:</p>
                <input type="text" name='pesoFrango' defaultValue='' />
                <p>Quantidade de frangos vendidos</p>
                <input type="number" name='qtdFrangos' defaultValue=''/>

                <p>Quantidade de ração consumida no total</p>
                <input type="text" name='qtdRacao' />
                
                <br />
                <button onClick={calcularConversao()}>Calcular</button>
            </div>
        </div>
    )
}