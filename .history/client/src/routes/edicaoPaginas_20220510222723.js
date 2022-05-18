import React, { Component, useState, useEffect } from "react"
import Axios from "axios"
import Sidebar from '../components/sidebar.js'
import { VerificaLogin } from '../components/verificaLogin.js'
import MenuPaginas from '../components/menuPaginasEdicao'
import MenuHome from '../components/menuItensEdicao'


export default function EdicaoPaginas(){
    VerificaLogin();

    const[formularioARenderizar, setTelaARenderizar] = useState()

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
                        { TelaARenderizar }
                        {/* <SliderHome /> */}
                    </div>
                    <MenuHome passarTela={passarTela} setFormularioARenderizar={} />
                </div>                
            </div>
        </div>
    )
}