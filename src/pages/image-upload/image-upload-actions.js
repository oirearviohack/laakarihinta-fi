import fetch from 'isomorphic-fetch';

const RECOGNIZE_IMAGE = 'RECOGNIZE_IMAGE';
const RECOGNIZE_IMAGE_ERROR = 'RECOGNIZE_IMAGE_ERROR';
const RECOGNIZE_IMAGE_SUCCESS = 'RECOGNIZE_IMAGE_SUCCESS';

const recognizeImageStart = () => ({ type: RECOGNIZE_IMAGE });
const recognizeImageError = () => ({ type: RECOGNIZE_IMAGE_ERROR });
const recognizeImageSuccess = results => ({ type: RECOGNIZE_IMAGE_SUCCESS, results });

const recognizeImage = imageData => async (dispatch) => {
    try {
        dispatch(recognizeImageStart());
        const result = await fetch('/api/recognize-image', {
            method: 'POST',
            body: imageData,
            headers: { 'Content-Type': 'image/jpeg' }
        });
        if (result.ok) {
            dispatch(recognizeImageSuccess(await result.json()));
        } else {
            dispatch(recognizeImageError());
        }
    } catch (err) {
        dispatch(recognizeImageError());
    }
};

const imageUploadActions = {
    recognizeImage,
    actionTypes: {
        RECOGNIZE_IMAGE,
        RECOGNIZE_IMAGE_ERROR,
        RECOGNIZE_IMAGE_SUCCESS
    }
};

export default imageUploadActions;
