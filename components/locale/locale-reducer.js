import initialState from '../../redux/initial-state';
import localeActions from './locale-actions';


const localeReducer = (localeStore = initialState.localeStore, action) => {
    switch (action.type) {
        case localeActions.actionTypes.GET_LOCALE:
            return {
                ...localeStore,
                isFetching: true,
                fetchError: false
            };
        case localeActions.actionTypes.GET_LOCALE_ERROR:
            return {
                ...localeStore,
                isFetching: false,
                fetchError: true
            };
        case localeActions.actionTypes.GET_LOCALE_SUCCESS:
            return {
                ...localeStore,
                isFetching: false,
                lastUpdated: new Date().getTime(),
                locale: action.locale,
                strings: action.strings
            };
        default:
            return localeStore;
    }
};

export default localeReducer;
