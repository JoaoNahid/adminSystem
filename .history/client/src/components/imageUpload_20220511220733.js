import React, { Component, useState } from "react";
import {BiImage} from "react-icons/bi"

export default function ImageUpload(){

    const [arquivo, setArquivo] = useState(null)

    function fileChanger(event) {
        setArquivo(event.target.files[0])
        console.log(event)
    }

        return(
            <div id="inputFile">
                <input className="inputDados" id="file" type="file" accept="image/*" onChange={(event) => fileChanger(event)}/>
                <label htmlFor="file">          
                    <BiImage />        
                    <div>Selecionar Foto</div>
                </label>
                <img id="imagePreview" src={arquivo} />  
            </div>
        )
    
}