import React, { Component, useState } from "react";
import {BiImage} from "react-icons/bi"

export default function ImageUpload(){

    const [arquivo, setArquivo] = useState(null)

    fileChanger(event) {
        setArquivo(event.target.files[0])
        console.log(this.state.selectedFile)
        console.log(event)
    }

        return(
            <div id="inputFile">
                <input className="inputDados" id="file" type="file" accept="image/*" onChange={(event) => fileChanger(event)}/>
                <label htmlFor="file">          
                    <BiImage />        
                    <div>Selecionar Foto</div>
                </label>
                <img id="imagePreview" src={this.state.selectedFile} />  
            </div>
        )
    
}