import React, { Component } from "react";

export default class ImageUpload extends Component{

    fileSelected = (event) => {
        console.log(event)
    }

    render() {
        return(
            <div>
                <input type="file" onChange={this.fileSelected}/>
            </div>
        )
    }
}