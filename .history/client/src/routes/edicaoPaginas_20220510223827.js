import React, { Component, useState, useEffect } from "react"
import Axios from "axios"
import Sidebar from '../components/sidebar.js'
import { VerificaLogin } from '../components/verificaLogin.js'
import MenuPaginas from '../components/menuPaginasEdicao'
import MenuHome from '../components/menuItensEdicao'
import { SliderHome } from "../telasEdicao/home.js"

export default function EdicaoPaginas(){
    VerificaLogin();

    const [formularioARenderizar, setFormularioARenderizar] = useState()

    const arrayComponetes = {
        SliderHome: <SliderHome />
    }



    return(
        
        <div>
            <Sidebar />
            <div className="container">
                <div className="areaEdicaoSite">
                    <MenuPaginas />
                    <div className="formEdicao">
                        <arrayComponetes.formularioARenderizar />
                    </div>
                    <MenuHome setFormularioARenderizar={setFormularioARenderizar} />
                </div>                
            </div>
        </div>
    )
}