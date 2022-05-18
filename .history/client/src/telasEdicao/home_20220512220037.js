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
                    titulo: "Ícones",
                    id: "IconesHome",
                    componente: <IconesHome />
                }
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

export function IconesHome() {
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

// PÁGINA SOBRE

export function QuemSomosSobre(){

}
export function BannerSobre() {

}

//PÁGINA SERVIÇOS

export function ServicosServicos() {

}
export function FuncionariosServicos() {

}

// PÁGINA CONTATO

export function FormularioContato() {

}
export function InformacoesContato() {

}