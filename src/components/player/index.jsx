import React, {useState} from 'react'
import ReactHowler from 'react-howler'
import raf from 'raf' // requestAnimationFrame polyfill
import testSong from '../../assets/BS_TF.mp3'
import './index.scss'
import Pause from "./pause";
import Play from "./play";
import UnMute from "./unmute";
import Mute from "./mute";

let player = React.createRef(),
	_raf;
const songs = [
	{
		name: 'Фрагмент 31,<br> Сапфо',
		src: testSong,
		id: 0
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
		console.log(player, 'end');

		setValues({
			...playerValues,
			playing: false
		});
		clearRAF()
	};

	const handleMute = () => {
		setValues(prevState => ({
			...prevState,
			mute: !prevState.mute
		}))
	};

	const clearRAF = () => {
		console.log(_raf);
		raf.cancel(_raf)
	};

	const handleToggle = () => {
		setValues(prevState => ({
			...prevState,
			playing: !prevState.playing
		}))
	};

	const updateTime = (time) => {
		time = (time / 60).toFixed(2).toString().replace('.', ':');
		return time
	};

	const volumeHandler = ({target}) => {
		setValues({
			...playerValues,
			volume: parseFloat(target.value)
		})
	};


	return (
		<>
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
					<button className='player-btn' onClick={handleToggle}>
						{(playerValues.playing) ? <Pause/> : <Play/>}
					</button>
					<span className='player-status'>
                    {(playerValues.seek !== undefined) ? updateTime(playerValues.seek) : '0:00'}
						{' / '}
						{(playerValues.duration) ? updateTime(playerValues.duration) : 'Loading...'}
                    </span>
				</div>
				<span dangerouslySetInnerHTML={{__html: songController.activeSong.name}}/>
				<div className='control-wrapper'>
					<input
						className='player-input'
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
		</>
	)
};

export default Player
