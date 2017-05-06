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
    },
    imageUploadStore: {
        isFetching: false,
        fetchError: false,
        isEye: false,
        phrLink: ''
    }
};

export default initialState;
