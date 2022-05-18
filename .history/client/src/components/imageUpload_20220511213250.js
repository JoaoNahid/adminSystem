import React, { Component } from "react";
import {BiImage} from "react-icons/bi"

export default class ImageUpload extends Component{

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    fileSelected = (event) => {
        this.setState = {
            selectedFile: event.target.files[0]
        }
        console.log(event.target.files[0])
            var file = new FileReader();
            file.onload = function (e) {
                document.getElementById("imagePreview").src = e.target.result;
            };
            file.readAsDataURL(this.files[0]);
    }

    render() {
        return(
            <div id="inputFile">
                <input className="inputDados" id="file" type="file" accept="image/*" onChange={this.fileSelected}/>
                <label htmlFor="file">          
                    <BiImage />        
                    <div>Selecionar Foto</div>
                </label>
                <img id="imagePreview" src=""/>  
            </div>
        )
    }
}