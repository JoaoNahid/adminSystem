import React, { Component} from "react"

export default class MenuPaginas extends Component{

        render(){
            return(
                <div className="menuPaginasEdicao">
                    <div className="paginaEdicao" name="HomeEdit">Home</div>
                    <div className="paginaEdicao" name="SobreEdit">Sobre</div>
                    <div className="paginaEdicao" name="ServicosEdit">Serviços</div>
                    <div className="paginaEdicao" name="ContatoEdit">Contato</div>
                </div>
            )
        }
}