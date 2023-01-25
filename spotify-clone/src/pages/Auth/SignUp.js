import WithFacebook from 'components/SignUp/WithFacebook'
import WithGoogle from 'components/SignUp/WithGoogle'
import { Icon } from 'icons'
import React from 'react'
import Form from 'components/SignUp/Form'
import BirthdayDate from 'components/SignUp/Dates/BirthdayDate'

const SignUp = () => {
    return (
        <div className='bg-white h-full overflow-auto w-full pb-[8.125rem]'>
             <div className='max-w-[450px] flex flex-col mx-auto'>
            <div className='flex justify-center pt-2 pb-5'>
                <span className='text-black flex items-center gap-x-2'>
                    <Icon name="brand" size={37}/>
                    <span className='text-[26px] font-bold'>Spotify</span>
                </span>
            </div>
            <div className='mt-5'>
                <p className='font-bold text-4xl text-center tracking-tighter px-2 text-black'>Dinlemeye başlamak için <br/> ücretsiz kaydol.</p>
            </div>
            <div className='signup-with flex flex-col justify-center gap-y-5 pt-8 pb-5'>
                <WithFacebook/>
                <WithGoogle/>
            </div>
            <span className='border relative border-gray-200 w-96 my-3'>
                <p className=' absolute top-1/2 -translate-y-1/2 bg-white px-3 left-1/2 text-gray-400 font-medium text-lg -translate-x-1/2'>veya</p>
            </span>
            <Form/>
        </div>
        </div>
    )
}

export default SignUp