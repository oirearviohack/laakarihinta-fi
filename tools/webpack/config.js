// Disable CSSModules here
const CSSModules = false;

// Disable js lint error terminating here
const eslint = true;

// Disable style lint error terminating here
const stylelint = false;

// Register vendors here
const vendor = [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'redux-thunk',
    'react-hot-loader',
    'react-router-dom',
    'react-helmet',
    'redbox-react',
    'lodash'
];

module.exports = {
    eslint,
    stylelint,
    vendor,
    CSSModules
};
