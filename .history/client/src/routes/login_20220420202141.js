import React, { Component} from "react"
import Axios from "axios"
import md5 from "md5-hash"

export default class Login extends Component{
    constructor() {
        super()

        this.state = {
            usuario: "nahid@webtagger.com.br",
            senha: "teste",
            email: ""
        }
    }

    logar = (e) => {
        // 'http://localhost:3001/login/'+this.state.email+'/'+this.state.senha
        Axios.get('http://localhost:3001/login/'+this.state.usuario+'/'+md5(this.state.senha)).then((response) => {
            console.log(response)
            var dadosDoServidor = response.data[0]
            console.log(dadosDoServidor)
            if(dadosDoServidor != undefined){
                window.location.href = "/home"
            } else {
                window.alert('Login Inválido')
            }
            // localStorage.setItem("id", dadosDoServidor.idUsuario)
            // localStorage.setItem("email", dadosDoServidor.email)
        })
        /* if (localStorage.getItem("id") && localStorage.getItem("id") === dadosDoServidor.idUsuario) {
            window.location.href = "/home"
        } else{
            window.location.href = "/home"
        } */
        e.preventDefault()
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