import React, { useEffect, useState } from 'react'
import ImageUpload from '../components/imageUpload' 
import Axios from 'axios'

export const arrayComponetes = [
     {
        pagina: "Site",
        itensMenu: 
            [
                {
                    titulo: "Banner",
                    id: "BannerHome",
                    componente: <BannerHome />
                },
                {
                    titulo: "A Ricel",
                    id: "SobreHome",
                    componente: <SobreHome />
                },
                {
                    titulo: "Serviços",
                    id: "ServicosHome",
                    componente: <ServicosHome />
                },
                {
                    titulo: "Sustentabilidade",
                    id: "SustentabilidadeHome",
                    componente: <SustentabilidadeHome />
                },
                {
                    titulo: "Trabalhe Conosco",
                    id: "TrabalheConoscoHome",
                    componente: <TrabalheConoscoHome />
                },
                {
                    titulo: "Contato",
                    id: "ContatoHome",
                    componente: <ContatoHome />
                },
            ]
    }   
    
]

// PÁGINA HOME
export function BannerHome(){

    function salvarDados(){

    }
    return(
        <div>
            <div className="boxForm">
                <p className='tituloInput'>Título</p>
                <input className='inputDados' name="titulo" type="text" placeholder='' />
                <br />
                <br />
                <p className='tituloInput'>Subtítulo</p>
                <input className='inputDados' name="subtitulo" type="text" placeholder='' />
                <br />
                <br />
                <p className='tituloInput'>Botão</p>
                <input className='inputDados' name="botao" type="text" placeholder='' />
                <br />
                <br />
                <ImageUpload />
                <br />
                <br />
                <div className="boxBtnSubmit">
                    <button onClick={(e) => salvarDados(e)}>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export function ContatoHome() {
    return (
        <div>
            <div className="boxForm">
                <p className='tituloInput'>Título</p>
                <input className='inputDados' name="titulo" type="text" placeholder='' />
                <br />
                <br />
                <p className='tituloInput'>Subtítulo</p>
                <input className='inputDados' name="subtitulo" type="text" placeholder='' />
                <br />
                <br />

                <ImageUpload />
            </div>
        </div>
    )
}

export function SobreHome() {
    return (
        <div>
            <div className="boxForm">
                <p className='tituloInput'>Título da Seção</p>
                <input className='inputDados' name="tituloSecao" type="text" placeholder='' />
                <br />
                <br />
                <p className='tituloInput'>Valores</p>
                <input className='inputDados' name="subtitulo" type="text" placeholder='' />
                <br />
                <br />
            </div>
        </div>
    )
}

export function SustentabilidadeHome() {
    return (
        <div>
            <div className="boxForm">
                <p className='tituloInput'>Missão</p>
                <input className='inputDados' name="titulo" type="text" placeholder='' />
                <br />
                <br />
                <p className='tituloInput'>Valores</p>
                <input className='inputDados' name="subtitulo" type="text" placeholder='' />
                <br />
                <br />
            </div>
        </div>
    )
}
export function TrabalheConoscoHome() {
    return (
        <div>
            <div className="boxForm">
                <p className='tituloInput'>Missão</p>
                <input className='inputDados' name="titulo" type="text" placeholder='' />
                <br />
                <br />
                <p className='tituloInput'>Valores</p>
                <input className='inputDados' name="subtitulo" type="text" placeholder='' />
                <br />
                <br />
            </div>
        </div>
    )
}
export function ServicosHome() {
    return (
        <div>
            <div className="boxForm">
                <p className='tituloInput'>Missão</p>
                <input className='inputDados' name="titulo" type="text" placeholder='' />
                <br />
                <br />
                <p className='tituloInput'>Valores</p>
                <input className='inputDados' name="subtitulo" type="text" placeholder='' />
                <br />
                <br />
            </div>
        </div>
    )
}


