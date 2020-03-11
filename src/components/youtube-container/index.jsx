import React, {useState, useEffect, forwardRef, createRef, useContext, useMemo} from "react"
import YouTubeIframeLoader from 'youtube-iframe'
import './index.scss'
import LinkIframe from "./link-iframe";
import {PlayerDataContext} from "../../layouts/base-layout";

const Iframe = forwardRef(({src, title}, iframeRef) => (<div id={src} ref={iframeRef}/>));

const iframeRef = createRef();

let playerInstances = {};

const YoutubeContainer = (props) => {
	const [showIframe, setIframe] = useState(false);
	const { setPlaying,activeId ,playing, volume, muted} = useContext(PlayerDataContext);

	const onPlayerReady = () => {
		muteHandler();
		volumeHandler();
		playerInstances[props.src].playVideo();
		// console.log(playerInstances[props.src].getDuration());
		// console.log(playerInstances[props.src].getCurrentTime());
	};

	const onPlayerStateChange = ({data}) => {
		if(data===1 && (activeId !== props.src)){
			playerInstances[activeId].pauseVideo();
			setPlaying(false);
		}
		if(data===2 && activeId===props.src) setPlaying(false);
	};

	useEffect(()=>{
		if(activeId === props.src){
			if(playing && showIframe) playerInstances[props.src].playVideo();
			else if(playing) setIframe(true);
			else if(!playing && playerInstances[props.src]) playerInstances[props.src].pauseVideo();
		}
	},[playing]);

	useEffect(()=>muteHandler(), [muted]);
	useEffect(()=>volumeHandler(), [volume]);

	useEffect(() => {
		if (iframeRef.current) {
			YouTubeIframeLoader.load((YT) => {
				playerInstances[props.src] = new YT.Player(props.src, {
					videoId: props.src,
					events: {
						'onReady': onPlayerReady,
						'onStateChange': onPlayerStateChange
					}
				})
			});
		}
	}, [showIframe]);

	const muteHandler = ()=>{
		if(activeId === props.src && showIframe) {
			muted ? playerInstances[props.src].mute()
				: playerInstances[props.src].unMute();
		}
	};

	const volumeHandler = ()=>{
		if(activeId===props.src && showIframe){
			playerInstances[props.src].setVolume(volume);
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
