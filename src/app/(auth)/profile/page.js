'use client'
import { useEffect, useState } from 'react'
import avatarIcon from '@/app/_assets/user.png'
import Image from 'next/image'
import rightArrowIcon from '@/app/_assets/arrow-right-bold 1.svg'
function Profile() {
    const [formData, setFormData] = useState({
        Address: '',
        country: '',
        city: '',
        postal_code: '',
        phone_number: '',
        picture: '',
    })
    const [loader, setloader] = useState(false)
    const [dataSent, setDataSent] = useState(false)
    const handleFormdata = e => {
        const { name, value } = e.target

        setFormData(e => ({
            ...e,
            [name]: value,
        }))
    }
    let containerStyle = 'flex flex-col gap-3 '
    let labelStyle = 'text-xl font-medium'
    let inputStyle =
        'max-w-[320px] sm:max-w-[100%] p-2 border rounded-lg border-black placeholder:capitalize focus:border-black focus:outline-none '

    return (
        <div className="flex justify-center gap-14  flex-col items-center ">
            <div className="flex justify-center items-center pt-3">
                <Image
                    alt="avatar"
                    className="w-40 h-40 rounded-[50%]"
                    src={formData.picture == '' ? avatarIcon : formData.picture}
                />
            </div>
            <form
                method="post"
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
                        onChange={setFormData}
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
                        onChange={setFormData}
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
                        onChange={setFormData}
                        required
                        className={inputStyle}
                        name="Address"
                        value={formData.Address}
                        id="Address"
                        placeholder="write your Address here"
                    />
                </div>

                <div className={containerStyle}>
                    <label htmlFor="postal_code" className={labelStyle}>
                        postal code
                    </label>
                    <input
                        onChange={setFormData}
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
                        onChange={setFormData}
                        required
                        className={inputStyle}
                        name="phone_number"
                        value={formData.phone_number}
                        placeholder="write your phone number here"
                    />
                </div>
                <div className={containerStyle}>
                    <label htmlFor="picture" className={labelStyle}>
                        upload your photo
                    </label>
                    <input
                        onChange={setFormData}
                        className={inputStyle}
                        type="file"
                        name="picture"
                        value={formData.picture}
                        placeholder="upload your picture"
                    />
                </div>

                <button
                    type="submit"
                    onClick={e => {
                        if (loader) {
                            e.preventDefault()
                        }
                    }}
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
