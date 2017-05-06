import { combineReducers } from 'redux';
import localeReducer from '../components/locale/locale-reducer';
import imageUploadReducer from '../pages/image-upload/image-upload-reducer';


export default combineReducers({
    localeStore: localeReducer,
    imageUploadStore: imageUploadReducer
});
