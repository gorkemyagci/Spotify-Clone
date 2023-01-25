import { Icon } from 'icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navigation = () => {
    const history = useNavigate()
  return (
    <div className='flex items-center gap-x-4'>
        <button onClick={() => history(-1)} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon name="prevIcon" size={22}/>
        </button>
        <button onClick={() => history(1)} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon name="nextIcon" size={22}/>
        </button>
    </div>
  )
}

export default Navigation