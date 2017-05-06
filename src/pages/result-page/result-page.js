import React from 'react';

const s = {
    result: {
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: '200px'
    }
};

const ResultPage = () => (
    <div style={s.result}>
        <p>Onnistunut kuva silmästä</p>
        <p>Olemme lähettäneet kuvan lääkärin tarkasteltavaksi. Kuvaa pääset katsomaan
            <a href="https://laakarihinta.fi"> täältä</a>
        </p>
    </div>
);

export default ResultPage;
