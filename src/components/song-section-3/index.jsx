import React, {useContext} from 'react'
import './index.scss'
import image1 from '../../assets/wagner.png'
import image2 from '../../assets/vagner.png'
import {I18nContext} from '../../layouts/base-layout'
import SongIndexHelper from "../song-index-helper";
import WithHeaderAnimation from '../WithHeaderAnimation'

const SongSection3 = () => {
	const {songSection3} = useContext(I18nContext);

	return (
		<section className='container song-section song-section-3'>
			<div className="row">
				<div className="col-12">
					<img style={{top: '33%', right: '3%'}} className='image wagner' src={image1} alt="Wagner"/>
					<img style={{top: '0px', right: '30%', zIndex: -1}} className='image wagner-small' src={image2}
					     alt="Wagner small"/>
					{/*<h2 dangerouslySetInnerHTML={{__html:songSection3.header}}/>*/}
					{WithHeaderAnimation([songSection3.header])}

					{SongIndexHelper(3)}
				</div>

				<div className="col-md-7">
					<p>{songSection3.text1}</p>
					<p>{songSection3.text2}</p>
				</div>
				<div className="col-md-5 video-section">
					<iframe className='youtube-iframe' title='Guillaume de Machaut' width="260"
					        src="https://www.youtube.com/embed/n96lUtYqcSg" frameBorder="0"
					        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					        allowFullScreen/>
					<i>{songSection3.videoCaption}</i>
				</div>
			</div>
		</section>
	)
};


export default SongSection3
