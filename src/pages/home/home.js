import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


const paperStyle = {
    padding: 16
};

const HomePage = () => (
    <div className="row">
        <div className="col-s-6">
            <Paper elevation={4} style={paperStyle}>
                <Typography type="title">
                    Ohjeet
                </Typography>
            </Paper>
        </div>
        <div className="col-s-6">
            <Paper elevation={4} style={paperStyle}>
                <Typography type="title">
                    Lataa kuva
                </Typography>
            </Paper>
        </div>
    </div>
);

export default HomePage;
