import React, { Component } from "react";

class ImageUpload extends Component{

    fileSelected = event => {
        console.log(event)
    }

    render() {
        return(
            <div>
                <input type="file" />
            </div>
        )
    }
}