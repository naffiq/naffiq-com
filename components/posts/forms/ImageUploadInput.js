import React, {Component} from 'react';

class ImageUploadInput extends Component {
    _fileUpload(event) {
        const file = event.target.files[0];
        console.log('fileUploadEvent', file);
        
        const data = new FormData();
        data.append(file.name, file);
        fetch(process.env.REACT_APP_FILE_UPLOAD_URL, {
            method: 'POST',
            body: data
        }).then(response => {
            console.log(response);
        }).catch(error => console.log('error', error));
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="imageFile">Изображение</label>
                <input type="file" onChange={this._fileUpload.bind(this)} name="imageFile"/>
            </div>
        );
    }
}

export default ImageUploadInput;