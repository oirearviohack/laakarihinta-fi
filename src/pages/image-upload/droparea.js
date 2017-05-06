import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import AddAPhoto from 'material-ui-icons/AddAPhoto';
import classNames from 'classnames';


const DropArea = (props) => {
    const dropzoneVisibility = classNames({
        'c-dropzone': true,
        'u-hidden': !!props.imagePreviewUrl
    });

    return (
        <section>
            <img
                src={props.imagePreviewUrl}
                alt=""
                role="presentation"
                className="u-img-responsive u-margin-sm-bottom"
            />
            <Dropzone className={dropzoneVisibility} onDrop={props.onImageChange}>
                <div>
                    <AddAPhoto className="u-text-center" />
                    <p>Ole hyvä ja lataa tai ota kuva.</p>
                </div>
            </Dropzone>
        </section>
    );
};

DropArea.propTypes = {
    imagePreviewUrl: PropTypes.string.isRequired,
    onImageChange: PropTypes.func.isRequired
};

export default DropArea;
