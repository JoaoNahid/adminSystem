import React, { useEffect, useState } from "react"

export default function Header() {

    const [pagina, setPagina] = useState()
    useEffect(() => {
        var link = window.location.href
        link = link.split('/')
        link = link[1]
        console.log(link)
    })

    return(
        <div className="container">
            <div className="container">
                <h3>Granja Élio de Souza!</h3>
            </div>
        </div>
    )
}