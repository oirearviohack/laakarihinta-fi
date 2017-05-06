import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Replay from 'material-ui-icons/Replay';
import ExitToApp from 'material-ui-icons/ExitToApp';
import imageUploadActions from '../../pages/image-upload/image-upload-actions';


const s = {
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
};

const Header = ({ clearState }) => {
    const onBackButtonClicked = () => clearState();
    return (
        <AppBar className={s.header}>
            <Toolbar style={s.toolBar}>
                <Typography type="title">
                    VisuDg
                </Typography>
                <nav role="navigation">
                    <Link to="/oirevaihtoehdot" onClick={onBackButtonClicked}>
                        <IconButton>
                            <Replay />
                        </IconButton>
                    </Link>
                    <a href="https://oda.medidemo.fi">
                        <IconButton>
                            <ExitToApp />
                        </IconButton>
                    </a>
                </nav>
            </Toolbar>
        </AppBar>);
};

Header.propTypes = {
    clearState: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    clearState: () => {
        dispatch(imageUploadActions.clearState());
    }
});

const HeaderWithState = connect(null, mapDispatchToProps)(Header);

export default HeaderWithState;
