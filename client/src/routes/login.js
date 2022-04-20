import React, { Component} from "react"
import Axios from "axios"

export default class Login extends Component{
    constructor() {
        super()

        this.state = {
            usuario: "",
            senha: "",
            email: ""
        }
    }

    logar = (e) => {
/*         Axios.post('http://localhost:3001/cadastrarUsuario', {
            usuario: this.state.usuario,
            senha: this.state.senha,
            email: this.state.email
        }).then((response) => {
            console.log(response)
        }) */
        e.preventDefault()
        console.log(this.state.senha)
        console.log(this.state.senha)
    }

    render() {
        return (
            <div id="bgAreaLogin">
                <div id="areaLogin" className="">
                    <div className="logoAreaLogin">

                    </div>
                    <form className="formLogin" method="post">
                        <input className="inputCampo" type="text" autoComplete="off" placeholder="Usuário" name="usuario" defaultValue={this.state.usuario} onChange={(e) => (this.setState({usuario: e.target.value}))} />
                        <input className="inputCampo" type="password" autoComplete="off" placeholder="Senha" name="senha" defaultValue={this.state.senha} onChange={(e) => (this.setState({ senha: e.target.value }))}/>

                        <input className="btnLogar" type="submit" name="logar" defaultValue="Login" onClick={(e) => this.logar(e)} />
                        <a className="esqueciASenha" href="esqueci-a-senha.php">Esqueci minha senha</a>
                    </form>
                </div>
            </div>
        )
    }
}