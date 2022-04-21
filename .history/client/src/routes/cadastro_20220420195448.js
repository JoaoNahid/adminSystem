import React, { Component } from "react"
import Axios from "axios"
import md5 from "md5-hash"

export default class Cadastro extends Component {
    constructor() {
        super()

        this.state = {
            usuario: "",
            senha: "",
            email: "",
            confirmarSenha: ""
        }
    }

    cadastrar = (e) => {
        e.preventDefault()
        if (this.state.senha === this.state.confirmarSenha){
             Axios.post('http://localhost:3001/cadastro', {
                usuario: this.state.usuario,
                senha: md5(this.state.senha),
                email: this.state.email
            }).then((response) => {
                console.log(response)
            }) 
            Axios.get('http://localhost:3001/cadastro/'+this.state.email+'/'+this.state.usuario).then((response) => {
                console.log(response)
                var dadosDoServidor = response.data[0]
                console.log(response.data[0])
                localStorage.setItem("id", dadosDoServidor.idUsuario)
                localStorage.setItem("email", dadosDoServidor.email)
            })
             // window.location.href = "/home"
            console.log('http://localhost:3001/cadastro/' + this.state.email + '/' + this.state.usuario)
            
        } else{
            console.log(this.state.senha)
            console.log(this.state.confirmarSenha)
            alert('Senhas não conferem')
        }
        
    }

    render() {
        return (
            <div id="bgAreaLogin">
                <div id="areaLogin" className="">
                    <div className="logoAreaLogin">

                    </div>
                    <form className="formLogin" method="post">
                        <input className="inputCampo" type="text" autoComplete="off" placeholder="Usuário" name="usuario" defaultValue={this.state.usuario} onChange={(e) => (this.setState({ usuario: e.target.value }))} />
                        <input className="inputCampo" type="text" autoComplete="off" placeholder="Email" name="email" defaultValue={this.state.email} onChange={(e) => (this.setState({ email: e.target.value }))} />
                        <input className="inputCampo" type="password" autoComplete="off" placeholder="Senha" name="senha" defaultValue={this.state.senha} onChange={(e) => (this.setState({ senha: e.target.value }))} />
                        <input className="inputCampo" type="password" autoComplete="off" placeholder="Confirmar senha" name="confirmarSenha" defaultValue={this.state.confirmarSenha} onChange={(e) => (this.setState({ confirmarSenha: e.target.value }))} />

                        <input className="btnLogar" type="submit" name="logar" defaultValue="Criar conta" onClick={(e) => this.cadastrar(e)} />
                    </form>
                </div>
            </div>
        )
    }
}