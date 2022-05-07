import React, { useState, useEffect } from "react"
import Axios from "axios"

export default function verificaLogin(){

    useEffect(() => {

        var id = localStorage.getItem('id')
        var email = localStorage.getItem('email')

        getUser(id, email)
    })

    function getUser(id, email){

    }
}