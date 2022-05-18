import React, { Component} from "react"

export default function MenuPaginas(menuLateral) {

    function menuHome(e){
        e.preventDefault()
    }

    return(
        <div className="menuPaginasEdicao">
            <div className="paginaEdicao" onClick={menuHome} name="SideMenuHome">Home</div>
            <div className="paginaEdicao" onClick={} name="SideMenuSobre">Sobre</div>
            <div className="paginaEdicao" onClick={} name="SideMenuServicos">Serviços</div>
            <div className="paginaEdicao" onClick={} name="SideMenuContato">Contato</div>
        </div>
    )
        
}