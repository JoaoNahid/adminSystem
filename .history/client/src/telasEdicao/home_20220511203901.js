import React, { useEffect, useState } from 'react'

export const arrayComponetes = {
    SliderHome: <SliderHome />,
    ContatoHome: <ContatoHome />
}

export function SliderHome(){
    return(
        <div>
            <div className="boxForm">
                <p className='tituloInput'>Título</p>
                <input className='inputDados' name="titulo" type="text" placeholder='' />

                <p className='tituloInput'>Subtítulo</p>
                <input className='inputDados' name="subtitulo" type="text" placeholder='' />
            </div>
        </div>
    )
}

export function ContatoHome() {
    return (
        <div>
            Olá João
        </div>
    )
}