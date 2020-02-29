import React, { useContext } from 'react'
import './index.scss'
import image1 from '../../assets/wagner.png'
import image2 from '../../assets/vagner.png'
import { I18nContext } from '../../layouts/base-layout'

const SongSection3 = () => {
    const { songSection3 } = useContext(I18nContext)

    return (
        <section className='container song-section'>
            <div className="row">

                <div className="col-12">
                    <img style={{ top: '250px', right: '-150px' }} className='image' src={image1} alt="Rose" />
                    <img style={{ top: '0px', right: '330px' }} className='image' src={image2} alt="Rose" />
                    <h2>{songSection3.header}</h2>
                </div>

                <div className="col-md-7">
                    <p>{songSection3.text1}</p>
                    <p>{songSection3.text2}</p>
                    <p>{songSection3.text3}</p>
                    <p>{songSection3.text4}</p>
                </div>
                <div className="col-md-5 video-section">
                    <iframe className='youtube-iframe' title='Guillaume de Machaut' width="260" src="https://www.youtube.com/embed/kKMBx6x-lOI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <i>{songSection3.videoCaption}</i>
                </div>
            </div>
        </section >
    )
}


export default SongSection3