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
    const [menuARenderizar, setMenuLateral] = useState('')
    const [posicaoItensMenuARenderizar, setPosicaoItensMenuARenderizar] = useState(1)
    //console.log(arrayComponetes[posicaoItensMenuARenderizar]['itensMenu'])
    

    if(menuARenderizar == ''){
        setMenuLateral(arrayComponetes[posicaoItensMenuARenderizar]['itensMenu'])
    }
    console.log(arrayComponetes[posicaoItensMenuARenderizar]);
    console.log(arrayComponetes);



    return(
        
        <div>
            <Sidebar />
            <div className="container">
                <div className="areaEdicaoSite">
                    <MenuPaginas setMenuLateral={setPosicaoItensMenuARenderizar} paginasEditaveis={arrayComponetes}/>
                    <div className="formEdicao">
                        {arrayComponetes[formularioARenderizar]}
                    </div>
                    <MenuLateral itemsMenu={menuARenderizar} setFormularioARenderizar={setFormularioARenderizar} />
                </div>                
            </div>
        </div>
    )
}