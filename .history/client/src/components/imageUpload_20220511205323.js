import React, { Component } from "react";

export default class ImageUpload extends Component{

    fileSelected = (event) => {
        console.log(event.target.files[0])
    }

    fileUpload = () => {

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