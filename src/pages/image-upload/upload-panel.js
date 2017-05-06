import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
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
    }
};

const UploadPanel = (props) => {
    const controlButtonContainerClass = classNames({
        'u-hidden': !props.imagePreviewUrl || props.submitInProgress,
        'u-margin-sm-top': true,
        row: true
    });

    return (
        <Paper elevation={4} style={s.paperStyle}>
            <Typography type="title" className="u-margin-xs-bottom" style={s.paperTitle}>
                <FileUpload />
                <span className="u-margin-xxs-left">Lataa kuva</span>
            </Typography>
            <DropArea
                imagePreviewUrl={props.imagePreviewUrl}
                onImageChange={props.onImageChange}
            />
            <div className={controlButtonContainerClass}>
                <div className="col-s-6 u-margin-xs-bottom">
                    <Button onClick={props.removeImage} style={s.controlButton} contrast raised>
                        Uusi kuva
                    </Button>
                </div>
                <div className="col-s-6">
                    <Button onClick={props.onSubmitClicked} style={s.controlButton} primary raised>
                        Lähetä
                    </Button>
                </div>
            </div>
        </Paper>
    );
};

UploadPanel.propTypes = {
    imagePreviewUrl: PropTypes.string.isRequired,
    onImageChange: PropTypes.func.isRequired,
    removeImage: PropTypes.func.isRequired,
    onSubmitClicked: PropTypes.func.isRequired,
    submitInProgress: PropTypes.bool.isRequired
};

export default UploadPanel;
