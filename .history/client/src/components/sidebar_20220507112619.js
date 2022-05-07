import React, { Component } from "react"
import { FiLogOut, FiUser, FiGrid, FiHome, FiSettings, FiTool } from "react-icons/fi"

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

    logout = (e) => {
        localStorage.removeItem('id');
        localStorage.removeItem('email');
        window.location.href="/login"
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
                                <FiHome />
                            </span>
                            <span className="tituloSidebar">Dashboard</span>
                        </a>
                    </li>

                    <li id='menu-2' className="lista">
                        <a href="edicaoSite.php">
                            <span className="iconeSidebar">
                                <FiTool />
                            </span>
                            <span className="tituloSidebar">Editar Site</span>
                        </a>
                    </li>

                    <li id='menu-3' className="lista">
                        <a href="#">
                            <span className="iconeSidebar">
                                <FiUser />
                            </span>
                            <span className="tituloSidebar">Conta</span>
                        </a>
                    </li>

                    <li id='menu-4' className="lista">
                        <a href="#">
                            <span className="iconeSidebar">
                                <FiSettings />
                            </span>
                            <span className="tituloSidebar">Configurações</span>
                        </a>
                    </li>

                    <li id='menu-5' className="lista" onClick={(e) => this.logout()}>
                        <a href="#">
                            <span className="iconeSidebar">
                                <FiLogOut />
                            </span>
                            <span className="tituloSidebar">Sair</span>
                        </a>
                    </li>
                </ul>
            </div>

        )
    }
}