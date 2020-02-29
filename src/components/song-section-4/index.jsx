import React, { useContext } from 'react'
import './index.scss'
import image1 from '../../assets/man.png'
import { I18nContext } from '../../layouts/base-layout'

const SongSection4 = () => {
    const { songSection4 } = useContext(I18nContext)

    return (
        <section className='container song-section'>
            <div className="row">
                <div className="col-12">
                    <img style={{ top: '-100px', right: '-250px', transform: 'rotate(-40deg)' }} className='image' src={image1} alt="Man" />
                    <img style={{ top: '500px', right: '-250px' }} className='image' src={image1} alt="Man" />
                    <img style={{ bottom: '-200px', left: '-300px', transform: 'rotate(40deg)' }} className='image' src={image1} alt="Man" />
                    <img style={{ bottom: '250px', left: '-250px' }} className='image' src={image1} alt="Man" />
                    <h2>{songSection4.header}</h2>
                </div>
                <div className="col-md-7">
                    <p>{songSection4.text1}</p>
                    <p>{songSection4.text2}</p>
                    <p>{songSection4.text3}</p>
                </div>
                <div className="col-md-5 video-section">
                    <iframe className='youtube-iframe' title='Из фильма «Дорога на сечь»' width="260" src="https://www.youtube.com/embed/kKMBx6x-lOI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <i>{songSection4.videoCaption1}</i>
                    <iframe className='youtube-iframe' title='Anatoliy Solovianenko' width="260" src="https://www.youtube.com/embed/kKMBx6x-lOI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <i>{songSection4.videoCaption2}</i>
                </div>
            </div>
        </section >
    )
}


export default SongSection4