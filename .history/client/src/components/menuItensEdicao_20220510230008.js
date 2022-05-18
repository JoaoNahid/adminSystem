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
            </div>
        )
    
}


