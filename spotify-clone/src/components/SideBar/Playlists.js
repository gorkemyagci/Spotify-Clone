import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Playlists = () => {
  const { token } = useSelector(state => state.auth);
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    const getPlaylistData = async () => {
      await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "application/json"
        }
      }).then(data => {
        setPlaylists(data.data.items)
      })
        .catch(err => console.log(err))
    }
    getPlaylistData();
  })
  return (
    <div className='mx-6 mt-3 py-2 border-t border-white border-opacity-10 flex-auto overflow-auto'>
      <ul>
        {playlists.map((playlist, index) => {
          return (
            <li key={index} className='text-sm cursor-default text-link hover:text-white flex h-8 items-center'>{playlist.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Playlists