import React, { Component, useState, useEffect } from "react"
import Axios from "axios"

export default class Calculos extends Component {

    constructor(){
        super()
        this.state ={
            pesoMedio: '',
            consumoMedio: '',
            eficienciaAlimentar: '',
            qtdRacao: '',
            pesoLote: '',
            pesoPintinho: '',



        }
    }

    calcularConversao = (e) => {
        console.log(this.state.qtdRacao)
        console.log(this.state.pesoLote)
        console.log(this.state.pesoPintinho)
        this.setState = {
            pesoMedio: this.state.pesoLote - this.state.pesoPintinho,
            consumoMedio: this.state.qtdRacao / pesoMedio,
            eficienciaAlimentar: this.state.pesoMedio / this.state.consumoMedio
        }
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
                        <h4><strong>Ganho de peso médio: </strong>{ this.state.pesoMedio }</h4>
                        <h4><strong>Consumo médio de ração: </strong>{this.state.consumoMedio}</h4>
                        <h4><strong>Índice de eficiência alimentar: </strong>{this.state.eficienciaAlimentar}</h4>
                    </div>
                </div>
            </div>
        </div>
    )}
}