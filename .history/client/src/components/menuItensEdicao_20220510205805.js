import React, { Component } from "react"

export default function MenuHome({ childToParent}){
// name será o mesmo nome da função
const render = 'formulario do slider';
        return(
            <div class="menuItensEdicao">
                <div className="itemEdicao" onClick={() => tela(render)} name="SliderHome">Slider</div>
                <div className="itemEdicao" name="IconesHome">Ícones</div>
                <div className="itemEdicao" name="QuemSomosHome">Quem Somos</div>
                <div className="itemEdicao" name="MissaoHome">Missão e valores</div>
                <div className="itemEdicao" name="DepoimentosHome">Depoimentos</div>
                <div className="itemEdicao" name="PareceirosHome">Parceiros</div>
                <div className="itemEdicao" name="ContatoHome">Contato</div>
            </div>
        )
    
}