import React from 'react';
import './Facerecognition.css';

const Facerecognition = ({imageUrl,box}) => {
    return(
    <div className='center pa2'>
    <div className='absolute mt2'>
    <img id='inputimage' src="imageUrl" alt='output' width='500px' height='auto' />
    <div className='bounding-box'>

    </div>
    </div>
      
    </div>
    );
}






export default Facerecognition;