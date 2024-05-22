'use client'
import { useEffect, useState } from 'react'
import avatarIcon from '@/app/_assets/user.png'
import Image from 'next/image'
import rightArrowIcon from '@/app/_assets/arrow-right-bold 1.svg'
import Dropzone from '@/app/_components/Dropzone'
import { useRouter } from 'next/navigation'
import { sendData } from '@/app/_components/function'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
function Profile() {
    const { user } = useAuth()
    const [formData, setFormData] = useState({
        address: '',
        country: '',
        city: '',
        postal_code: '',
        phone_number: '',
        image: '',
    })
    const [loader, setloader] = useState(false)
    const [dataSent, setDataSent] = useState(false)
    const [query, setquery] = useState('')
    const [userData, setUserData] = useState({})
    const [isAuth, setIsAuth] = useState(false)
    let router = useRouter()
    const changePath = () => {
        router.push('/Home')
    }

    if(user && !isAuth){
        setIsAuth(true)
    }
    //validate form and show propiate massege
    const handleFormdata = e => {
        const { name, value } = e.target

        setFormData(e => ({
            ...e,
            [name]: value,
        }))
    }
    const getuserdata = async () => {
        await axios.get(`/api/user/contact/${user.id}`).then(res => {
            setUserData(res.data)
        })
    }
    const handleImageChange = inputPic => {
        setFormData(e => ({
            ...e,
            image: inputPic,
        }))
    }
    const AddButton = e => {
        e.preventDefault()
        setquery('send data')
    }

    useEffect(() => {
        if (query == 'send data') {
            setloader(true)
            sendData(setDataSent, formData, 'api/user/contact')
        }
    }, [query])

    useEffect(() => {
        if (dataSent) {
            setTimeout(() => {
                changePath()
                setloader(false)
            }, 3000)
        }
    }, [dataSent])

    useEffect(() => {
        if (isAuth && user?.has_contact) {
            console.log(user)
            getuserdata()
        }
    }, [isAuth])

    console.log(userData)
    let containerStyle = 'flex flex-col gap-3 '
    let labelStyle = 'text-xl font-medium'
    let inputStyle =
        'max-w-[320px] sm:max-w-[100%] p-2 border rounded-lg border-black placeholder:capitalize focus:border-black focus:outline-none '

    return (
        <div className="flex justify-center gap-14  flex-col items-center ">
            <div className="flex justify-center items-center pt-3">
                <Image
                    width="60"
                    height="60"
                    alt="avatar"
                    className="w-40 h-40 rounded-[50%]"
                    src={formData.image == '' ? avatarIcon : formData.image}
                />
            </div>
            <Dropzone
                handleFormChange={e => handleImageChange(e)}
                urlPath="api/user/contact/upload"
            />
            <form
                onSubmit={AddButton}
                className="sm:max-w-[100%] max-w-[280px]  justify-center  m-auto flex flex-col gap-5 ">
                <h1 className=" capitalize text-2xl font-bold  font-rubik text-center m-0">
                    please insert your data
                </h1>
                <div className={containerStyle}>
                    <label
                        value={formData.country}
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
                        value={formData.country}
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
                        value={formData.city}
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
                        value={formData.address}
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
                        value={formData.postal_code}
                        placeholder="write your postal code here"
                    />
                </div>
                <div className={containerStyle}>
                    <label htmlFor="phone_number" className={labelStyle}>
                        phone number
                    </label>
                    <input
                        onChange={e => handleFormdata(e)}
                        required
                        className={inputStyle}
                        name="phone_number"
                        value={formData.phone_number}
                        placeholder="write your phone number here"
                    />
                </div>
                {/* <div className={containerStyle}>
                    <label htmlFor="picture" className={labelStyle}>
                        upload your photo
                    </label>
                    <input
                        onChange={setFormData}
                        className={inputStyle}
                        type="file"
                        name="image"
                        value={formData.image}
                        placeholder="upload your picture"
                    />
                </div> */}

                <button
                    onClick={e => {
                        if (loader) {
                            e.preventDefault()
                        }
                    }}
                    type="submit"
                    className=" cursor-pointer hover:scale-95 duration-300  flex w-full border border-black p-2 rounded-lg uppercase font-bold justify-between items-center ">
                    {' '}
                    Next
                    {loader ? (
                        <span className="w-6 h-6 border-2 rounded-[50%] border-black  border-t-transparent animate-spin "></span>
                    ) : (
                        <Image alt="right arrow" src={rightArrowIcon}></Image>
                    )}
                </button>
            </form>
        </div>
    )
}
export default Profile
