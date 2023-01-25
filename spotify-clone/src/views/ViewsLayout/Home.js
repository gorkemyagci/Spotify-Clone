import Section from 'components/Home/Section'
import React, { useEffect, useState } from 'react'
import songs from 'data/songs'
import axios from 'axios';
import { useSelector } from 'react-redux';

const Home = () => {
  const [items,setItems] = useState([]);
  const [recentlyPlayed,setRecentlyPlayed] = useState([]);
  const {token} = useSelector(state => state.auth);
  useEffect(() => {
    setItems(songs);
    const getRecentlyPlayed = async () => {
      await axios.get('https://api.spotify.com/v1/me/player/recently-played',{
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "application/json"
        }
      })
      .then(data => {
        setRecentlyPlayed(data.data.items)
        console.log(data.data.items)
      })
      .catch(err => console.log(err))
    }
    getRecentlyPlayed();
  },[]);
  return (
    <div className='flex flex-col gap-y-6'>
      <Section
        title="Programların"
        more="/"
        items={items}
      />
       <Section
        title="Sana özel bölümler"
        more="/"
        items={items}
      />
       <Section
        title="Yakınlarda Çalınanlar"
        more="/"
        items={recentlyPlayed}
      />
    </div>
  )
}

export default Home