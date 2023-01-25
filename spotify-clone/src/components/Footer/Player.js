import { async } from '@firebase/util';
import axios from 'axios';
import CustomRange from 'components/CustomRange';
import FullScreenPlayer from 'components/FullScreenPlayer';
import { Icon } from 'icons'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAudio, useFullscreen, useToggle } from 'react-use';
import { setControls, setCurrent, setPlaying, setSidebar } from 'store/player';
import { secondsToTime } from 'utils';

const Player = () => {
    const dispatch = useDispatch();
    const { playing } = useSelector(state => state.player)
    const { token } = useSelector(state => state.auth)
    const [device, setDevice] = useState();
    const [volume, setVolume] = useState();
    const [progressMs, setProgressMs] = useState();
    const getCurrentDevices = async () => {
        await axios.get('https://api.spotify.com/v1/me/player/devices', {
            headers: {
                Authorization: "Bearer " + token,
                "Content-type": "application/json"
            }
        }).then(data => {
            setVolume(data.data.devices[0].volume_percent);
            setDevice(data.data.devices[0]);
            console.log(device);
            setPlaying(device.is_playing)
        })
            .catch(err => console.log(err))
    }
    const getCurrentTrack = async () => {
        const { response } = axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                Authorization: "Bearer " + token,
                "Content-type": "application/json"
            }
        }).then(data => {
            if (data.data) {
                dispatch(setPlaying(data.data.is_playing))
                dispatch(setCurrent(data.data.item))
                setProgressMs(data.data.progress_ms);
                console.log(secondsToTime(progressMs));
            }
        })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getCurrentTrack();
        getCurrentDevices();
        console.log(current);
    }, [])
    useEffect(() => {
        getCurrentTrack();
    }, [progressMs])
    const changeTrack = async (type) => {
        await axios.post(`https://api.spotify.com/v1/me/player/${type}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-type": "application/json"
                }
            })
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    const changseState = async () => {
        const state = playing ? 'pause' : 'play';
        await axios.put(`https://api.spotify.com/v1/me/player/${state}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-type": "application/json"
                }
            }
        )
            .then( async (data) => {
                console.log(data)
                console.log(!playing);
                dispatch(setPlaying(!playing))
                await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-type": "application/json"
                    }
                }).then(data => {
                    setProgressMs(data.data.progress_ms);
                    getCurrentTrack();
                    console.log(data.data);
                })
            })
            .catch(error => console.log(error))
    }
    const changeVolume = async (value) => {
        await axios.put(
            "https://api.spotify.com/v1/me/player/volume",
            {},
            {
                params: {
                    volume_percent: parseInt(value),
                },
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
    }
    const { current, sideBar } = useSelector(state => state.player);
    const [audio, state, controls, ref] = useAudio({
        src: current?.href
    });

    const fsRef = useRef(null)
    const [show, toggle] = useToggle(false);
    const isFullscreen = useFullscreen(fsRef, show, { onClose: () => toggle(false) });

    useEffect(() => {
        controls.play();
    }, [current])

    useEffect(() => {
        dispatch(setControls(controls));
    }, []);

    useEffect(() => {
        dispatch(setPlaying(state.playing));
    }, [state.playing])
    const volumeIcon = useMemo(() => {
        if (state.volume === 0 || state.muted)
            return 'volumeMuted'
        if (state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'
        if (state.volume >= 0.33 && state.volume < 0.66)
            return 'volumeNormal'
        return 'volumeFull'
    }, [state.volume, state.muted])

    return (
        <div className="flex px-4 justify-between items-center h-full">
            <div className="min-w-[11.25rem] w-[30%]">
                {current && (
                    <div className="flex items-center">
                        <div className="flex items-center mr-3">
                            {!sideBar && (
                                <div className="w-14 h-14 mr-3 relative group flex-shrink-0">
                                    <img src={current.album?.images[0].url} alt={current.track?.name} />
                                    <button
                                        onClick={() => dispatch(setSidebar(true))}
                                        className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] rotate-90 rounded-full absolute top-1 right-1 flex items-center justify-center">
                                        <Icon size={16} name="arrowLeft" />
                                    </button>
                                </div>
                            )}
                            <div>
                                <h6 className="text-sm line-clamp-1">{current.name}</h6>
                                <p className="text-[0.688rem] text-white text-opacity-70">{current.artists[0]?.name}</p>
                            </div>
                        </div>
                        <button
                            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                            <Icon size={16} name="heart" />
                        </button>
                        <button
                            className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                            <Icon size={16} name="pictureInPicture" />
                        </button>
                    </div>
                )}
            </div>
            <div className="max-w-[45.125rem] w-[40%] pt-2 flex flex-col px-4 items-center">
                <div className="flex items-center gap-x-2">
                    <button
                        onClick={() => controls.seek(state?.time - 15)}
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="skipFifteen" />
                    </button>
                    <button
                        onClick={() => changeTrack('previous')}
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="playerPrev" />
                    </button>
                    <button
                        onClick={changseState}
                        className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]">
                        <Icon size={16} name={playing ? 'pause' : 'play'} />
                    </button>
                    <button
                        onClick={() => changeTrack('next')}
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="playerNext" />
                    </button>
                    <button
                        onClick={() => controls.seek(state?.time + 15)}
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="prevFifteen" />
                    </button>
                </div>
                <div className="w-full flex items-center mt-1.5 gap-x-2">
                    {audio}
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {
                            progressMs && secondsToTime(progressMs)
                        }
                    </div>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={current?.duration_ms || 1}
                        value={progressMs && progressMs}
                        onChange={value => controls.seek(value)}
                    />
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {
                            current && secondsToTime(current?.duration_ms)
                        }
                    </div>
                </div>
            </div>
            <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
                <button
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="lyrics" />
                </button>
                <button
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="queue" />
                </button>
                <button
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="device" />
                </button>
                <button
                    onClick={changeVolume(0)}
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name={volumeIcon} />
                </button>
                <div className="w-[5.813rem] max-w-full">
                    <CustomRange
                        step={1}
                        min={0}
                        max={100}
                        value={volume}
                        onChange={value => {
                            setVolume(value);
                            changeVolume(value)
                        }}
                    />
                </div>
                <button
                    onClick={toggle}
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="fullScreen" />
                </button>
            </div>
            <div ref={fsRef}>
                {isFullscreen && (
                    <FullScreenPlayer
                        toggle={toggle}
                        state={state}
                        controls={controls}
                        volumeIcon={volumeIcon}
                    />
                )}
            </div>
        </div>
    )
}

export default Player