import fetch from 'isomorphic-fetch';
import qs from 'qs';
import config from '../../config';


const pathWithQueryString = (url, query) => `${url}?${qs.stringify(query)}`;
const responseIsJson = (response) => {
    const contentType = response.headers.get('content-type');
    return contentType ? contentType.includes('application/json') : false;
};

const isomorphicFetchWrapper = async (path, options = {}) => {
    const modifiedPath = options.query ? pathWithQueryString(path, options.query) : path;
    const modifiedOptions = {
        ...options
    };

    const response = await fetch(`https://${config.host}:${config.port}${modifiedPath}`, modifiedOptions);

    if (responseIsJson(response)) {
        return await response.json(); // eslint-disable-line no-return-await
    }
    return response;
};

export default isomorphicFetchWrapper;
