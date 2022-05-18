import React, { Component} from "react"

export default function MenuPaginas(setMenuLateral) {

    function menuHome(){
        //e.preventDefault()
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
        console.log(sidebarItems);
        setMenuLateral('ola')
    }
    function menuSobre(e) {
        e.preventDefault()
        const sidebarItems = [
            {
                id: "BannerSobre",
                texto: "Banner"
            },
            {
                id: "QuemSomosSobre",
                texto: "Quem Somos"
            },
            {
                id: "ApoiadoresServicos",
                texto: "Apoiadores"
            },
        ]
        console.log(sidebarItems);
        setMenuLateral(sidebarItems)
    }
    function menuServicos(e) {
        e.preventDefault()
        const sidebarItems = [
            {
                id: "SliderHome",
                texto: "Teste 1"
            },
            {
                id: "ContatoHome",
                texto: "Teste 2"
            },
        ]
        console.log(sidebarItems);
        setMenuLateral(sidebarItems)
    }
    function menuContato(e) {
        e.preventDefault()
        const sidebarItems = [
            {
                id: "SliderHome",
                texto: "Teste 3"
            },
            {
                id: "ContatoHome",
                texto: "Teste 4"
            },
        ]
        console.log(sidebarItems);
        setMenuLateral(sidebarItems)
    }

    return(
        <div className="menuPaginasEdicao">
            <div className="paginaEdicao" onClick={() => menuHome()} name="SideMenuHome">Home</div>
            <div className="paginaEdicao" onClick={menuSobre} name="SideMenuSobre">Sobre</div>
            <div className="paginaEdicao" onClick={menuServicos} name="SideMenuServicos">Serviços</div>
            <div className="paginaEdicao" onClick={menuContato} name="SideMenuContato">Contato</div>
        </div>
    )
        
}