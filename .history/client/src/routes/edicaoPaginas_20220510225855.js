import React, { Component, useState, useEffect } from "react"
import Axios from "axios"
import Sidebar from '../components/sidebar.js'
import { VerificaLogin } from '../components/verificaLogin.js'
import MenuPaginas from '../components/menuPaginasEdicao'
import MenuLateral from '../components/menuItensEdicao'
import { arrayComponetes } from "../telasEdicao/home.js"

export default function EdicaoPaginas(){
    VerificaLogin();
    const [formularioARenderizar, setFormularioARenderizar] = useState('')
        console.log(formularioARenderizar)

        const sidebarItems = [
            {
                id: "SliderHome",
                texto: "Slider" 
            },
            {
                id: "SliderHome",
                texto: "Slider"
            },
        ]

    return(
        
        <div>
            <Sidebar />
            <div className="container">
                <div className="areaEdicaoSite">
                    <MenuPaginas />
                    <div className="formEdicao">
                        {arrayComponetes[formularioARenderizar]}
                    </div>
                    <MenuLateral itemsMenu={sidebarItems} setFormularioARenderizar={setFormularioARenderizar} />
                </div>                
            </div>
        </div>
    )
}