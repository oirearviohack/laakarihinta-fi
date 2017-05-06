import React, { Component } from 'react';
import UploadPanel from './upload-panel';
import TutorialPanel from './tutorial-panel';


class ImageUpload extends Component {

    constructor() {
        super();
        this.state = {
            file: null,
            imagePreviewUrl: '',
            submitInProgress: false
        };

        this.onImageChange = ::this.onImageChange;
        this.onSubmitClicked = ::this.onSubmitClicked;
        this.removeImage = ::this.removeImage;
    }

    onImageChange(files) {
        const reader = new FileReader();
        const file = files ? files[0] : null;
        reader.onloadend = () => {
            this.setState({ file, imagePreviewUrl: reader.result });
        };

        this.setState({ file: null, imagePreviewUrl: '' });
        reader.readAsDataURL(file);
    }

    onSubmitClicked() {
        this.setState({ submitInProgress: true });
        fetch('/api/recognize-image', {
            method: 'POST',
            body: this.state.imagePreviewUrl,
            headers: { 'Content-Type': 'image/jpeg' }
        }).then(result => result.json())
          .then(() => {
              this.setState({ submitInProgress: false });
          });
    }

    removeImage() {
        this.setState({
            file: null,
            imagePreviewUrl: ''
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-s-6 u-margin-sm-bottom">
                    <TutorialPanel />
                </div>
                <div className="col-s-6">
                    <UploadPanel
                        imagePreviewUrl={this.state.imagePreviewUrl}
                        removeImage={this.removeImage}
                        onSubmitClicked={this.onSubmitClicked}
                        onImageChange={this.onImageChange}
                        submitInProgress={this.state.submitInProgress}
                    />
                </div>
            </div>
        );
    }
}

export default ImageUpload;
