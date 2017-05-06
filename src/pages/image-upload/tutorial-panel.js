import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Help from 'material-ui-icons/Help';


const s = {
    paperStyle: {
        padding: 16
    },
    paperTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    instructionImage: {
        width: '100%',
        height: 'auto'
    }
};

const TutorialPanel = () => (
    <Paper elevation={4} style={s.paperStyle}>
        <Typography type="title" className="u-margin-xs-bottom" style={s.paperTitle}>
            <Help />
            <span className="u-margin-xxs-left">Ohjeet</span>
        </Typography>
        <ol>
            <li>1. Ota kuva noin 10cm etäisyydeltä silmistäsi.</li>
            <img
                src={require('../../assets/images/otakuva.jpg')}
                alt="Ota kuva"
                style={s.instructionImage}
            />
            <li>2. Klikkaa lähetä.</li>
            <li>3. Tarkastele tuloksia.</li>
        </ol>
    </Paper>
);

export default TutorialPanel;
