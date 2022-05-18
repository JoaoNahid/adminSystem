import React, { useEffect, useState } from "react"
import { SliderHome } from "../telasEdicao/home.js"

export default function MenuHome({  setFormularioARenderizar }){
    useEffect(() => {
        const menu = document.querySelectorAll('.itemEdicao')
        menu.forEach(e => {
            e.addEventListener('click', pegarId)
        });
    })

    function pegarId() {
        setFormularioARenderizar(this.id)
    }
// name será o mesmo nome da função
        return(
            <div className="menuItensEdicao">
                <div className="itemEdicao" id="SliderHome">Slider</div>
                <div className="itemEdicao" id="IconesHome">Ícones</div>
                <div className="itemEdicao" id="QuemSomosHome">Quem Somos</div>
                <div className="itemEdicao" id="MissaoHome">Missão e valores</div>
                <div className="itemEdicao" id="DepoimentosHome">Depoimentos</div>
                <div className="itemEdicao" id="PareceirosHome">Parceiros</div>
                <div className="itemEdicao" id="ContatoHome">Contato</div>
            </div>
        )
    
}

export default function MenuSobre({ setFormularioARenderizar }) {
    useEffect(() => {
        const menu = document.querySelectorAll('.itemEdicao')
        menu.forEach(e => {
            e.addEventListener('click', pegarId)
        });
    })

    function pegarId() {
        setFormularioARenderizar(this.id)
    }
    // name será o mesmo nome da função
    return (
        <div className="menuItensEdicao">
            <div className="itemEdicao" id="SliderHome">Slider</div>
            <div className="itemEdicao" id="IconesHome">Ícones</div>
            <div className="itemEdicao" id="QuemSomosHome">Quem Somos</div>
            <div className="itemEdicao" id="MissaoHome">Missão e valores</div>
            <div className="itemEdicao" id="DepoimentosHome">Depoimentos</div>
            <div className="itemEdicao" id="PareceirosHome">Parceiros</div>
            <div className="itemEdicao" id="ContatoHome">Contato</div>
        </div>
    )

}

