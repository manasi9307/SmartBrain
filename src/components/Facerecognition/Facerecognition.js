import React from 'react';
import './Facerecognition.css';

const Facerecognition = ({imageUrl,box}) => {
    return(
    <div className='center pa2'>
    <div className='absolute mt2'>
    <img id='inputimage' src="imageUrl" alt='output' width='500px' height='auto' />
    <div className='bounding-box' style={{top: box.leftCol,right: box.topRow, bottom: box.rightCol, left: box.botRow}}>

    </div>
    </div>
      
    </div>
    );
}






export default Facerecognition;