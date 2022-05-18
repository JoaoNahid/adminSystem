import React, { Component } from "react";

export default class ImageUpload extends Component{

    state = {
        selectedFile: null
    }

    fileSelected = (event) => {
        console.log(event.target.files[0])
    }

    fileUpload = () => {
        this.setState = {
            selectedFile: event.target.files[0]
        }
    }

    render() {
        return(
            <div>
                <input type="file" onChange={this.fileSelected}/>
                <button onClick={this.fileUpload}>Upload</button>
            </div>
        )
    }
}