import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

const Song = () => {
  const { id } = useParams();

  const songObj = songsArray.filter(
      (currentSongObj) => currentSongObj.id === Number(id)
    )[0];

  const artistObj = artistArray.filter(
      (currentArtistObj) => currentArtistObj.name === songObj.artist)[0];

  const songsArrayFromArtist =  songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artistObj.name
  );

  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1));
  const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length - 1));
  
  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id
  const randomIdFromArtist2 = songsArrayFromArtist[randomIndex2].id

  return (
    <div className="song">
      <div className="song__container">
          <div className="song__image-container">
            <img src={songObj.image} alt={`Imagem da música ${songObj.name}`} />
          </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className='song__artist-image'>
          <img 
          width={75}
          height={75}
          src={artistObj.image} alt="imagem do artista Y" />
        </Link>
        
        <Player duration={songObj.duration} randomIdFromArtist={randomIdFromArtist} randomIdFromArtist2={randomIdFromArtist2}/>

        <div className='song__name'>
          <p>{songObj.name}</p>
          <p>{artistObj.name}</p>
        </div>
      </div>

    </div>
  )
}

export default Song
