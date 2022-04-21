import React, { Component, useState, useEffect } from "react"
import Axios from "axios"

export default class Calculos extends Component {

    constructor(){
        super()
        this.state ={
            pesoMedio: '',
            consumoMedio: '',
            eficienciaAlimentar: '',
            qtdRacao: 0,
            pesoLote: 0,
            pesoPintinho: 0,



        }
    }

    calcularConversao = (e) => {
        console.log(this.state.consumoMedio)
        console.log(this.state.pesoMedio)
        console.log(this.state.eficienciaAlimentar)
    }


    render(){
    return (
        <div>
            <div className="container">
                <h1>Aqui iremos calcular a conversão alimentar da granja</h1>
                <div className="flexBox boxConversao">
                    <div className="camposInputs flexChild100">
                        <p className="tituloInput">Peso médio do lote:</p>
                        <input type="text" className='inputsConversao' id='pesoLote' defaultValue={this.state.pesoLote} onChange={(e) => (this.setState({ pesoLote: e.target.value }))} />
                        <p className="tituloInput">Peso médio do pintinho (dia do alojamento)</p>
                        <input type="number" className='inputsConversao' id='pesoPintinho' defaultValue={this.state.pesoPintinho} onChange={(e) => (this.setState({ pesoPintinho: e.target.value }))} />

                        <p className="tituloInput">Quantidade de ração média consumida</p>
                        <input type="text" className='inputsConversao' id='qtdRacao' defaultValue={this.state.qtdRacao} onChange={(e) => (this.setState({ qtdRacao: e.target.value}))} />

                        <br />
                        <button onClick={(e) => this.calcularConversao()}>Calcular</button>
                    </div>
                    <div className="dadosConversao flexChild100">
                        <h4><strong>Ganho de peso médio: </strong>{  }</h4>
                        <h4>Consumo médio de ração</h4>
                        <h4>Índice de eficiência alimentar</h4>
                    </div>
                </div>
            </div>
        </div>
    )}
}