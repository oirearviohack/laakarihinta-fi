import _ from 'lodash';
import fetch from '../../lib/shared/isomorphic-fetch-wrapper';


const GET_LOCALE = 'GET_LOCALE';
const GET_LOCALE_ERROR = 'GET_LOCALE_ERROR';
const GET_LOCALE_SUCCESS = 'GET_LOCALE_SUCCESS';

const getLocaleStart = () => ({ type: GET_LOCALE });
const getLocaleError = () => ({ type: GET_LOCALE_ERROR });
const getLocaleSuccess = (strings, locale) => ({ type: GET_LOCALE_SUCCESS, strings, locale });

const stringsNeedToBeFetched = ({ localeStore }) => __DEV__ || _.isEmpty(localeStore.strings) || localeStore.fetchError;

const getLocale = locale => async (dispatch, getState) => {
    if (!locale) throw new Error('Need locale as a parameter');
    if (stringsNeedToBeFetched(getState())) {
        try {
            dispatch(getLocaleStart());
            dispatch(getLocaleSuccess(await fetch(`/api/locales/${locale}`), locale));
        } catch (err) {
            dispatch(getLocaleError(err.message));
        }
    }
};

const localeActions = {
    getLocale,
    actionTypes: {
        GET_LOCALE,
        GET_LOCALE_ERROR,
        GET_LOCALE_SUCCESS
    }
};

export default localeActions;
