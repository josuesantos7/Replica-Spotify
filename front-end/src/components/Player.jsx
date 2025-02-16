import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause, faFirstAid } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");

  const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`
};

const Player = ({ duration, randomIdFromArtist, randomIdFromArtist2, audio}) => {

  const audioPlayer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play()

    setIsPlaying(!isPlaying);
  }

  useEffect(() =>{
   const intervalId = setInterval(() => {
    if (isPlaying)
    setCurrentTime(formatTime(audioPlayer.current.currentTime)); 
   }, 1000);

    return () => {
      clearInterval(intervalId)
    }
  }, [isPlaying])

  return (
    <div className='player'>
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon className="player__icon player__icon--play" icon={isPlaying ? faCirclePause : faCirclePlay} onClick={() => playPause()}/>

        <Link to={`/song/${randomIdFromArtist2}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  )
}

export default Player
