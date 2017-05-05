import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';


const Header = () => (
    <AppBar className="c-header">
        <Toolbar>
            <Typography type="title" className="c-header__title">Hoidearvio kuvanavulla</Typography>
            <IconButton className="c-header__icon">
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
);


export default Header;

