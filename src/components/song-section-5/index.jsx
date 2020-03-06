import React, {useContext} from 'react'
import './index.scss'
import image1 from '../../assets/photo.png'
import {I18nContext} from '../../layouts/base-layout'
import SongIndexHelper from "../song-index-helper";
import WithHeaderAnimation from '../WithHeaderAnimation'
import YoutubeContainer from "../youtube-container";


const images = [...new Float32Array(4)].map(
	(_, index) => <img key={index} style={{opacity: `${0.35 - index * 0.1}`}} src={image1} alt="Winner"/>
);


const SongSection4 = () => {
	const {songSection5} = useContext(I18nContext);

	return (
		<section className='container song-section song-section-5'>
			<div className="row">
				<div className="col-12">
					{/*<h2 className='col col-sm-8'>{songSection5.header}</h2>*/}
					{WithHeaderAnimation([songSection5.header])}

					<div className="image-wrapper">
						<img src={image1} alt="Winner"/>
						{images}
					</div>
					{SongIndexHelper(5)}

				</div>
				<div className="col-md-7">
					<p className="offset-1 caption" dangerouslySetInnerHTML={{__html: songSection5.imageCaption}}/>

					<p>{songSection5.text1}</p>
					<p>{songSection5.text2}</p>
					<p>{songSection5.text3}</p>
					<div className="poem">
						<p dangerouslySetInnerHTML={{__html: songSection5.poem}}/>
					</div>
					<p>{songSection5.text4}</p>
				</div>
				<div className="col-md-5 video-section">

					<YoutubeContainer src='92cwKCU8Z5c' title='Из фильма «Дорога на сечь»'/>

					<i>{songSection5.videoCaption}</i>
				</div>
			</div>
		</section>
	)
};


export default SongSection4
