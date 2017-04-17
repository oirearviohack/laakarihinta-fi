import { combineReducers } from 'redux';
import localeReducer from '../components/locale/locale-reducer';


export default combineReducers({
    localeStore: localeReducer
});
