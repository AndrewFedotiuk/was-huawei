import React from 'react'
import './index.scss'
import image from '../../assets/box.png'

const Banner = ({ images, text }) => (
    <div className='container banner'>
        <div className="row">
            <p className="col-12 col-lg-5 text">Точный алгоритм подавления шума FreeBuds 3 позволит вам слушать песни Сапфо даже на берегу моря в шторм. Только осторожно, Посейдон тоже такие захочет. </p>
            <div className="col image-wrapper">
                <img className='image' src={image} alt="Adds"/>
            </div>
        </div>
    </div>
)

export default Banner