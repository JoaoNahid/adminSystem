import React, { Component, useState, useEffect } from "react"
import Axios from "axios"
import Sidebar from '../components/sidebar.js'
import { VerificaLogin } from '../components/verificaLogin.js'
import MenuPaginas from '../components/menuPaginasEdicao'
import MenuItens from '../components/menuItensEdicao'

export default function EdicaoPaginas(){
    VerificaLogin();

    const[telaARenderizar, setTelaARenderizar] = useState('')

    const childToParent = () => {

    }



    return(
        
        <div>
            <Sidebar />
            <div className="container">
                <div className="areaEdicaoSite">
                    <MenuPaginas />
                    <div class="formEdicao">

                    </div>
                    <MenuItens childToParent={childToParent} />
                </div>                
            </div>
        </div>
    )
}