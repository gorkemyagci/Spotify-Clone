import React, { useReducer } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Input from 'ui/Input'
import Agreement from './Dates/Agreement'
import BirthdayDate from './Dates/BirthdayDate'
import Gender from './Gender'

const Form = () => {
    function reducer(state, action) {
        switch (action.type) {
            case "SET_EMAİL":
                return {
                    ...state,
                    email: action.value
                }
            case "SET_EMAİL_RESTART":
                return {
                    ...state,
                    emailRestart: action.value
                }
            case "SET_PASSWORD":
                return {
                    ...state,
                    password: action.value
                }
            case "SET_USERNAME":
                return {
                    ...state,
                    userName: action.value
                }
            case "SET_DAY":
                return {
                    ...state,
                    day: action.value
                }
            case "SET_MONTH":
                return {
                    ...state,
                    month: action.value
                }
            case "SET_YEAR":
                return {
                    ...state,
                    year: action.value
                }
            case "SET_GENDER":
                return {
                    ...state,
                    gender: action.value
                }
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        email: "",
        emailRestart: "",
        password: "",
        userName: "",
        day: "",
        month: "",
        year: "",
        gender: ""
    })
    return (
        <div className='text-black mx-auto'>
            <h2 className='font-bold text-xl text-center pb-6 pt-3'>E-posta adresinle kaydol</h2>
            <form className='flex flex-col gap-y-6 items-center'>
                <Input label="E-posta adresin nedir?" placeholder="E-posta adresini gir." type={state.email} onChange={(e) => {
                    dispatch({
                        type: "SET_EMAİL",
                        value: e.target.value
                    })
                }} />
                <Input label="E-posta adresini onayla" placeholder="E-posta adresini yeniden gir." type={state.emailRestart} onChange={(e) => {
                    dispatch({
                        type: "SET_EMAİL_RESTART",
                        value: e.target.value
                    })
                }} />
                <Input label="Parola oluştur" placeholder="Parola oluştur." type={state.password} onChange={(e) => {
                    dispatch({
                        type: "SET_PASSWORD",
                        value: e.target.value
                    })
                }} />
                <Input label="Sana hangi isimle hitap etmeliyiz?" placeholder="Profil adı gir." type={state.userName} onChange={(e) => {
                    dispatch({
                        type: "SET_USERNAME",
                        value: e.target.value
                    })
                }} />
                <BirthdayDate state={state} dispatch={dispatch} />
                <Gender state={state} dispatch={dispatch} />
                <Agreement />
                <div className='text-center flex justify-center flex-col gap-y-3 text-xs font-normal'>
                    <p>Kaydol seçeneğine tıklayarak <a href='https://www.spotify.com/tr/legal/end-user-agreement/' target="_blank" className="font-semibold underline tracking-tighter" style={{
                        color: "rgb(29, 185, 84)"
                    }}>Spotify'ın Kullanım Hüküm ve Koşulları</a>'nı kabul etmiş olursun.</p>
                    <p>Spotify'ın kişisel verilerini nasıl topladığı, kullandığı, paylaştığı ve koruduğu hakkında daha fazla bilgi edinmek için lütfen <a href='https://www.spotify.com/tr/legal/privacy-policy/' target="_blank" className="font-semibold underline tracking-tighter" style={{
                        color: "rgb(29, 185, 84)"
                    }}>Spotify Gizlilik Politikası</a>'nı oku.</p>
                </div>
                <button type='submit' className='rounded-full py-4 px-10 bg-[#1ed760] hover:scale-105 text-black font-bold text-lg flex justify-center items-center'>Kaydol</button>
                <div className='already-account'>
                    <span className='text-black text-[15px] font-medium'>Hesabın var mı? <NavLink to={{pathname:"/login"}} style={{
                        color: "rgb(29, 185, 84)"
                    }} className="underline">Oturum aç</NavLink>.</span>
                </div>
            </form>
        </div>
    )
}

export default Form