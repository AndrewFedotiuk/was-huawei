import React, {useState, useEffect, forwardRef, createRef, useContext} from "react"
import YouTubeIframeLoader from 'youtube-iframe'
import './index.scss'
import LinkIframe from "./link-iframe";
import {PlayerDataContext} from "../../layouts/base-layout";

const Iframe = forwardRef(({src, title}, iframeRef) => (<div id={src} ref={iframeRef}/>));

const iframeRef = createRef();
let playerInstance = null;

const YoutubeContainer = (props) => {
	const [showIframe, setIframe] = useState(false);
	const {activeId ,playing, volume, muted} = useContext(PlayerDataContext);

	const onPlayerReady = () => {
		muteHandler();
		volumeHandler();
		playerInstance.playVideo();
	};

	const onPlayerStateChange = () => {

	};

	useEffect(()=>{
		if(activeId === props.src){
			if(playing && showIframe) playerInstance.playVideo();
			else if(playing) setIframe(true);
			else if(!playing && playerInstance) playerInstance.pauseVideo();
		}
	},[playing]);

	useEffect(()=>muteHandler(), [muted]);
	useEffect(()=>volumeHandler(), [volume]);

	useEffect(() => {
		if (iframeRef.current) {
			YouTubeIframeLoader.load((YT) => {
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

	const muteHandler = ()=>{
		if(activeId === props.src && showIframe) {
			muted ? playerInstance.mute()
				: playerInstance.unMute();
		}
	};

	const volumeHandler = ()=>{
		if(activeId===props.src && showIframe){
			playerInstance.setVolume(volume);
		}
	};

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
