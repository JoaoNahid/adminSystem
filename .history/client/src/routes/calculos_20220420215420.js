import React, { Component, useState, useEffect } from "react"
import Axios from "axios"

export default function Calculos() {

    const [pesoMedio, setPesoMedio] = useState(0)
    const [consumoMedio, setConsumoMedio] = useState(0)
    const [eficienciaAlimentar, setEficienciaAlimentar] = useState(0)

    function calcularConversao() {
        setPesoMedio(document.getElementById('pesoLote').value)
        setConsumoMedio(document.getElementById('pesoPintinho').value)
        setEficienciaAlimentar(document.getElementById('qtdRacao').value)
    }



    return (
        <div>
            <div className="container">
                <h1>Aqui iremos calcular a conversão alimentar da granja</h1>
                <div className="flexBox boxConversao">
                    <div className="camposInputs flexChild100">
                        <p className="tituloInput">Peso médio do lote:</p>
                        <input type="text" className='inputsConversao' id='pesoLote' defaultValue='' />
                        <p className="tituloInput">Peso médio do pintinho (dia do alojamento)</p>
                        <input type="number" className='inputsConversao' id='pesoPintinho' defaultValue='' />

                        <p className="tituloInput">Quantidade de ração consumida no total</p>
                        <input type="text" className='inputsConversao' id='qtdRacao' defaultValue='' />

                        <br />
                        <button onClick={calcularConversao()}>Calcular</button>
                    </div>
                    <div className="dadosConversao flexChild100">
                        <h4><strong>Ganho de peso médio: </strong>{  }</h4>
                        <h4>Consumo médio de ração</h4>
                        <h4>Índice de eficiência alimentar</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}