import React, { Component, useState } from "react";
import {BiImageAdd} from "react-icons/bi"

export default function ImageUpload(){

    const [arquivo, setArquivo] = useState(null)

    function fileChanger(event) {
        setArquivo(URL.createObjectURL(event.target.files[0]))
    }

        return(
            <div id="inputFile">
                <input className="inputDados" id="file" type="file" accept="image/*" onChange={(event) => fileChanger(event)}/>
                <label htmlFor="file">          
                    <BiImageAdd />        
                    <div>Selecionar Foto</div>
                </label>
                <img id="imagePreview" src={arquivo} />  
            </div>
        )
    
}