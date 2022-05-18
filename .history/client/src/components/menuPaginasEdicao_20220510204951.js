import React, { Component} from "react"

export default function MenuPaginas(){

        render(){
            return(
                <div className="menuPaginasEdicao">
                    <div className="paginaEdicao" name="SideMenuHome">Home</div>
                    <div className="paginaEdicao" name="SideMenuSobre">Sobre</div>
                    <div className="paginaEdicao" name="SideMenuServicos">Serviços</div>
                    <div className="paginaEdicao" name="SideMenuContato">Contato</div>
                </div>
            )
        }
}