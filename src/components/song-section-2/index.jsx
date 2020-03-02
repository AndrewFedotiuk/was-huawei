import React, { useContext } from 'react'
import { I18nContext } from '../../layouts/base-layout'
import image1 from '../../assets/rose.png'
import image2 from '../../assets/demasho.png'
import './index.scss'
import SongIndexHelper from "../song-index-helper";

const SongSection2 = () => {
    const { songSection2 } = useContext(I18nContext)

    return (
        <section className="container song-section song-section-2">
            <div className="row">
                <div className="col-12">
                    {SongIndexHelper(2)}
                    <h2>{songSection2.header}</h2>
                    <p><i>{songSection2.headerCaption}</i></p>
                    <img style={{ top: '300px', left: '-150px' }} className='image' src={image1} alt="Rose" />
                    <img style={{ top: '300px', right: '-150px' }} className='image' src={image2} alt="Demasho" />
                </div>
                <div className="col-md-7">
                    <p>{songSection2.text1}</p>
                    <p>{songSection2.text2}</p>
                    <p>{songSection2.text3}</p>
                </div>
                <div className="col-md-5 video-section">
                    <iframe className='youtube-iframe' title='Guillaume de Machaut' width="260" src="https://www.youtube.com/embed/kKMBx6x-lOI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <i>{songSection2.videoCaption1}</i>
                    <iframe className='youtube-iframe' title='Le Voir Dit' width="260" src="https://www.youtube.com/embed/kKMBx6x-lOI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <i>{songSection2.videoCaption2}</i>
                </div>
            </div>
        </section>
    )
}

export default SongSection2
