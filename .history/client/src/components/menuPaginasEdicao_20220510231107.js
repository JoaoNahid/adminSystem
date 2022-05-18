import React, { Component} from "react"

export default function MenuPaginas(menuLateral) {

    function menuHome(e){
        e.preventDefault()
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
        menuLateral(sidebarItems)
    }
    function menuSobre(e) {
        e.preventDefault()
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
        menuLateral(sidebarItems)
    }
    function menuServicos(e) {
        e.preventDefault()
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
        menuLateral(sidebarItems)
    }
    function menuContato(e) {
        e.preventDefault()
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
        menuLateral(sidebarItems)
    }

    return(
        <div className="menuPaginasEdicao">
            <div className="paginaEdicao" onClick={menuHome} name="SideMenuHome">Home</div>
            <div className="paginaEdicao" onClick={menuSobre} name="SideMenuSobre">Sobre</div>
            <div className="paginaEdicao" onClick={menuServicos} name="SideMenuServicos">Serviços</div>
            <div className="paginaEdicao" onClick={menuContato} name="SideMenuContato">Contato</div>
        </div>
    )
        
}