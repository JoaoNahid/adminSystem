import React, { useEffect, useState, useRef } from 'react'
import ImageUpload from '../components/imageUpload'
import { Editor } from '@tinymce/tinymce-react';
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

    function salvarDados(){

    }

    return (
        <div>
            <div className="boxForm">
                <p className='tituloInput'>Título da Seção</p>
                <input className='inputDados' name="tituloSecao" type="text" placeholder='' />
                <br />
                <br />
                <p className='tituloInput'>Título Texto</p>
                <input className='inputDados' name="tituloTexto" type="text" placeholder='' />
                <br />
                <br />
                <p className='tituloInput'>Subtítulo Texto</p>
                <input className='inputDados' name="subtituloTexto" type="text" placeholder='' />
                <br />
                <br />
                <p className='tituloInput'>Texto</p>
                <input className='inputDados' name="texto" type="text" placeholder='' />
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

export function SustentabilidadeHome() {

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <div>
            <div className="boxForm">
                <p className='tituloInput'>Título da Seção</p>
                <input className='inputDados' name="tituloSecao" type="text" placeholder='' />
                <br />
                <br />
                <p className='tituloInput'>Texto</p>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                        height:3500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
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


