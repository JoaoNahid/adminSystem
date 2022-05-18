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
    const [menuARenderizar, setMenuARenderizar] = useState('')

    if(menuARenderizar == ''){
        const sidebarItems = [
            {
                id: "SliderHome",
                texto: "Slider"
            },
            {
                id: "ContatoHome",
                texto: "Contato"
            },
        ]
        setMenuARenderizar(sidebarItems)
    }
    console.log(menuARenderizar)



    return(
        
        <div>
            <Sidebar />
            <div className="container">
                <div className="areaEdicaoSite">
                    <MenuPaginas setMenuARenderizar={setMenuARenderizar}/>
                    <div className="formEdicao">
                        {arrayComponetes[formularioARenderizar]}
                    </div>
                    <MenuLateral itemsMenu={menuARenderizar} setFormularioARenderizar={setFormularioARenderizar} />
                </div>                
            </div>
        </div>
    )
}