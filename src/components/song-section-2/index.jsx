import React, {useContext} from 'react'
import {I18nContext} from '../../layouts/base-layout'
import image1 from '../../assets/rose.png'
import image2 from '../../assets/demasho.png'
import './index.scss'
import SongIndexHelper from "../song-index-helper";
import WithHeaderAnimation from "../WithHeaderAnimation";
import YoutubeContainer from "../youtube-container";

const SongSection2 = () => {
	const {songSection2} = useContext(I18nContext);

	return (
		<section className="container song-section song-section-2">
			<div className="row">
				<div className="col-12">
					{SongIndexHelper(2)}
					{WithHeaderAnimation([songSection2.header])}
					{/*<h2>{songSection2.header}</h2>*/}
					<img style={{top: '40%', left: '-12%'}} className='image image-rose' src={image1} alt="Rose"/>
					<img style={{top: '34%', right: '-7%'}} className='image image-man' src={image2} alt="Demasho"/>
				</div>
				<div className="col-md-7">
					<p dangerouslySetInnerHTML={{__html: songSection2.text1}}/>
					<p>{songSection2.text2}</p>
					<div className="poem">
						<p dangerouslySetInnerHTML={{__html: songSection2.poem}}/>
					</div>
					<p>{songSection2.text3}</p>
				</div>
				<div className="col-md-5 video-section">
					<YoutubeContainer src='GG5f9jvrv2c'/>
					<i>{songSection2.videoCaption1}</i>

					<YoutubeContainer src='v_tcTmgh7FQ'/>
					<i>{songSection2.videoCaption2}</i>
				</div>
			</div>
		</section>
	)
};

export default SongSection2
