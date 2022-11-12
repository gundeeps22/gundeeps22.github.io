import React from 'react';
import Header from './Header';

function About() {
    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh', flexDirection: 'column' }}>
            <Header show={true}/>
            <div>Hi I'm Gundeep</div>
        </div>
    );
}

export default About;