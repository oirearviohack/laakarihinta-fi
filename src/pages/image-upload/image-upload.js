import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Help from 'material-ui-icons/Help';
import FileUpload from 'material-ui-icons/FileUpload';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import DropArea from './droparea';


const s = {
    paperStyle: {
        padding: 16
    },
    paperTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    controlButton: {
        width: '100%'
    },
    instructionImage: {
        width: '80%',
        height: 'auto',
        padding: 20
    }
};

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
          .then((json) => {
              console.log(json);
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
        const controlButtonContainerClass = classNames({
            'u-hidden': !this.state.imagePreviewUrl || this.state.submitInProgress,
            'u-margin-sm-top': true,
            row: true
        });

        return (
            <div className="row">
                <div className="col-s-6 u-margin-sm-bottom">
                    <Paper elevation={4} style={s.paperStyle}>
                        <Typography type="title" className="u-margin-xs-bottom" style={s.paperTitle}>
                            <Help />
                            <span className="u-margin-xxs-left">Ohjeet</span>
                        </Typography>
                        <ol>
                            <li>1. Ota kuva noin 10cm etäisyydeltä silmistäsi.</li>
                            <img
                                src={require('../../assets/images/otakuva.jpg')}
                                alt="Ota kuva"
                                style={s.instructionImage}
                            />
                            <li>2. Klikkaa lähetä.</li>
                            <li>3. Tarkastele tuloksia.</li>
                        </ol>
                    </Paper>
                </div>
                <div className="col-s-6">
                    <Paper elevation={4} style={s.paperStyle}>
                        <Typography type="title" className="u-margin-xs-bottom" style={s.paperTitle}>
                            <FileUpload />
                            <span className="u-margin-xxs-left">Lataa kuva</span>
                        </Typography>
                        <DropArea
                            imagePreviewUrl={this.state.imagePreviewUrl}
                            onImageChange={this.onImageChange}
                        />
                        <div className={controlButtonContainerClass}>
                            <div className="col-s-6 u-margin-xs-bottom">
                                <Button onClick={this.removeImage} style={s.controlButton} contrast raised>
                                    Uusi kuva
                                </Button>
                            </div>
                            <div className="col-s-6">
                                <Button onClick={this.onSubmitClicked} style={s.controlButton} primary raised>
                                    Lähetä
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default ImageUpload;
