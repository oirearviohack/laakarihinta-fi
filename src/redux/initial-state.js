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
        ...ajaxEntity,
        isEye: false,
        phrLink: ''
    }
};

export default initialState;
