import React, { useState, useEffect } from 'react'
import ReactHowler from 'react-howler'
import raf from 'raf' // requestAnimationFrame polyfill
import testSong from '../../assets/BS_TF.mp3'
import './index.scss'

const Pause = () => (
    <svg width="39" height="39" viewBox="0 0 39 39" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.11429 39H12.3429C14.6143 39 16.4571 37.1571 16.4571 34.8857V4.71428C16.4571 2.44286 14.6143 0.599998 12.3429 0.599998H4.11429C1.84286 0.599998 0 2.44286 0 4.71428V34.8857C0 37.1571 1.84286 39 4.11429 39ZM38.4 4.71428V34.8857C38.4 37.1571 36.5571 39 34.2857 39H26.0571C23.7857 39 21.9429 37.1571 21.9429 34.8857V4.71428C21.9429 2.44286 23.7857 0.599998 26.0571 0.599998H34.2857C36.5571 0.599998 38.4 2.44286 38.4 4.71428Z" />
    </svg>
)

const Play = () => (
    <svg width="39" height="44" viewBox="0 0 39 44" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.3771 18.4029L6.20571 0.565713C3.75429 -0.882858 0 0.522856 0 4.10571V39.7714C0 42.9857 3.48857 44.9229 6.20571 43.3114L36.3771 25.4829C39.0686 23.8971 39.0771 19.9886 36.3771 18.4029Z" />
    </svg>
)

let player = React.createRef(),
    _raf


const Player = () => {
    const [playerValues, setValues] = useState({
        playing: false,
        loaded: false,
        loop: false,
        mute: false,
        volume: 1.0
    })

    const handleOnLoad = () => {
        console.log('loaded');

        setValues({
            ...playerValues,
            loaded: true,
            duration: player.current.duration()
        })
    }

    const handleOnPlay = () => {

        setValues(prevState=>({
            ...prevState,
            playing: true
        }), renderSeekPos())
    }

    const renderSeekPos = () => {
        setValues(prevState=>({
            ...prevState,
            seek: player.current.seek()
        }), console.log(playerValues))

        if (playerValues.playing) _raf = raf(renderSeekPos)

        
    }

    const handleOnEnd = () => {
        console.log(player, 'end');

        setValues({
            ...playerValues,
            playing: false
        })
        clearRAF()
    }

    const clearRAF = () => {
        _raf.cancel()
    }

    const handleToggle = () => {
        setValues(prevState => ({
            ...prevState,
            playing: !prevState.playing
        }))
    }

    useEffect(() => {
        if (_raf) return () => { clearRAF() }
    });


    return (
        <div className="container-fluid">
            <ReactHowler
                src={[testSong]}
                playing={playerValues.playing}
                onLoad={handleOnLoad}
                onPlay={handleOnPlay}
                onEnd={handleOnEnd}
                loop={playerValues.loop}
                mute={playerValues.mute}
                volume={playerValues.volume}
                ref={player}
            />
            <pre>{JSON.stringify(playerValues)}</pre>
            <div className="row player-wrapper">
                <button className='player-btn' onClick={handleToggle}>
                    {(playerValues.playing) ? <Pause /> : <Play />}
                </button>
            </div>
        </div>
    )
}

export default Player