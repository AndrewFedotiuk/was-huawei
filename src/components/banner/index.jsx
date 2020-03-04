import React from 'react'
import './index.scss'

const Banner = ({ image, text }) => (
    <div className='container banner'>
        <div className="row">
            <p className="col-12 col-lg-5 text">{text}</p>
            <div className="col image-wrapper">
                <img className='image' src={image} alt="Adds"/>
            </div>
        </div>
    </div>
);

export default Banner
