import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Help from 'material-ui-icons/Help';
import FileUpload from 'material-ui-icons/FileUpload';
import Button from 'material-ui/Button';
import DropArea from './droparea';


const s = {
    paperStyle: {
        padding: 16
    },
    paperTitle: {
        display: 'flex',
        alignItems: 'center'
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

    static _submitClicked() {
        console.log('lol');
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
    }

    onImageChange(e) {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file);
    }

    render() {
        const submitDisabled = !this.state.file;
        return (
            <div className="row">
                <div className="col-s-6 u-margin-sm-bottom">
                    <Paper elevation={4} style={s.paperStyle}>
                        <Typography type="title" className="u-margin-xs-bottom" style={s.paperTitle}>
                            <Help />
                            <span className="u-margin-xxs-left">Ohjeet</span>
                        </Typography>
                        <Typography type="body1">
                            Lorea ipsudem ohjeet diipadapapapa dspapaspd apdpas pdaspd aspdpaspd sapdaspdp aspdaspdasp
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
                        <input type="file" accept="image/*" capture onChange={this.onImageChange} />
                        <Button raised onClick={ImageUpload.onSubmitClicked} disabled={submitDisabled}>Lähetä</Button>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default ImageUpload;
