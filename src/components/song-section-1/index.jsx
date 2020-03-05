import React, {useContext} from 'react'
import {I18nContext} from '../../layouts/base-layout'
import saphoImage from '../../assets/sapho.png'
import starImage from '../../assets/star.png'
import './index.scss'
import SongIndexHelper from "../song-index-helper";
import WithHeaderAnimation from "../WithHeaderAnimation";

const SongSection1 = () => {
	const {songSection1} = useContext(I18nContext);

	return (
		<section className="container song-section song-section1">
			<div className="row">
				<div className="image-wrapper">
					<img src={saphoImage} className='sapho' alt="Sapho"/>
					<img style={{top: '20px', right: '-40px'}} className='image star' src={starImage} alt="Star"/>
				</div>
				<div className="col-12 header-wrapper">
					{WithHeaderAnimation([songSection1.header])}
					<p className="d-sm-block d-sm-none"
					   dangerouslySetInnerHTML={{__html: songSection1.imageCaption}}/>

					{SongIndexHelper(1)}
				</div>

				<div className="col-md-7">
					<p>{songSection1.text1}</p>
					<p dangerouslySetInnerHTML={{__html: songSection1.text2}}/>
					<p>{songSection1.text3}</p>
					<p>{songSection1.text4}</p>
					<div className="poem">

						<p><b dangerouslySetInnerHTML={{__html: songSection1.poemHeader}}/></p>
						<p dangerouslySetInnerHTML={{__html: songSection1.poem}}/>
					</div>
					<p>{songSection1.text5}</p>
				</div>

				<div className="col-md-5 video-section">
					<iframe className='youtube-iframe' title='video1' width="260"
					        src="https://www.youtube.com/embed/mOlIqozu3Fg" frameBorder="0"
					        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					        allowFullScreen/>
					<iframe className='youtube-iframe' title='video2' width="260"
					        src="https://www.youtube.com/embed/ybs_qe-t9N4" frameBorder="0"
					        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					        allowFullScreen/>
					<iframe className='youtube-iframe' title='video3' width="260"
					        src="https://www.youtube.com/embed/fLILuQI5ag8" frameBorder="0"
					        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					        allowFullScreen/>
				</div>
			</div>
		</section>
	)
};

export default SongSection1
