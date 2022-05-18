import React, { Component } from "react";

export default class ImageUpload extends Component{

    fileSelected = (event) => {
        console.log(event.target.files[0])
    }

    render() {
        return(
            <div>
                <input type="file" onChange={this.fileSelected}/>
            </div>
        )
    }
}