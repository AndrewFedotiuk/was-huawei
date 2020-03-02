import React, { useContext } from 'react'
import { I18nContext } from '../../layouts/base-layout'
import saphoImage from '../../assets/sapho.png'
import starImage from '../../assets/star.png'
import './index.scss'
import SongIndexHelper from "../song-index-helper";

const SongSection1 = () => {
    const { songSection1 } = useContext(I18nContext)

    return (
        <section className="container song-section song-section1">
            <div className="row">
                <div className="image-wrapper">
                    <img className='sapho-image' src={saphoImage} alt="Sapho" />
                    <img className='star-image' src={starImage} alt="star" />
                    <p className="image-caption"><i>{songSection1.imageCaption}</i></p>
                </div>
                <div className="header-wrapper">
                    <h2 className='col'>{songSection1.header}</h2>
                    {SongIndexHelper(1)}
                </div>
                <div className="col-md-7">
                    <p>{songSection1.text1}</p>
                    <p>{songSection1.text2}</p>
                    <p>{songSection1.text3}</p>
                    <p>{songSection1.text4}</p>
                    <div className="poem">
                        <p><b>{songSection1.poemHeader}</b></p>
                        <p dangerouslySetInnerHTML={{ __html: songSection1.poem }}/>
                    </div>
                    <p>{songSection1.text5}</p>
                </div>

                <div className="col-md-5 video-section">
                    <iframe className='youtube-iframe' title='video1' width="260" src="https://www.youtube.com/embed/kKMBx6x-lOI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <iframe className='youtube-iframe' title='video2' width="260" src="https://www.youtube.com/embed/kKMBx6x-lOI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <iframe className='youtube-iframe' title='video3' width="260" src="https://www.youtube.com/embed/kKMBx6x-lOI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </section>
    )
}

export default SongSection1
