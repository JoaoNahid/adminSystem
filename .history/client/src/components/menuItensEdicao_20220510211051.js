import React, { useEffect, useState } from "react"

export default function MenuHome({ passarTela }){

    const [tela, setTela] = useState('')
    useEffect(() => {
        var menu = document.getElementsByClassName('itemEdicao')
        for (let i = 0; i < menu.length; i++) {
            menu[1].addEventListener('click', function(e){
                console.log(menu[i].name)
            })
        }
    })
// name será o mesmo nome da função
        return(
            <div className="menuItensEdicao">
                <div className="itemEdicao" onClick={() => passarTela(tela)} name="SliderHome">Slider</div>
                <div className="itemEdicao" name="IconesHome">Ícones</div>
                <div className="itemEdicao" name="QuemSomosHome">Quem Somos</div>
                <div className="itemEdicao" name="MissaoHome">Missão e valores</div>
                <div className="itemEdicao" name="DepoimentosHome">Depoimentos</div>
                <div className="itemEdicao" name="PareceirosHome">Parceiros</div>
                <div className="itemEdicao" name="ContatoHome">Contato</div>
            </div>
        )
    
}