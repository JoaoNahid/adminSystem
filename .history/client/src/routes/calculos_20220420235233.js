import React, { Component, useState, useEffect } from "react"
import Axios from "axios"

export default class Calculos extends Component {

    constructor(){
        super()
        this.state ={
            pesoMedio: '',
            consumoMedio: '',
            eficienciaAlimentar: '',
            qtdRacao: '4.25',
            pesoLote: '4',
            pesoPintinho: '0.4',



        }
    }

    calcularConversao = (e) => {
        Axios.post('http://localhost:3001/conversao', {
            pesoLote: this.state.pesoLote,
            qtdRacao: this.state.qtdRacao,
            pesoPintinho: this.state.pesoPintinho
        }).then((response) => {
            const dadosDoServidor = response.data
            this.setState({
                pesoMedio: dadosDoServidor.pesoMedio,
                consumoMedio: dadosDoServidor.consumoMedio,
                eficienciaAlimentar: dadosDoServidor.eficienciaAlimentar
            })
        })
        
        
    }


    render(){
    return (
        <div>
            <div className="container">
                <h1>Aqui iremos calcular a conversão alimentar da granja</h1>
                <div className="flexBox boxConversao">
                    <div className="camposInputs flexChild100">
                        <p className="tituloInput">Peso médio do lote:</p>
                        <input type="text" className='inputsConversao' id='pesoLote' defaultValue={this.state.pesoLote} onChange={(e) => {this.setState({ pesoLote: e.target.value })}} />
                        <p className="tituloInput">Peso médio do pintinho (dia do alojamento)</p>
                        <input type="number" className='inputsConversao' id='pesoPintinho' defaultValue={this.state.pesoPintinho} onChange={(e) => {this.setState({ pesoPintinho: e.target.value })}} />

                        <p className="tituloInput">Quantidade de ração média consumida</p>
                        <input type="text" className='inputsConversao' id='qtdRacao' defaultValue={this.state.qtdRacao} onChange={(e) => {this.setState({ qtdRacao: e.target.value})}} />

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