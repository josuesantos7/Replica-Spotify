import React from 'react'
import SongItem from './SongItem'

const SongList = ({ songsArray }) => {
    const itens = 5;

    return <div className="song-list">
        {songsArray.filter((currentValue, index) => index < itens).map((currentSongObj, index) => <SongItem {...currentSongObj} index={index} key={index}/>)}
        
        <p className='song-list__see-more'>Ver mais</p>
  </div>
}

export default SongList
