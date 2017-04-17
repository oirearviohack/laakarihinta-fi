import React, { PropTypes } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import en from 'react-intl/locale-data/en';
import fi from 'react-intl/locale-data/fi';


addLocaleData([...en, ...fi]);
const LocaleProvider = props => (
    <IntlProvider locale={props.selectedLocale} messages={props.strings}>
        {props.children}
    </IntlProvider>
);

LocaleProvider.propTypes = {
    children: PropTypes.element.isRequired,
    strings: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    selectedLocale: PropTypes.string.isRequired
};

const mapStateToprops = store => ({
    strings: store.localeStore.strings,
    selectedLocale: store.localeStore.locale
});

export default connect(mapStateToprops)(LocaleProvider);
