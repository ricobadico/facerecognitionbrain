import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './icons8-brain-96.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25, perspective: 500 }} style={{ height: 120, width: 120 }} >
                 <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '3px'}} src={brain} alt='https://icons8.com' />
                 </div>
            </Tilt>
        </div>
    )
}

export default Logo;