import React, { Component } from "react";
import {BiImage} from "react-icons/bi"

export default class ImageUpload extends Component{

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: ''
        }
        this.fileChanger = this.fileChanger.bind(this)
    }

    fileChanger(event) {
        this.setState = {
            selectedFile: URL.createObjectURL(event.target.files[0])
        }
        console.log(this.state.selectedFile)
        console.log(event)
    }

    render() {
        return(
            <div id="inputFile">
                <input className="inputDados" id="file" type="file" accept="image/*" onChange={this.fileChanger}/>
                <label htmlFor="file">          
                    <BiImage />        
                    <div>Selecionar Foto</div>
                </label>
                <img id="imagePreview" src={this.state.selectedFile} />  
            </div>
        )
    }
}