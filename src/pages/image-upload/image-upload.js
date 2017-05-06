import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import UploadPanel from './upload-panel';
import TutorialPanel from './tutorial-panel';
import imageUploadActions from './image-upload-actions';


const s = {
    paperStyle: {
        padding: 16
    }
};

class ImageUpload extends Component {

    static propTypes = {
        recognizeImage: PropTypes.func.isRequired,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired,
        imageUploadStore: PropTypes.shape().isRequired
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
        this.goToSuccessPage = ::this.goToSuccessPage;
    }

    componentDidUpdate() {
        const eyeDetected = this.props.imageUploadStore.lastUpdated &&
            !this.props.imageUploadStore.fetchError &&
            !this.props.imageUploadStore.isFetching &&
            this.props.imageUploadStore.isEye;
        if (eyeDetected) {
            this.goToSuccessPage();
        }
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

    goToSuccessPage() {
        this.props.history.push('/oirearvio');
    }

    removeImage() {
        this.setState({
            file: null,
            imagePreviewUrl: ''
        });
    }

    render() {
        const { isFetching, fetchError, isEye, lastUpdated } = this.props.imageUploadStore;
        const imageUploadPanels = (
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

        const loadingPanel = (
            <Paper elevation={4} style={s.paperStyle}>
                Analysoidaan kuvaa
                <LinearProgress />
            </Paper>
        );

        const eyeNotRecognizedPanel = (
            <Paper elevation={4} style={s.paperStyle}>
                Analysis error
            </Paper>
        );

        const serverErrorPanel = (
            <Paper elevation={4} style={s.paperStyle}>
                Server error
            </Paper>
        );

        return (
            <section>
                {isFetching && !isEye && !lastUpdated && loadingPanel}
                {!isFetching && !isEye && !lastUpdated && !fetchError && imageUploadPanels}
                {!isFetching && fetchError && serverErrorPanel}
                {!isFetching && lastUpdated && !isEye && eyeNotRecognizedPanel}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    imageUploadStore: state.imageUploadStore
});

const mapDispatchToProps = dispatch => ({
    recognizeImage: (imageData) => {
        dispatch(imageUploadActions.recognizeImage(imageData));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
