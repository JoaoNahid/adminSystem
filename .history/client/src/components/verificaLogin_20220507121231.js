import React, { useState, useEffect } from "react"
import Axios from "axios"

export default function verificaLogin(){

    useEffect(() => {

        var id = localStorage.getItem('id')
        var token = localStorage.getItem('token')

        getUser(id, token)
    })

    function getUser(id, token){
        Axios.get('http://localhost:3001/conexoesUsuarios',{
            params: {
                id: id,
                token: token
            }
        }).then((response) => {
            console.log(response)
        })
    }
}