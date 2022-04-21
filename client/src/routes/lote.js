import React, { Component, useState } from "react"

export default function Lote(){

    const [idLote, setIdLote] = useState()

    return(
        <div>
            <div className="container">
                <div className="conteudoPagina">
                    <h1>Lote {this.props.match.params.id }</h1>
                </div>
            </div>
        </div>
    )
}