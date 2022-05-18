import React, { Component } from "react";
import {BiImage} from "react-icons/bi"

export default class ImageUpload extends Component{

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null
        }
    }

    fileSelected = (event) => {
        this.setState = {
            selectedFile: URL.createObjectURL(event.target.files[0])
        }
        console.log(event.target.files[0])
    }

    render() {
        return(
            <div id="inputFile">
                <input className="inputDados" id="file" type="file" accept="image/*" onChange={this.fileSelected}/>
                <label htmlFor="file">          
                    <BiImage />        
                    <div>Selecionar Foto</div>
                </label>
                <img id="imagePreview" src={this.state.selectedFile} />  
            </div>
        )
    }
}