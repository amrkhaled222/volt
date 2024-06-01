'use client'
import { useEffect, useState } from 'react'
import avatarIcon from '@/app/_assets/user.png'
import Image from 'next/image'
import rightArrowIcon from '@/app/_assets/arrow-right-bold 1.svg'
import Dropzone from '@/components/Dropzone'

import { sendData } from '@/ApiFunctions/post'
import { updateContactData } from '@/ApiFunctions/put'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation'
function Profile() {
    const { user } = useAuth({
        middleware: 'auth',
        redirectIfNotAuthenticated: '/',
    })
    const [userData, setuserData] = useState({
        address: '',
        country: '',
        city: '',
        postal_code: '',
        phone_number: '',
        image: '',
    })

    const [loader, setloader] = useState(true)
    const [buttonLoader, setButtonloader] = useState(false)
    const [dataSent, setDataSent] = useState(false)
    const [query, setquery] = useState('')
    const router = useRouter()
    const changePath = () => {
        router.push('/')
    }

    useEffect(() => {
        if (user) {
            if (user?.has_contact) {
                getuserdata()
            } else {
                setloader(false)
            }
        }
    }, [user])

    //validate form and show propiate massege
    const handleFormdata = e => {
        const { name, value } = e.target

        setuserData(e => ({
            ...e,
            [name]: value,
        }))
    }

    const getuserdata = async () => {
        setloader(true)
        await axios.get(`/api/user/contact/${user.id}`).then(res => {
            setuserData({
                address: res.data.contact.address,
                country: res.data.contact.country,
                city: res.data.contact.city,
                postal_code: res.data.contact.postal_code,
                phone_number: res.data.contact.phone_number,
                image: user.image,
            })
        })
        setloader(false)
    }
    const handleImageChange = inputPic => {
        setuserData(e => ({
            ...e,
            image: inputPic,
        }))
    }
    const sendUserData = e => {
        e.preventDefault()
        if (user?.has_contact) {
            setquery('update data')
        } else {
            setquery('send data')
        }
    }

    useEffect(() => {
        if (query == 'send data') {
            setButtonloader(true)
            sendData(setDataSent, userData, 'api/user/contact')
        }
        if (query == 'update data') {
            updateContactData(user.id, userData, setButtonloader, setDataSent)
        }
    }, [query])

    useEffect(() => {
        if (dataSent) {
            setloader(false)
            changePath()
        }
    }, [dataSent])

    let containerStyle = 'flex flex-col gap-3 '
    let labelStyle = 'text-xl font-medium'
    let inputStyle =
        'max-w-[320px] sm:max-w-[100%] p-2 border rounded-lg border-black placeholder:capitalize focus:border-black focus:outline-none '

    return (
        <div className="flex justify-center gap-14  flex-col items-center min-h-[80vh] ">
            {!loader ? (
                <>
                    <div className="flex justify-center items-center pt-3">
                        <Image
                            width="60"
                            height="60"
                            alt="avatar"
                            className="w-40 h-40 rounded-[50%]"
                            src={userData.image ? userData.image : avatarIcon}
                        />
                    </div>

                    <Dropzone
                        handleFormChange={e => handleImageChange(e)}
                        urlPath="api/user/contact/upload"
                    />

                    <form
                        onSubmit={sendUserData}
                        className="sm:max-w-[100%] max-w-[280px]  justify-center  m-auto flex flex-col gap-5 ">
                        <h1 className=" capitalize text-2xl font-bold  font-rubik text-center m-0">
                            {user?.has_contact
                                ? ' your data'
                                : 'please insert your data'}
                        </h1>
                        <div className={containerStyle}>
                            <label
                                value={userData.country}
                                className={labelStyle}
                                htmlFor="country">
                                country
                            </label>
                            <input
                                onChange={e => handleFormdata(e)}
                                required
                                className={inputStyle}
                                id="country"
                                name="country"
                                value={userData.country}
                                placeholder="write your country here"
                            />
                        </div>
                        <div className={containerStyle}>
                            <label className={labelStyle} htmlFor="city">
                                city
                            </label>
                            <input
                                onChange={e => handleFormdata(e)}
                                required
                                className={inputStyle}
                                id="city"
                                value={userData.city}
                                name="city"
                                placeholder="write your city here"
                            />
                        </div>
                        <div className={containerStyle}>
                            <label className={labelStyle} htmlFor="Address">
                                Address
                            </label>
                            <input
                                onChange={e => handleFormdata(e)}
                                required
                                className={inputStyle}
                                name="address"
                                value={userData.address}
                                id="Address"
                                placeholder="write your Address here"
                            />
                        </div>

                        <div className={containerStyle}>
                            <label htmlFor="postal_code" className={labelStyle}>
                                postal code
                            </label>
                            <input
                                onChange={e => handleFormdata(e)}
                                required
                                className={inputStyle}
                                name="postal_code"
                                value={userData.postal_code}
                                placeholder="write your postal code here"
                            />
                        </div>
                        <div className={containerStyle}>
                            <label
                                htmlFor="phone_number"
                                className={labelStyle}>
                                phone number
                            </label>
                            <input
                                onChange={e => handleFormdata(e)}
                                required
                                className={inputStyle}
                                name="phone_number"
                                value={userData.phone_number}
                                placeholder="write your phone number here"
                            />
                        </div>
                        {!loader && user?.has_contact && (
                            <div className="flex justify-between gap-5">
                                <button
                                    onClick={e => {
                                        e.preventDefault()
                                        router.push('/')
                                    }}
                                    type="submit"
                                    className=" cursor-pointer hover:scale-95 duration-300  justify-center   flex w-full border border-black p-2 rounded-lg uppercase font-bold  items-center ">
                                    {' '}
                                    Home
                                </button>
                                <button
                                    onClick={e => {
                                        if (buttonLoader) {
                                            e.preventDefault()
                                        }
                                    }}
                                    type="submit"
                                    className=" cursor-pointer hover:scale-95 duration-300  flex w-full border border-black p-2 rounded-lg uppercase font-bold justify-center items-center ">
                                    {' '}
                                    {buttonLoader ? (
                                        <span className="w-6 h-6 border-2 rounded-[50%] border-black  border-t-transparent animate-spin "></span>
                                    ) : (
                                        ' Save'
                                    )}
                                </button>
                            </div>
                        )}
                        {!loader && !user?.has_contact && (
                            <button
                                onClick={e => {
                                    if (buttonLoader) {
                                        e.preventDefault()
                                    }
                                }}
                                type="submit"
                                className=" cursor-pointer hover:scale-95 duration-300  flex w-full border border-black p-2 rounded-lg uppercase font-bold justify-between items-center ">
                                {' '}
                                Next
                                {buttonLoader ? (
                                    <span className="w-6 h-6 border-2 rounded-[50%] border-black  border-t-transparent animate-spin "></span>
                                ) : (
                                    <Image
                                        alt="right arrow"
                                        src={rightArrowIcon}></Image>
                                )}
                            </button>
                        )}
                    </form>
                </>
            ) : (
                <Loader childStyle="flex justify-center items-center" />
            )}
        </div>
    )
}
export default Profile
