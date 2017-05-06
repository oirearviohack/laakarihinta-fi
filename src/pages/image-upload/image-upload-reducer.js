import initialState from '../../redux/initial-state';
import imageUploadActions from './image-upload-actions';

const imageUploadReducer = (imageUploadStore = initialState.imageUploadStore, action) => {
    switch (action.type) {
        case imageUploadActions.actionTypes.RECOGNIZE_IMAGE:
            return {
                ...imageUploadStore,
                isFetching: true,
                fetchError: false,
                isEye: false,
                phrLink: ''
            };
        case imageUploadActions.actionTypes.RECOGNIZE_IMAGE_ERROR:
            return {
                ...imageUploadStore,
                isFetching: false,
                fetchError: true
            };
        case imageUploadActions.actionTypes.RECOGNIZE_IMAGE_SUCCESS:
            return {
                ...imageUploadStore,
                isFetching: false,
                fetchError: false,
                isEye: action.results.isEye,
                phrLink: 'http://laakarihinta.fi',
                lastUpdated: new Date().getTime()
            };
        case imageUploadActions.actionTypes.CLEAR_STATE:
            return {
                isFetching: false,
                lastUpdated: null,
                fetchError: false,
                isEye: false,
                phrLink: ''
            };
        default:
            return imageUploadStore;
    }
};

export default imageUploadReducer;
