import React, {useContext} from 'react'
import './index.scss'
import image1 from '../../assets/photo2.png'
import {I18nContext} from '../../layouts/base-layout'
import SongIndexHelper from "../song-index-helper";
import WithHeaderAnimation from '../WithHeaderAnimation'
import YoutubeContainer from "../youtube-container";


const SongSection6 = () => {
	const {songSection6} = useContext(I18nContext);

	return (
		<section className='container song-section song-section-6'>
			<div className="row">
				<div className="col-12">
					{WithHeaderAnimation([songSection6.header])}

					<img className='image' style={{bottom: '0', right: '0'}} src={image1} alt="Winner"/>

					{SongIndexHelper(6)}
				</div>
				<div className="col-md-7">
					<p className="offset-1 caption" dangerouslySetInnerHTML={{__html: songSection6.imageCaption}}/>

					{ Array(6).fill(0).map((_, index) => <p key={index}>{songSection6[`text${index + 1}`]}</p>)}
				</div>
				<div className="col-md-5 video-section">

					<YoutubeContainer src='XrvXGdDNYd4' title='Из фильма «Дорога на сечь»'/>
					<YoutubeContainer src='sQ5idZHWVn4' title='Из фильма «Дорога на сечь»'/>

					<i>{songSection6.videoCaption}</i>
				</div>
			</div>
		</section>
	)
};


export default SongSection6
