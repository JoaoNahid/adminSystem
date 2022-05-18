import React, { Component } from "react";

export default class ImageUpload extends Component{

    state = {
        selectedFile: null
    }

    fileSelected = (event) => {
        this.setState = {
            selectedFile: event.target.files[0]
        }
    }

    render() {
        return(
            <div>
                <input className="inputDados" id="inputFile" type="file" accept="image/*" onChange={this.fileSelected}/>
                <label htmlFor="inputFile">Selecionar foto</label>
            </div>
        )
    }
}