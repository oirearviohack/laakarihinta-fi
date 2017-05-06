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
        margin: '0 0 24px 0'
    },
    firstCard: {
        marginTop: 0,
        marginBottom: 12
    }
};

const SymptomSelection = (props) => {
    const goToPhotoUpload = () => {
        props.history.push('/kuva-analyysi');
    };

    return (
        <div className="row">
            <div className="col-s-4">
                <Card style={s.firstCard}>
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
            </div>
            <div className="col-s-4">
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
            </div>
            <div className="col-s-4">
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
            </div>
        </div>
    );
};

SymptomSelection.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default SymptomSelection;
