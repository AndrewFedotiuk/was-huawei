import React, { useContext } from 'react'
import './index.scss'
import image1 from '../../assets/photo.png'
import box from '../../assets/box-h.png'
import { I18nContext } from '../../layouts/base-layout'
import SongIndexHelper from "../song-index-helper";
import WithHeaderAnimation from '../WithHeaderAnimation'


const images = [...new Float32Array(4)].map(
    (_, index) => <img key={index} style={{ opacity: `${0.35 - index * 0.1}` }} src={image1} alt="Winner" />
);


const SongSection4 = () => {
    const { songSection5 } = useContext(I18nContext);

    return (
        <section className='container song-section song-section-5'>
            <div className="row">
                <div className="col-12">
                    {/*<h2 className='col col-sm-8'>{songSection5.header}</h2>*/}
                    {WithHeaderAnimation([songSection5.header])}

                    <div className="image-wrapper">
                        <img src={image1} alt="Winner" />
                        {images}
                        <img style={{bottom: '0px', right:'50%', transform: 'translateX(50%)'}} className='position-absolute' src={box} alt="Headphones" />
                    </div>
                    {SongIndexHelper(5)}

                </div>
                <div className="col-md-7">
                    <p>{songSection5.text1}</p>
                    <p>{songSection5.text2}</p>
                    <p>{songSection5.text3}</p>
                </div>
                <div className="col-md-5 video-section">
                    <iframe className='youtube-iframe' title='Из фильма «Дорога на сечь»' width="260" src="https://www.youtube.com/embed/kKMBx6x-lOI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <i>{songSection5.videoCaption}</i>
                </div>
            </div>
        </section >
    )
}


export default SongSection4
