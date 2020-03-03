import React, {useState} from 'react'
import ReactHowler from 'react-howler'
import raf from 'raf' // requestAnimationFrame polyfill
import testSong from '../../assets/BS_TF.mp3'
import chistmasSong from '../../assets/chistmas.mp3'
import './index.scss'
import Pause from "./pause";
import Play from "./play";
import UnMute from "./unmute";
import Mute from "./mute";
import Arrow from "./arrow";
import {percent, updateTime} from "./utils";

let player = React.createRef(),
	_raf;
const songs = [
	{
		name: 'Фрагмент 31,<br> Сапфо',
		src: testSong,
		id: 0
	},
	{
		name: 'chistmas Song 31,<br> Сапфо 2',
		src: chistmasSong,
		id: 1
	}
];

const Player = () => {
	const [playerValues, setValues] = useState({
		playing: false,
		loaded: false,
		loop: false,
		mute: false,
		volume: 1.0
	});

	const [songController, setSong] = useState({
		activeSong: songs[0],
		songs
	});

	const handleOnLoad = () => {
		console.log('loaded');

		setValues({
			...playerValues,
			loaded: true,
			duration: player.current.duration()
		})
	};

	const handleOnPlay = () => {
		setValues(prevState => ({
			...prevState,
			playing: true
		}));

		renderSeekPos()

	};

	const renderSeekPos = () => {
		setValues(prevState => {
			if (prevState.playing) _raf = raf(renderSeekPos);
			return {
				...prevState,
				seek: player.current.seek()
			}
		})
	};


	const handleOnEnd = () => {
		setValues(prevState => ({
			...prevState,
			playing: false
		}));
		clearRAF()
	};

	const handleMute = () => {
		setValues(prevState => ({
			...prevState,
			mute: !prevState.mute
		}))
	};

	const clearRAF = () => {
		raf.cancel(_raf)
	};

	const handleToggle = () => {
		setValues(prevState => ({
			...prevState,
			playing: !prevState.playing
		}))
	};

	const volumeHandler = ({target}) => {
		setValues({
			...playerValues,
			volume: parseFloat(target.value)
		})
	};

	const handleNext = (e, side = false) => {
		if (side) setNextHelper(-1);
		else setNextHelper();
		handleOnPlay();
	};

	const scrollToIndex = (index) => {
		const element = document.getElementById(`songIndex${index}`);

		if (element) {
			window.scroll({
				top: (element.getBoundingClientRect().top + window.scrollY) - 150,
				behavior: 'smooth',
			})
		}
	};

	const setNextHelper = (indicator = 1) => {
		setSong(prevState => {
			const id = prevState.activeSong.id + indicator;
			scrollToIndex(id + 1);
			return {
				...prevState,
				activeSong: prevState.songs[id]
			}
		});

	};

	return (
		<div className='player'>
			<div className="road-map"
			     style={{width: `${percent(playerValues.seek, playerValues.duration)}%`}}
			/>
			<ReactHowler
				src={[songController.activeSong.src]}
				playing={playerValues.playing}
				onLoad={handleOnLoad}
				onPlay={handleOnPlay}
				onEnd={handleOnEnd}
				loop={playerValues.loop}
				mute={playerValues.mute}
				volume={playerValues.volume}
				ref={player}
			/>
			<div className="player-wrapper">

					<div className='control-wrapper'>
						<button disabled={songController.activeSong.id <= 0} onClick={() => handleNext(null, 'prev')}
						        className="player-btn btn-arrow btn-m">
							<Arrow/>
						</button>
						<button className='player-btn btn-m' onClick={handleToggle}>
							{(playerValues.playing) ? <Pause/> : <Play/>}
						</button>
						<button disabled={songController.activeSong.id >= songController.songs.length - 1}
						        onClick={handleNext} className="player-btn flip-horizontally btn-m">
							<Arrow/>
						</button>
						<span className='player-status d-none d-sm-inline'>
                            {!isNaN(playerValues.seek) ? updateTime(playerValues.seek) : '0:00'}
							{' / '}
							{(playerValues.duration) ? updateTime(playerValues.duration) : 'Loading...'}
                        </span>
					</div>
					<span className='' dangerouslySetInnerHTML={{__html: songController.activeSong.name}}/>
					<div className='control-wrapper d-flex justify-content-end'>
						<input
							className='player-input d-none d-sm-inline'
							type='range'
							min='0'
							max='1'
							step='.05'
							value={playerValues.volume}
							style={{verticalAlign: 'bottom'}}
							onChange={volumeHandler}
						/>
						<button className='player-btn' onClick={handleMute}>
							{(playerValues.mute) ? <UnMute/> : <Mute/>}
						</button>

					</div>
			</div>
		</div>
	)
};

export default Player
