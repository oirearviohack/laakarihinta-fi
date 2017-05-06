/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const s = {
    paperStyle: {
        padding: 16
    },
    title: {
        display: 'flex',
        alignItems: 'center'
    },
    responsiveSymptomImage: {
        width: '100%',
        height: 150
    },
    symptomButton: {
        width: '100%'
    },
    card: {
        flex: '1 1 350px',
        margin: '0 6px 24px 6px'
    },
    firstCard: {
        marginTop: 0,
        marginBottom: 12
    },
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    cardPlaceholder: {
        height: 0,
        flex: '1 1 350px',
        margin: '0 6px 24px 6px'
    }
};

const SymptomSelection = (props) => {
    const goToPhotoUpload = () => {
        props.history.push('/kuva-analyysi');
    };

    return (
        <section style={s.cardsContainer}>
            <Card style={s.card}>
                <CardMedia>
                    <img
                        src={require('../../assets/images/laastari.jpg')}
                        style={s.responsiveSymptomImage}
                        alt="wound"
                        role="presentation"
                    />
                </CardMedia>
                <CardContent>
                    <Typography type="headline" component="h2">
                        Haava
                    </Typography>
                    <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel orci molestie diam efficitur mattis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button raised primary style={s.symptomButton}>Aloita hoitoarvio</Button>
                </CardActions>
            </Card>
            <Card style={s.card}>
                <CardMedia>
                    <img
                        src={require('../../assets/images/eyes.jpg')}
                        style={s.responsiveSymptomImage}
                        alt="eyes"
                        role="presentation"
                    />
                </CardMedia>
                <CardContent>
                    <Typography type="headline" component="h2">
                        Silmätulehdus
                    </Typography>
                    <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel orci molestie diam efficitur mattis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button raised primary style={s.symptomButton} onClick={goToPhotoUpload}>
                        Aloita hoitoarvio
                    </Button>
                </CardActions>
            </Card>
            <Card style={s.card}>
                <CardMedia>
                    <img
                        src={require('../../assets/images/ihottuma.jpg')}
                        style={s.responsiveSymptomImage}
                        alt="rash"
                        role="presentation"
                    />
                </CardMedia>
                <CardContent>
                    <Typography type="headline" component="h2">
                        Ihottuma
                    </Typography>
                    <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel orci molestie diam efficitur mattis.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button raised primary style={s.symptomButton}>Aloita hoitoarvio</Button>
                </CardActions>
            </Card>
            <div style={s.cardPlaceholder} />
            <div style={s.cardPlaceholder} />
            <div style={s.cardPlaceholder} />
            <div style={s.cardPlaceholder} />
            <div style={s.cardPlaceholder} />
            <div style={s.cardPlaceholder} />
            <div style={s.cardPlaceholder} />
        </section>
    );
};

SymptomSelection.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default SymptomSelection;
