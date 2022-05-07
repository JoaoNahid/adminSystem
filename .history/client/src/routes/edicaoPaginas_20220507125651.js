import React, { Component, useState, useEffect } from "react"
import Axios from "axios"
import Sidebar from '../components/sidebar.js'
import { VerificaLogin } from '../components/verificaLogin.js'

export default function EdicaoPaginas(){
    VerificaLogin();




    return(
        
        <div>
            <Sidebar />
            <div className="container">

            </div>
        </div>
    )
}