import React, { Component, useState, useEffect } from "react"
import Axios from "axios"
import Sidebar from '../components/sidebar.js'
import { VerificaLogin } from '../components/verificaLogin.js'
import MenuPaginas from '../components/menuPaginasEdicao'
import MenuItens from '../components/menuItensEdicao'
import { SliderHome } from "../telasEdicao/home.js"

export default function EdicaoPaginas(){
    VerificaLogin();

    const[telaARenderizar, setTelaARenderizar] = useState('')

    const passarTela = (formToRender) => {
        setTelaARenderizar(formToRender)
    }



    return(
        
        <div>
            <Sidebar />
            <div className="container">
                <div className="areaEdicaoSite">
                    <MenuPaginas />
                    <div className="formEdicao">
                        <telaARenderizar />
                    </div>
                    <MenuItens passarTela={passarTela} />
                </div>                
            </div>
        </div>
    )
}