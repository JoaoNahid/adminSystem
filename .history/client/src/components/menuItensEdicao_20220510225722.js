import React, { useEffect, useState } from "react"

export default function MenuLateral({  setFormularioARenderizar, itemsMenu }){
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
                   { itemsMenu.map( item => { 
                        return (
                            <div className="itemEdicao" id={item.id}>{item.texto}</div>
                        )
                    })
                }
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


