import React, { useEffect, useState } from "react"

export default function Header() {

    const [pagina, setPagina] = useState()
    useEffect(() => {
        var link = window.location.href
        link = link.split('/')
        link = link[3]

        setTituloPagina(link)
    })

    function setTituloPagina(link){
        if (link === 'edicao') {
            setPagina('Edição')
        } else if(link === 'home'){
            setPagina('Home')
        } else if(link === 'contato'){
            setPagina('Contato')
        }
    }

    return(
        <div className="container">
            <div className="container">
                <h3>{ pagina }</h3>
            </div>
        </div>
    )
}