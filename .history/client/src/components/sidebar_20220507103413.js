import React, { Component } from "react"
import {FiLogOut} from "react-icons/fi"

export default class Sidebar extends Component {

    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){

        const listaSidebar = document.querySelectorAll('.lista');
        function menuAtivo() {
            listaSidebar.forEach((item) =>
                item.classList.remove('active'))
            var menu = this.id
            localStorage.setItem('active', menu)
        }
        listaSidebar.forEach((item) =>
            item.addEventListener('click', menuAtivo));

        document.getElementsByClassName('fotoUsuario')[0].style.background = "url(img/nahid.jpg)"

    }

    

    render(){
        return(
            <div className="sidebar">
                <div className="perfilUsuario">
                    <div className="fotoUsuario"></div>
                    <span className="nomeUsuario">João Nahid</span>
                    <span className="funcaoUsuario">Administrador</span>
                </div>
                <ul>
                    <li id='menu-1' className="lista active">
                        <a href="index.php">
                            <span className="iconeSidebar">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="tituloSidebar">Dashboard</span>
                        </a>
                    </li>

                    <li id='menu-2' className="lista">
                        <a href="edicaoSite.php">
                            <span className="iconeSidebar">
                                <ion-icon name="code-slash-outline"></ion-icon>
                            </span>
                            <span className="tituloSidebar">Editar Site</span>
                        </a>
                    </li>

                    <li id='menu-3' className="lista">
                        <a href="#">
                            <span className="iconeSidebar">
                                <ion-icon name="person-outline"></ion-icon>
                            </span>
                            <span className="tituloSidebar">Conta</span>
                        </a>
                    </li>

                    <li id='menu-4' className="lista">
                        <a href="#">
                            <span className="iconeSidebar">
                                <ion-icon name="settings-outline"></ion-icon>
                            </span>
                            <span className="tituloSidebar">Configurações</span>
                        </a>
                    </li>

                    <li id='menu-5' className="lista">
                        <a href="#">
                            <span className="iconeSidebar">
                                <ion-icon name="log-out-outline"></ion-icon>
                            </span>
                            <span className="tituloSidebar">Sair</span>
                        </a>
                    </li>
                </ul>
            </div>

        )
    }
}