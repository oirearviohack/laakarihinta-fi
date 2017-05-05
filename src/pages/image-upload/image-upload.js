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
        padding: '20px'
    }
};

class ImageUpload extends Component {

    static _fileUploaded(e) {
        console.log(e.target);
        console.log(e.target.files);
        const reader = new FileReader();
        reader.onload = (event) => {
            console.log(event.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    static onSubmitClicked() {
        const body = {
            foo: 'bar'
        };
        fetch('/api/recognize-image-2', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        });
    }

    constructor() {
        super();
        this.state = {
            file: null,
            imagePreviewUrl: ''
        };

        this.onImageChange = ::this.onImageChange;
        this.removeImage = ::this.removeImage;
    }

    onImageChange(files) {
        const reader = new FileReader();
        const file = files ? files[0] : null;
        reader.onloadend = () => {
            this.setState({ file, imagePreviewUrl: reader.result });
        };

        reader.readAsDataURL(file);
    }

    removeImage() {
        this.setState({
            file: null,
            imagePreviewUrl: ''
        });
    }

    render() {
        const controlButtonContainerClass = classNames({
            'u-hidden': !this.state.imagePreviewUrl,
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
                        <Typography type="body1">
                            <p>1. Ota kuva noin 10cm etäisyydeltä silmistäsi.</p>
                            <img
                                src={require('../../assets/images/otakuva.jpg')}
                                alt="Ota kuva"
                                style={s.instructionImage}
                            />
                            <p>2. Klikkaa lähetä.</p>
                            <p>3. Tarkastele tuloksia.</p>
                        </Typography>
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
                                <Button onClick={ImageUpload.onSubmitClicked} style={s.controlButton} primary raised>
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
