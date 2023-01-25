import React, { useState } from 'react'
import WithFacebook from '../WithFacebook'
import Day from './Day';
import Months from './Months';
import Year from './Year';

const BirthdayDate = ({state,dispatch}) => {
    return (
        <div className='pt-7'>
            <p className='text-black font-semibold text-base mb-4'>Doğum tarihin nedir?</p>
            <div className='flex items-center gap-x-7'>
               <Day state={state} dispatch={dispatch}/>
               <Months state={state} dispatch={dispatch}/>
               <Year state={state} dispatch={dispatch}/>
            </div>
        </div>
    )
}

export default BirthdayDate