import React, {useState, useEffect, forwardRef, createRef} from "react"
import YouTubeIframeLoader from 'youtube-iframe'
import './index.scss'
import LinkIframe from "./link-iframe";

const Iframe = forwardRef(({src, title}, iframeRef) => (<div id={src} ref={iframeRef}/>));

const iframeRef = createRef();
let playerInstance = null;

const YoutubeContainer = (props) => {
	const [showIframe, setIframe] = useState(false);

	const onPlayerReady = ()=>{
		playerInstance.setVolume(50);
		playerInstance.playVideo();
	};

	const onPlayerStateChange = ()=>{

	};

	useEffect(() => {
		if(iframeRef.current){
			YouTubeIframeLoader.load((YT)=> {
				playerInstance = new YT.Player(props.src, {
					videoId: props.src,
					events: {
						'onReady': onPlayerReady,
						'onStateChange': onPlayerStateChange
					}
				});
			});
		}
	}, [showIframe]);

	return (
		<div className='youtube-container'>
			{
				showIframe
					? <Iframe {...props} ref={iframeRef}/>
					: <LinkIframe {...props} setIframe={setIframe}/>
			}
		</div>
	)
};

export default YoutubeContainer
