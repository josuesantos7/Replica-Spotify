import React from 'react'
import SongItem from './SongItem'
import { useState } from 'react';

const SongList = ({ songsArray }) => {
    const [itens, setItens] = useState(5);

    return <div className="song-list">
        {songsArray.filter((currentValue, index) => index < itens).map((currentSongObj, index) => <SongItem {...currentSongObj} index={index} key={index}/>)}
        
        <p className='song-list__see-more' onClick={() => { setItens(itens + 5) }}>Ver mais</p>
  </div>
}

export default SongList
