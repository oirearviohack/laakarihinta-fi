import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import AddAPhoto from 'material-ui-icons/AddAPhoto';


const DropArea = props => (
    <section>
        {props.imagePreviewUrl}
        <Dropzone className="c-dropzone" onDrop={props.onImageChange}>
            <div>
                <AddAPhoto className="u-text-center" />
                <p>Ota tai lataa kuva</p>
            </div>
        </Dropzone>
    </section>
);

DropArea.propTypes = {
    imagePreviewUrl: PropTypes.string.isRequired,
    onImageChange: PropTypes.func.isRequired
};

export default DropArea;
