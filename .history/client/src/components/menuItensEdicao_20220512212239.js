import React, { useEffect, useState } from "react"

export default function MenuLateral({  setFormularioARenderizar, itemsMenu }){ 
// name será o mesmo nome da função
        return(
            <div className="menuItensEdicao">
                   { itemsMenu.map( (item, index) => { 
                       var count = index
                        return (
                            <div key={index} className="itemEdicao" id={item.id} onClick={() => setFormularioARenderizar(count)}>{item.titulo}</div>
                        )
                    })
                }
            </div> 
        )
    
}


