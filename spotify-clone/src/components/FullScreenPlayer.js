import { Icon } from 'icons'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { secondsToTime } from 'utils'
import CustomRange from './CustomRange'
import logo from 'img/logo.svg'

const FullScreenPlayer = ({ toggle, state, controls, volumeIcon }) => {
    const { current } = useSelector(state => state.player)
    return (
        <div className='bg-black relative h-full'>
            <div className='absolute inset-0 object-cover bg-center blur-md opacity-30 bg-cover' style={{ backgroundImage: `url(${current.album?.images[0].url})` }}></div>
            <div className="absolute opacity-70 top-8 left-8 gap-x-4 text-white flex items-center">
               <Icon name="brand" size={24}/>
				<div className="text-xs">
					<p style={{fontSize: 11}}>PLAYING FROM PLAYLIST</p>
					<h6 className="font-semibold mt-0.5">{current.name}</h6>
				</div>
			</div>
            <div className='absolute left-8 bottom-36 flex gap-x-4 items-end'>
                <img src={current.album?.images[0].url} alt={current.title} className="w-24 h-24 object-cover"/>
                <div className='flex flex-col gap-y-1'>
                    <h3 className='text-3xl font-semimedium'>{current.name}</h3>
                    <p className='text-sm font-normal opacity-50'>{current.artists[0]?.name}</p>
                </div>
            </div>
            <div className='flex w-full flex-col-reverse absolute bottom-4  px-4 gap-y-3 items-center'>
                <div className='relative flex items-center justify-between w-full'>
                    <div>&nbsp;</div>
                    <div className='flex items-center gap-x-5'>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            controls?.seek(state?.time - 15)
                        }} className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon name="skipFifteen" size={24} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon size={24} name="playerPrev" />
                        </button>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            controls[state?.playing ? 'pause' : 'play']()
                        }} className='w-16 h-16 flex items-center justify-center hover:scale-105 text-opacity-70 hover:text-opacity-100 bg-white rounded-full text-black'>
                            {state?.playing ?
                                <Icon size={24} name="pause" /> :
                                <Icon size={24} name="play" />
                            }
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon size={24} name="playerNext" />
                        </button>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            controls?.seek(state?.time + 15);
                        }} className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                            <Icon size={24} name="prevFifteen" />
                        </button>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                controls[state.muted ? 'unmuted' : 'mute']();
                            }}
                            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                            <Icon size={16} name={volumeIcon} />
                        </button>
                        <CustomRange
                            step={0.01}
                            min={0}
                            max={1}
                            value={state.muted ? 0 : state?.volume}
                            onChange={(value) => {
                                controls.unmute()
                                controls.volume(value)
                            }}
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggle()
                            }}
                            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                            <Icon size={16} name="fullScreen" />
                        </button>
                    </div>
                </div>
                <div className='w-full flex items-center gap-x-3'>
                    <div className='text-xs text-white text-opacity-70'>
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
                    <div className='text-xs text-white text-opacity-70'>
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FullScreenPlayer