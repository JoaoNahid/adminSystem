import React, { Component, useState, useEffect } from "react"
import Axios from "axios"

export default function Home(){

    const [users, setUsers] = useState([])
    console.log(users)
   /*  useEffect(() => {
        Axios.get('http://localhost:3001/login').then((response) => {
            console.log(response)
            setUsers(response.data)
        })
    }) */

    return(
        <div>
            <h1>Welcome to homepage!</h1>
        </div>
    )
}