import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import img1 from '../assets/IMG-20250221-WA0021.jpg';
import img2 from '../assets/dbe9cfd1-848e-40fd-a2d9-09199c5c6f12.jpg';
import img3 from '../assets/f763fbfa-6e54-49f0-b991-a41fe5b10213.jpg';

const slideImages = [
    { url: img1, caption: 'First Slide' },
    { url: img2, caption: 'Second Slide' },
    { url: img3, caption: 'Third Slide' }
];

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundSize: 'cover',
    opacity: '1'
};

const Slider = () => {
    return (
        <div className='slide-container'>
            <Fade>
                {slideImages.map((img, inx) => (
                    <div key={inx}>
                        <div style={{ ...divStyle, backgroundImage: `url(${img.url})` }}>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default Slider;