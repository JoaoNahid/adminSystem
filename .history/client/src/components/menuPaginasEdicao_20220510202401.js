import React, { Component} from "react"

export default class MenuHome extends Component{

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

export default class MenuSobre extends Component {

    render() {
        return (
            <div className="menuPaginasEdicao">
                <div className="paginaEdicao" name="HomeEdit">Banner</div>
                <div className="paginaEdicao" name="SobreEdit">Sobre</div>
                <div className="paginaEdicao" name="ServicosEdit">Serviços</div>
                <div className="paginaEdicao" name="ContatoEdit">Contato</div>
            </div>
        )
    }
}