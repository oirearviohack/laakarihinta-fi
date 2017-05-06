import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Done from 'material-ui-icons/Done';


const s = {
    resultPanel: {
        display: 'flex',
        width: '100%',
        height: 400,
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        padding: 16
    },
    successTick: {
        color: 'green',
        width: 30,
        height: 30
    }
};

const ResultPage = () => (
    <Paper elevation={4} style={s.resultPanel}>
        <div>
            <Typography type="display1" className="u-margin-xxs-bottom">
                <Done style={s.successTick} />
                <span className="u-margin-xxs-left">
                    Onnistunut kuva silmästä!
                </span>
            </Typography>
            <Typography type="body1">
                <span className="u-margin-xxs-right">
                    Olemme lähettäneet kuvan lääkärin tarkasteltavaksi. Kuvaa pääset katsomaan
                </span>
                <a href="https://laakarihinta.fi">täältä</a>.
            </Typography>
        </div>
    </Paper>
);

export default ResultPage;
