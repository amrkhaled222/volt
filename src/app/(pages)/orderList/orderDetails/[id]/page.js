'use client'
import orderData from '@/app/_components/orderData.json'
import { opensans } from '@/font'
import Image from 'next/image'
import calendarIcon from '@/app/_assets/calendar.png'
import Button from '@/app/_components/StyledButton'
import dropIcon from '@/app/_assets/downArrowNonActive.png'
import { useState } from 'react'
import DeliveryIcon from '@/app/_assets/delivery.png'
export default function OrderDetails(props) {
    const [orderState, setOrderState] = useState('')
    const [dropDown, SetDropDown] = useState(false)
    const changeOrderState = e => {
        setOrderState(e)
        console.log(orderState)
    }

    return (
        <div className="p-4	 ">
            <div className="bg-white  rounded-xl pb-6">
                <div className="flex justify-between gap-5 lg:gap-0  flex-col lg:flex-row p-5">
                    <div className=" flex flex-col gap-4 basis-1/2 ">
                        <div className=" flex  gap-5 items-center">
                            <h1 className=" font-semibold text-xl ">
                                Order ID:{orderData.orderId}
                            </h1>
                            <span
                                className={`${opensans.className} ${
                                    orderData.status == 'pennding' ||
                                    orderData.status == 'canceld'
                                        ? 'bg-[#FFA52F] text-black'
                                        : ' bg-darkBlue text-white'
                                } p-2 rounded-xl font-semibold		`}>
                                {orderData.status}
                            </span>
                        </div>
                        <div
                            className={`${opensans.className} font-semibold text-sm flex gap-2 items-center`}>
                            <Image
                                src={calendarIcon}
                                alt="calendar"
                                className="w-4 h-4"
                            />
                            {orderData.requstedDate}{' '}
                            {orderData.deliverdDate &&
                                ` - ${orderData.deliverdDate}`}
                        </div>
                    </div>
                    <div className=" flex lg:items-end lg:justify-end basis-1/2 gap-2">
                        <div className="w-1/2 relative ">
                            <button
                                className={`${opensans.className} relative flex items-center justify-between p-4 w-full   font-semibold  rounded-lg capitalize bg-mainBg `}
                                onClick={() => {
                                    SetDropDown(e => !e)
                                }}>
                                change status
                                <Image
                                    src={dropIcon}
                                    className="  w-4 h-4 right-4 "
                                />
                            </button>
                            {dropDown && (
                                <div
                                    className={` absolute w-full p-4 left-0 -bottom-[170px]  rounded-lg  bg-mainBg `}>
                                    {['pennding', ' deliverd', 'canceld'].map(
                                        e => {
                                            return (
                                                <div
                                                    className="p-2 focus:scale-95 duration-300   text-left  "
                                                    key={e}
                                                    onClick={() => {
                                                        changeOrderState(e)
                                                    }}>
                                                    {e}
                                                </div>
                                            )
                                        },
                                    )}
                                </div>
                            )}
                        </div>

                        <Button
                            text={'Save'}
                            handleClicking={() => {
                                console.log('hi')
                            }}
                            style={'basis-1/3 bg-mainBg p-4 capitalize'}
                        />
                    </div>
                </div>

                <div className="grid  grid-cols-orderStats gap-5 justify-center flex-wrap p-4  ">
                    <div className="flex gap-6 p-7 rounded-lg shadow-md  ">
                        <Image
                            src={DeliveryIcon}
                            alt="delivery"
                            className="w-16 h-16 "
                        />
                        <div className="">
                            <h1>customer</h1>
                            <div
                                className={`${opensans.className} flex flex-col capitalize text-seconderyItemColor `}>
                                <p>full name : {orderData.customerName}</p>
                                <p>
                                    Email:
                                    {
                                        <span className=" normal-case ">
                                            {' '}
                                            {orderData.email}
                                        </span>
                                    }
                                </p>
                                <p> phone: {orderData.phone} </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6 p-7 rounded-lg shadow-md ">
                        <Image
                            src={DeliveryIcon}
                            alt="delivery"
                            className="w-16 h-16 "
                        />
                        <div className="">
                            <h1>customer</h1>
                            <div
                                className={`${opensans.className} flex flex-col capitalize text-seconderyItemColor `}>
                                <p>full name : {orderData.customerName}</p>
                                <p>
                                    Email:
                                    {
                                        <span className=" normal-case ">
                                            {' '}
                                            {orderData.email}
                                        </span>
                                    }
                                </p>
                                <p> phone: {orderData.phone} </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6 p-7 rounded-lg shadow-md  ">
                        <Image
                            src={DeliveryIcon}
                            alt="delivery"
                            className="w-16 h-16 "
                        />
                        <div className="">
                            <h1>customer</h1>
                            <div
                                className={`${opensans.className} flex flex-col capitalize text-seconderyItemColor `}>
                                <p>full name : {orderData.customerName}</p>
                                <p>
                                    Email:
                                    {
                                        <span className=" normal-case ">
                                            {' '}
                                            {orderData.email}
                                        </span>
                                    }
                                </p>
                                <p> phone: {orderData.phone} </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6 p-7 rounded-lg shadow-md  ">
                        <Image
                            src={DeliveryIcon}
                            alt="delivery"
                            className="w-16 h-16 "
                        />
                        <div className="">
                            <h1>customer</h1>
                            <div
                                className={`${opensans.className} flex flex-col capitalize text-seconderyItemColor `}>
                                <p>full name : {orderData.customerName}</p>
                                <p>
                                    Email:
                                    {
                                        <span className=" normal-case ">
                                            {' '}
                                            {orderData.email}
                                        </span>
                                    }
                                </p>
                                <p> phone: {orderData.phone} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
