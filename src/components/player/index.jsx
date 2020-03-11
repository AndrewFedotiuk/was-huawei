import React, {useContext} from 'react'
import './index.scss'
import Pause from "./pause";
import Play from "./play";
import UnMute from "./unmute";
import Mute from "./mute";
import Arrow from "./arrow";
import {PlayerDataContext} from "../../layouts/base-layout";

const Player = () => {
	const {activeId, activeText, muted, toggleMute, setVolume, setPlaying, volume, playing} = useContext(PlayerDataContext);

	return (
		<div className='player'>
			{/*<div className="road-map"*/}
			{/*     style={{width: `${percent(playerValues.seek, playerValues.duration)}%`}}*/}
			{/*/>*/}

			<div className="player-wrapper">

				<div className='control-wrapper'>
					<button className="player-btn btn-arrow btn-m">
						<Arrow/>
					</button>
					<button className='player-btn btn-m' onClick={()=>setPlaying(!playing)}>
						{(playing) ? <Pause/> : <Play/>}
					</button>
					<button className="player-btn flip-horizontally btn-m">
						<Arrow/>
					</button>
					<span className='player-status d-none d-sm-inline'>
							00:00
						{/*{!isNaN(playerValues.seek) ? updateTime(playerValues.seek) : '0:00'}*/}
						{/*{' / '}*/}
						{/*{(playerValues.duration) ? updateTime(playerValues.duration) : 'Loading...'}*/}
                        </span>
				</div>
				<span className='align-self-center'>
					{activeText}
				</span>
				<div className='control-wrapper d-flex justify-content-end'>
					<input
						className='player-input d-none d-sm-inline'
						type='range'
						min='0'
						max='100'
						step='5'
						value={volume}
						style={{verticalAlign: 'bottom'}}
						onChange={setVolume}
					/>
					<button className='player-btn' onClick={toggleMute}>
						{(muted) ? <UnMute/> : <Mute/>}
					</button>

				</div>
			</div>
		</div>
	)
};

export default Player
