import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui-icons/Menu';


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
                Hoitoarvio kuvan avulla
            </Typography>
            <IconButton>
                <Menu />
            </IconButton>
        </Toolbar>
    </AppBar>
);


export default Header;

