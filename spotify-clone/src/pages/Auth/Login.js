import WithFacebook from 'components/SignUp/WithFacebook'
import WithGoogle from 'components/SignUp/WithGoogle'
import { Icon } from 'icons'
import Input from '../../ui/Input'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Login = () => {
    const handleClick = async (e) => {
        e.preventDefault();
        const client_id = "b73c7b7d508d44d5bb7465b08b970298";
        const redirect_uri = "http://localhost:3000/";
        const api_uri = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    };
    return (
        <div className='bg-white h-full overflow-auto w-full'>
            <div className='flex justify-center w-full py-5 border-b'>
                <span className='text-black flex items-center gap-x-2'>
                    <Icon name="brand" size={55} />
                    <span className='text-4xl font-bold'>Spotify</span>
                </span>
            </div>
            <div className='max-w-[450px] items-center flex flex-col mx-auto'>
                <div className='mt-5'>
                    <p className='font-bold text-base text-center tracking-tighter px-2 text-black'>Devam etmek için Spotify'da oturum aç.</p>
                </div>
                <div className='signup-with flex flex-col justify-center gap-y-5 pt-8 pb-5'>
                    <WithFacebook />
                    <WithGoogle />
                </div>
                <span className='border relative border-gray-200 w-96 my-3'>
                    <p className=' absolute top-1/2 -translate-y-1/2 bg-white px-3 left-1/2 text-gray-700 font-semibold text-base -translate-x-1/2'>veya</p>
                </span>
                <form onSubmit={handleClick} className='flex flex-col gap-y-6 items-start mt-5 border-b pb-5 border-gray-300'>
                    {/* <div className='email'>
                        <Input type="text" label="E-posta adresi veya kullanıcı adı" placeholder="E-posta adresi veya kullanıcı adı" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='password'>
                        <Input type="password" label="Parola" placeholder="Parola" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div> */}
                    <span className='text-gray-800 text-[15px] tracking-wide hover:underline font-semibold'>Parolanı mı unuttun?</span>
                    <div className='remember-me flex items-center justify-between w-full'>
                        {/* <div className='flex items-start gap-x-3 flex-shrink-0'>
                            <input
                                type="checkbox"
                            />
                            <span className='text-black font-medium text-sm'>Beni hatırla</span>
                        </div> */}
                        <div className='w-full flex justify-end py-3'>
                            <button type='submit' className='rounded-full py-3 px-7 bg-[#1ed760] hover:scale-105 text-black font-bold text-base flex justify-center uppercase items-center'>Hesabını Bağla</button>
                        </div>
                    </div>
                </form>
                <NavLink to={{ pathname: "/signup" }} className='flex flex-col items-center gap-y-6 w-full pt-5'>
                    <p className='text-black font-bold text-xl'>Hesabın yok mu?</p>
                    <button className='w-full py-2.5 border border-gray-400 hover:border-gray-600 text-lg text-gray-400 font-bold rounded-full'>SPOTİFY İÇİN KAYDOL</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Login