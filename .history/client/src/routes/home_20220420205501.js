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

    return(
        <div>
            <div className="container">
                <button onClick={() => dolar()}>Saber cotação do dólar</button>
            </div>
        </div>
    )
}