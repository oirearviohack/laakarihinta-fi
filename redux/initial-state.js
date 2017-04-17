const ajaxEntity = {
    isFetching: false,
    lastUpdated: null,
    fetchError: false
};

const initialState = {
    localeStore: {
        ...ajaxEntity,
        locale: null,
        strings: {}
    }
};

export default initialState;
