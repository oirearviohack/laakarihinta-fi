import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Replay from 'material-ui-icons/Replay';
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
                VisuDg
            </Typography>
            <nav role="navigation">
                <Link to="/oirevaihtoehdot">
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
    </AppBar>
);

export default Header;
