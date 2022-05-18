import React, { useEffect, useState } from 'react'
import ImageUpload from '../components/imageUpload'

export const arrayComponetes = [
     {
        pagina: "Home",
        itensMenu: 
            [
                {
                    titulo: "Slider",
                    id: "SliderHome",
                    componente: <SliderHome />
                },
                {
                    titulo: "Ícones",
                    id: "IconesHome",
                    componente: <IconesHome />
                }
            ]
    },
    {
        pagina: "Sobre",
        itensMenu:
            [
                {
                    titulo: "Banner",
                    id: "BannerSobre",
                    componente: <BannerSobre />
                },
                {
                    titulo: "QuemSomos",
                    id: "IconesHome",
                    componente: <QuemSomosSobre />
                }
            ]
    },
    {
        pagina: "Servicos",
        itensMenu:
            [
                {
                    titulo: "Serviços",
                    id: "ServicosServicos",
                    componente: <ServicosServicos />
                },
                {
                    titulo: "Funcionários",
                    id: "FuncionariosServicos",
                    componente: <FuncionariosServicos />
                }
            ]
    },
    {
        pagina: "Contato",
        itensMenu:
            [
                {
                    titulo: "Formulário",
                    id: "FormularioContato",
                    componente: <FormularioContato />
                },
                {
                    titulo: "Informações",
                    id: "InformacoesContato",
                    componente: <InformacoesContato />
                }
            ]
    },
        
    
]

// PÁGINA HOME
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
                <br />
                <br />

                <ImageUpload />
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