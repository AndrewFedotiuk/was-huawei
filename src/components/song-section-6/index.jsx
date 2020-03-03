import React, { useContext } from 'react'
import './index.scss'
import image1 from '../../assets/photo2.png'
import boxImage from '../../assets/box-v.png'
import { I18nContext } from '../../layouts/base-layout'
import SongIndexHelper from "../song-index-helper";


const SongSection6 = () => {
    const { songSection6 } = useContext(I18nContext)

    return (
        <section className='container song-section song-section-5'>
            <div className="row">
                <div className="col-12">
                    <img className='image' style={{ bottom: '60px', right: '0' }} src={image1} alt="Winner" />

                    <h2>{songSection6.header}</h2>
                    {SongIndexHelper(6)}

                </div>
                <div className="col-md-7">
                    {
                        Array(6).fill(0).map((_, index) => <p key={index}>{songSection6[`text${index + 1}`]}</p>)
                    }
                </div>
                <div className="col-md-5 video-section">
                    <iframe className='youtube-iframe' title='Из фильма «Дорога на сечь»' width="260" src="https://www.youtube.com/embed/kKMBx6x-lOI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <i>{songSection6.videoCaption}</i>
                </div>
            </div>
            <div className="row">
                <img className='col-md-6 offset-md-6 m' src={boxImage} alt="Headphones" />
            </div>
        </section >
    )
};


export default SongSection6
