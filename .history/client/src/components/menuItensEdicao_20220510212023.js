import React, { useEffect, useState } from "react"

export default function MenuHome({ passarTela }){

    const [tela, setTela] = useState('')
    useEffect(() => {
        const menu = document.querySelectorAll('.itemEdicao')
        function pegarName() {
            listaSidebar.forEach((item) =>
                item.classList.remove('active'))
            var menu = this.id
            localStorage.setItem('active', menu)
        }
        menu.forEach(e => {
            e.addEventListener('click', pegarName)
        });
        /* for (let i = 0; i < menu.length; i++) {
            menu[i].addEventListener('click', function() {
                passarTela('passou')
            })
        } */
    })
// name será o mesmo nome da função
        return(
            <div className="menuItensEdicao">
                <div className="itemEdicao" name="SliderHome">Slider</div>
                <div className="itemEdicao" name="IconesHome">Ícones</div>
                <div className="itemEdicao" name="QuemSomosHome">Quem Somos</div>
                <div className="itemEdicao" name="MissaoHome">Missão e valores</div>
                <div className="itemEdicao" name="DepoimentosHome">Depoimentos</div>
                <div className="itemEdicao" name="PareceirosHome">Parceiros</div>
                <div className="itemEdicao" name="ContatoHome">Contato</div>
            </div>
        )
    
}