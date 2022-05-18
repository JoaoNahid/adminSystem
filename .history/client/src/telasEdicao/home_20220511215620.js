import React, { useEffect, useState } from 'react'
import ImageUpload from '../components/imageUpload'

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
                <br />
                <br />
                <p className='tituloInput'>Subtítulo</p>
                <input className='inputDados' name="subtitulo" type="text" placeholder='' />

                <ImageUpload />
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