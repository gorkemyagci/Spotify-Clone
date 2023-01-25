import { Icon } from 'icons';
import React, { useState } from 'react'

const Months = ({state,dispatch}) => {
    const months = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ]
    return (
        <div className='day flex flex-col items-start gap-y-2'>
            <label className='text-base text-gray-700 font-medium'>
                Ay
            </label>
            <div className='relative w-40 h-14'>
            <select value={state.month} onChange={(e) => {
                dispatch({
                    type:"SET_MONTH",
                    value:e.target.value
                })
            }} className="h-full w-full bg-none appearance-none bg-white outline-none border focus-within:border-[3px] focus-within:border-black border-gray-300 pl-2 text-black">
                {months.map((month, index) => {
                    return (
                        <option className='text-black font-semibold' value={month} key={index}>{month}</option>
                    )
                })}
            </select>
            <span className='text-gray-600 absolute rotate-[270deg] right-2 top-1/2 -translate-y-1/2'>
            <Icon name="arrowLeft" size={18}/>
            </span>
            </div>
        </div>
    )
}

export default Months