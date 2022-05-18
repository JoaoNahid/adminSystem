import React, { Component, useState, useEffect } from "react"
import Axios from "axios"
import Sidebar from '../components/sidebar.js'
import { VerificaLogin } from '../components/verificaLogin.js'
import MenuPaginas from '../components/menuPaginasEdicao'
import MenuLateral from '../components/menuItensEdicao'
import { arrayComponetes } from "../telasEdicao/home.js"

export default function EdicaoPaginas(){ 
    VerificaLogin();
    const [menuARenderizar, setMenuLateral] = useState(0)
    const [posicaoItensMenuARenderizar, setPosicaoItensMenuARenderizar] = useState(0)

    return(
        
        <div>
            <Sidebar />
            <div className="container">
                <div className="areaEdicaoSite">
                    <MenuPaginas setMenuLateral={setPosicaoItensMenuARenderizar} paginasEditaveis={arrayComponetes}/>
                    <div className="formEdicao">
                        {arrayComponetes[posicaoItensMenuARenderizar]['itensMenu'][menuARenderizar]['componente']}
                    </div>
                    <MenuLateral itemsMenu={arrayComponetes[posicaoItensMenuARenderizar]['itensMenu']} setFormularioARenderizar={setMenuLateral} />
                </div>                
            </div>
        </div>
    )
}