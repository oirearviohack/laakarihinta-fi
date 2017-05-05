import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ExitToApp from 'material-ui-icons/ExitToApp';


const s = {
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
};

const Header = () => (
    <AppBar className={s.header}>
        <Toolbar style={s.toolBar}>
            <Typography type="title">
                Hoidearvio kuvan avulla
            </Typography>
            <IconButton>
                <ExitToApp />
            </IconButton>
        </Toolbar>
    </AppBar>
);


export default Header;

