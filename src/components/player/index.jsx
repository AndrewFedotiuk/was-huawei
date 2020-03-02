import React, {useState} from 'react'
import ReactHowler from 'react-howler'
import raf from 'raf' // requestAnimationFrame polyfill
import testSong from '../../assets/BS_TF.mp3'
import './index.scss'
import Pause from "./pause";
import Play from "./play";
import UnMute from "./unmute";
import Mute from "./mute";
import Arrow from "./arrow";

let player = React.createRef(),
	_raf;
const songs = [
	{
		name: 'Фрагмент 31,<br> Сапфо',
		src: testSong,
		id: 0
	},
	{
		name: 'Фрагмент 31,<br> Сапфо 2',
		src: testSong,
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

	const handleNext = (e,side = false) => {
		if (side) {
			setSong(prevState => ({
				...prevState,
				activeSong: prevState.songs[(prevState.activeSong.id - 1)]
			}))

		} else {
			setSong(prevState => ({
				...prevState,
				activeSong: prevState.songs[prevState.activeSong.id + 1]
			}))
		}
	};


	return (
		<div className='player'>
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
			<div className="container-fluid player-wrapper">
				<div className="row">

					<div className='col col-md-3 control-wrapper'>
						<button disabled={songController.activeSong.id === 0} onClick={() => handleNext(e=null,'prev')}
						        className="player-btn btn-arrow btn-m">
							<Arrow/>
						</button>
						<button className='player-btn btn-m' onClick={handleToggle}>
							{(playerValues.playing) ? <Pause/> : <Play/>}
						</button>
						<button disabled={songController.activeSong.id === songController.songs.length-1}
						        onClick={handleNext} className="player-btn flip-horizontally btn-m">
							<Arrow/>
						</button>
						<span className='player-status d-none d-sm-inline'>
                            {(playerValues.seek !== undefined) ? updateTime(playerValues.seek) : '0:00'}
							{' / '}
							{(playerValues.duration) ? updateTime(playerValues.duration) : 'Loading...'}
                        </span>
					</div>
					<span className='col' dangerouslySetInnerHTML={{__html: songController.activeSong.name}}/>
					<div className='col col-sm-3 control-wrapper d-flex justify-content-end'>
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
		</div>
	)
};

export default Player
