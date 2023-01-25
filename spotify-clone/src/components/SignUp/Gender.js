import React from 'react'

const Gender = ({state,dispatch}) => {
    return (
        <div className="w-full">
            <p className='pb-2 font-semibold'>Cinsiyetin nedir?</p>
            <div className='flex gap-x-7'>
                <div className='flex items-center gap-x-2'>
                    <input
                        type="radio"
                        className='text-black'
                        value="Male"
                        onChange={(e) => {
                            dispatch({
                                ...state,
                                type:"SET_GENDER",
                                value:e.target.value
                            })
                        }}
                        checked={state.gender === 'Male'}
                    />
                     <label>Erkek</label>
                </div>
                <div className='flex items-center gap-x-2'>
                    <input
                        type="radio"
                        className='text-black'
                        value="Female"
                        onChange={(e) => {
                            dispatch({
                                ...state,
                                type:"SET_GENDER",
                                value:e.target.value
                            })
                        }}
                        checked={state.gender === 'Female'}
                    />
                     <label>Kadın</label>
                </div>
                <div className='flex items-center gap-x-2'>
                    <input
                        type="radio"
                        className='text-black'
                        value="Other"
                        onChange={(e) => {
                            dispatch({
                                ...state,
                                type:"SET_GENDER",
                                value:e.target.value
                            })
                        }}
                        checked={state.gender === 'Other'}
                    />
                     <label>Diğer</label>
                </div>
            </div>
        </div>
    )
}

export default Gender