import React, { useState } from 'react'

const Year = ({state,dispatch}) => {
  return (
    <div className='day flex flex-col items-start gap-y-2'>
    <label className='text-base text-gray-700 font-medium'>
        Yıl
    </label>
    <input
        type="text"
        value={state.year}
        onChange={(e) => {
          dispatch({
            type:"SET_YEAR",
            value:e.target.value
          })
        }}
        placeholder="YYYY"
        className="h-14 rounded-md border text-black pl-2 placeholder:text-gray-400 placeholder:font-medium placeholder:text-lg border-gray-300 w-28 focus-within:border-[3px] focus-within:border-black outline-none"
    />
</div>
  )
}

export default Year