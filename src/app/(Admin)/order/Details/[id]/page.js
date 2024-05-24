'use client'
import { opensans } from '@/font'
import Image from 'next/image'
import calendarIcon from '@/app/_assets/calendar.png'
import dropIcon from '@/app/_assets/downArrowNonActive.png'
import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import axios from '@/lib/axios'
import shopingBagIcon from '@/app/_assets/shopping-bag.png'
import DeliveryIcon from '@/app/_assets/cargo-truck.png'
import CustomerIcon from '@/app/_assets/customer.png'
import { updateOrderData } from '@/ApiFunctions/put'
import PopUp from '@/components/PopUp'
import { useRouter } from 'next/navigation'
export default function OrderDetails(props) {
    const [orderState, setOrderState] = useState('')
    const [dropDown, SetDropDown] = useState(false)
    const [loader, setLoader] = useState(true)
    const router = useRouter()
    const [orderData, setOrderData] = useState({
        user: {},
        order: {},
        user_contacts: {},
    })

    const [updated, setUpdated] = useState(false)
    const [query, setQuery] = useState('')
    const getOrderData = async () => {
        axios.get(`api/order/${props.params.id}`).then(res => {
            const data = res.data

            setOrderData(() => {
                return {
                    user: data[1][1],
                    order: data[0][1],
                    user_contacts: data[2][1],
                }
            })
            setLoader(false)
        })
    }

    const changeOrderState = e => {
        setOrderState(e)
        SetDropDown(false)
    }
    useEffect(() => {
        getOrderData()
    }, [])

    const saveOrderState = e => {
        setQuery(orderState)
    }

    useEffect(() => {
        if (query != '' && orderState != '') {
            updateOrderData(props.params.id, orderState, setLoader)
            setUpdated(true)

            setTimeout(() => {
                router.push('/order')
            }, 2000)
        }
    }, [query])
    return (
        <div className="p-4	 ">
            <div className="bg-white min-h-[80vh]  rounded-xl pb-6">
                {updated && !loader && (
                    <PopUp text={'order state changed successfully'}></PopUp>
                )}
                {loader && (
                    <Loader childStyle="flex justify-center items-center"></Loader>
                )}
                {!loader && (
                    <>
                        <div className="flex justify-between gap-5 lg:gap-0  flex-col lg:flex-row p-5">
                            <div className=" flex flex-col gap-4 basis-1/2 ">
                                <div className=" flex  gap-5 items-center">
                                    <h1 className=" font-semibold text-xl ">
                                        Order ID : #{orderData.order.id}
                                    </h1>
                                    <span
                                        className={`${opensans.className} ${
                                            orderData.status == 'pennding' ||
                                            orderData.status == 'canceld'
                                                ? 'bg-[#FFA52F] text-black'
                                                : ' bg-darkBlue text-white'
                                        } p-2 rounded-xl font-semibold	capitalize	`}>
                                        {orderData.order.status}
                                    </span>
                                </div>
                                <div
                                    className={`${opensans.className} font-semibold text-sm flex gap-2 items-center`}>
                                    <Image
                                        src={calendarIcon}
                                        alt="calendar"
                                        className="w-4 h-4"
                                    />
                                    {orderData.order.created_at.split('T')[0]}{' '}
                                    {orderData.order.status == 'deliverd' &&
                                        ` - ${
                                            orderData.order.updated_at.split(
                                                'T',
                                            )[0]
                                        }`}
                                </div>
                            </div>
                            <div className=" flex lg:items-end lg:justify-end basis-1/2 gap-2">
                                <div className="w-1/2 relative ">
                                    <button
                                        className={`${opensans.className} relative flex items-center justify-between p-4 w-full   font-semibold  rounded-lg capitalize bg-mainBg `}
                                        onClick={() => {
                                            SetDropDown(e => !e)
                                        }}>
                                        {orderState
                                            ? orderState
                                            : 'change Status'}
                                        <Image
                                            src={dropIcon}
                                            alt="arrow"
                                            className="  w-4 h-4 right-4 "
                                        />
                                    </button>
                                    {dropDown && (
                                        <div
                                            className={` absolute w-full left-0 -bottom-[170px]  rounded-lg  bg-mainBg `}>
                                            {[
                                                'pennding',
                                                ' deliverd',
                                                'canceld',
                                            ].map(e => {
                                                return (
                                                    <button
                                                        className="p-3 block rounded-lg cursor-pointer capitalize  hover:scale-95 duration-300     text-left   "
                                                        key={e}
                                                        value={e}
                                                        onClick={ev => {
                                                            changeOrderState(e)
                                                        }}>
                                                        {e}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={saveOrderState}
                                    className={
                                        'basis-1/3 bg-mainBg p-4 capitalizeuppercase border rounded-lg  font-medium text-sm hover:scale-95  duration-300'
                                    }>
                                    Save
                                </button>
                            </div>
                        </div>

                        <div className="grid    grid-cols-orderStatsmobile ' repeat(auto-fill, minmax(240px, 1fr));',  break-all sm:break-normal sm:grid-cols-orderStats  text-wrap   gap-5 justify-center flex-wrap p-4  ">
                            <div className="flex gap-6 p-7 rounded-lg shadow-md  ">
                                <Image
                                    src={CustomerIcon}
                                    alt="delivery"
                                    className="w-9  h-9 "
                                />
                                <div className="">
                                    <h1>customer</h1>
                                    <div
                                        className={`${opensans.className}  flex flex-col capitalize text-seconderyItemColor `}>
                                        <p>full name : {orderData.user.name}</p>
                                        <p>
                                            Email:
                                            {
                                                <span>
                                                    {' '}
                                                    {orderData.user.email}
                                                </span>
                                            }
                                        </p>
                                        <p>
                                            phone:{' '}
                                            {
                                                orderData?.user_contacts
                                                    ?.phone_number
                                            }{' '}
                                        </p>
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
                                    <h1>Deliver to</h1>
                                    <div
                                        className={`${opensans.className} flex flex-col capitalize text-seconderyItemColor `}>
                                        <p>
                                            {' '}
                                            Address :{' '}
                                            {orderData?.user_contacts?.address}
                                        </p>
                                        <p>shipping : Express</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-6 p-7 rounded-lg shadow-md  ">
                                <Image
                                    src={shopingBagIcon}
                                    alt="delivery"
                                    className="w-16 h-16 "
                                />
                                <div className="">
                                    <h1>Order info</h1>
                                    <div
                                        className={`${opensans.className} flex flex-col capitalize text-seconderyItemColor `}>
                                        <p>payment method :cash on delivery</p>
                                        <p>
                                            {' '}
                                            status: {
                                                orderData.order.status
                                            }{' '}
                                        </p>
                                        <p>
                                            {' '}
                                            price: {orderData.order.total_price}
                                            ${' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
