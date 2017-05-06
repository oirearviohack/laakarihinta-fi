/* eslint-disable max-len, eslint-disable-line, react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

const symptoms = [
    {
        src: require('../../assets/images/laastari.jpg'),
        alt: 'wound',
        title: 'Haava'
    },
    {
        src: require('../../assets/images/eyes.jpg'),
        alt: 'eyes',
        title: 'Silmätulehdus'
    },
    {
        src: require('../../assets/images/ihottuma.jpg'),
        alt: 'rash',
        title: 'Ihottuma'
    }
];

const SymptomCard = ({ src, alt, title }) => (
    <Card style={s.card}>
        <CardMedia>
            <img src={src} style={s.responsiveSymptomImage} alt={alt} role="presentation" />
        </CardMedia>
        <CardContent>
            <Typography type="headline" component="h2">
                {title}
            </Typography>
            <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel orci molestie diam efficitur mattis.
            </Typography>
        </CardContent>
        <CardActions>
            <Link to="/kuva-analyysi" style={s.symptomButton}>
                <Button raised primary style={s.symptomButton}>Aloita hoitoarvio</Button>
            </Link>
        </CardActions>
    </Card>
);

SymptomCard.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

const SymptomSelection = () => (
    <section style={s.cardsContainer}>
        {symptoms.map((symptom, index) => <SymptomCard key={index} {...symptom} />)}
        <div style={s.cardPlaceholder} />
        <div style={s.cardPlaceholder} />
        <div style={s.cardPlaceholder} />
        <div style={s.cardPlaceholder} />
        <div style={s.cardPlaceholder} />
        <div style={s.cardPlaceholder} />
        <div style={s.cardPlaceholder} />
        <div style={s.cardPlaceholder} />
    </section>
);

export default SymptomSelection;
