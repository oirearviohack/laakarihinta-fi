import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UploadPanel from './upload-panel';
import TutorialPanel from './tutorial-panel';
import imageUploadActions from './image-upload-actions';


class ImageUpload extends Component {

    static propTypes = {
        recognizeImage: PropTypes.func.isRequired
    };

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
        this.props.recognizeImage(this.state.imagePreviewUrl);
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

const mapStateToProps = state => ({
    isFetching: state.imageUploadStore.isFetching,
    fetchError: state.imageUploadStore.fetchError
});

const mapDispatchToProps = dispatch => ({
    recognizeImage: (imageData) => {
        dispatch(imageUploadActions.recognizeImage(imageData));
    }
});

const ImageUploadWithState = connect(null, mapDispatchToProps)(ImageUpload);

export default ImageUploadWithState;
