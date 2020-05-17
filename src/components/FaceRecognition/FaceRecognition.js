import React from 'react';
import { DivMode } from 'react-particles-js';

const FaceRecognition = ({imageUrl}) => {
    return(
        <div className='center'>
            <img src={imageUrl} alt=""/>
        </div>
    );
}

export default FaceRecognition;