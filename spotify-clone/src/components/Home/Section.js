import Title from 'components/Title'
import { Icon } from 'icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCurrent } from 'store/player'

const Section = ({ title, more, items }) => {
    const { current, playing } = useSelector(state => state.player);
    function imageStyle(item){
        switch(item.type){
            case "artist":
                return "rounded-full"
            case "podcast":
                return "rounded-xl"
            default:
                return "rounded"
        }
    }

    const dispatch = useDispatch();
    
    const updateItem = (item) => {
        dispatch(setCurrent(item))
    }

    return (
        <section>
            <Title title={title} more={more}/>
            <div className='grid grid-cols-5 gap-x-6'>
                {items.splice(0,5).map((item, index) => {
                    return (
                        <NavLink to={"/"} key={index} className="bg-footer group p-4 rounded hover:bg-active">
                            <div className='relative pt-[100%] mb-4'>
                            <img src={item.track?.album.images[0].url} alt={item.title} className={`absolute inset-0 w-full h-full object-cover ${imageStyle(item)}`}/>
                            <button onClick={updateItem.bind(this,item)} className={`w-10 h-10 bg-primary group-hover:flex justify-center items-center rounded-full absolute right-2 bottom-2 ${current.id == item.id && playing ? 'flex' : 'hidden'}`}>
                                <Icon name={current?.id == item.id && playing ? 'pause' : 'play'} size={22}/>
                            </button>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <h6 className='overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold'>{item.track?.name}</h6>
                                <span className='text-gray-600 text-sm font-medium line-clamp-2'>{item.description}</span>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </section>
    )
}

export default Section