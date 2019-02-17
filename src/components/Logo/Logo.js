import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './Logo2.png';

const Logo = () => {
    return (
    <div className='ma4 mt0'>
    <Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
         <div className="Tilt-inner pa3"> <img src={brain} style={{padding: '5px'}} alt='logo' title='SmartBrain' /> </div>
    </Tilt>
    </div>
    );


}

export default Logo;