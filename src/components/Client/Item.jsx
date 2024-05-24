'use state'
import star from '@/app/_assets/star.png'
import Plus from '@/app/_assets/plusIcon.svg'
import Minus from '@/app/_assets/MinusIcon.svg'
import Button from './Button'
import ItemInfo from './ItemInfo'
import { useState } from 'react'
import Image from 'next/image'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'

import removeIcon from '@/app/_assets/remove.png'

import PopUp from '../PopUp'
let cart = new Array()
function Item({ product }) {
    const [counter, setCounter] = useState(1)
    const { user } = useAuth()
    const [quantity, setQuantity] = useState(1)
    const [Active, setActive] = useState('Small')
    const [addtoCart, setAddToCart] = useState()
    const [err, setErr] = useState(0)
    const [addLoader, setaddLoader] = useState(false)

    let rating = product.rate
    let finalRate = Math.floor(rating)
    let stars = false
    if (rating) {
        stars = new Array(finalRate).fill(0)
    }

    async function handleAddToCart() {
        console.log('add')
        setaddLoader(true)

        if (user) {
            try {
                await axios
                    .post(`api/cart/add/${product.id}`, {
                        quantity: quantity,
                    })
                    .then(res => {
                        console.log(res)
                        setaddLoader(false)
                    })
            } catch (err) {
                throw new Error(err)
            }
        } else {
            setaddLoader(false)
            setErr(401)
            console.log(err)
        }
    }

    function handleAdd() {
        setQuantity(prev => prev + 1)
    }

    function handleMinus() {
        setQuantity(prev => prev - 1)
    }

    return (
        <section className=" mt-7">
            <div className=" container px-4 m-auto max-w-7xl">
                <div className="flex flex-col md:flex-row gap-8 relative rounded-md p-4">
                    {err == 401 && (
                        <PopUp
                            nestChildern={true}
                            parentClass="rounded-md"
                            childClass="flex justify-center items-center relative capitalize font-semibold"
                            childern={
                                <button
                                    className="position absolute -top-2 -right-2 "
                                    onClick={e => {
                                        setErr(0)
                                    }}>
                                    <Image
                                        className="w-5 h-5"
                                        alt="close"
                                        src={removeIcon}></Image>
                                </button>
                            }
                            text={'you should sign in first'}></PopUp>
                    )}
                    <div className="flex flex-col md:flex-row gap-3 basis-[30%] ">
                        <div className=" h-full order-1 md:order-2  ">
                            <Image
                                src={product.picture}
                                height={500}
                                width={350}
                                alt=""
                                className="md:max-h-[350px] md:max-w-[350px] w-full  rounded-md"
                            />
                        </div>
                    </div>

                    <div className="basis-[70%]">
                        <h3 className=" font-montserrat font-semibold text-3xl">
                            {product.title}
                        </h3>
                        <div className=" flex gap-5 my-5">
                            <div className=" flex gap-2">
                                {stars &&
                                    stars.map((st, i) => (
                                        <Image
                                            src={star}
                                            key={i}
                                            className="h-4 w-4 "
                                            alt="Customer Rating"
                                        />
                                    ))}
                            </div>
                            <p className=" font-plusj ">{product.rating}</p>
                        </div>
                        <div className="my-5">
                            <p className="font-plusj font-bold text-2xl">
                                {`${product.price}`} LE
                            </p>
                        </div>
                        <p className=" font-plusj text-sm text-gray-500 mb-4">
                            {product.description}
                        </p>

                        <hr className="h-1 bg-hrColor" />
                        <div className=" flex gap-6 mt-5">
                            <div className=" flex w-[30%] bg-main_gray px-4 justify-between rounded-3xl text-sm md:text-base  p-1 border-2 border-solid font-plusj">
                                <button className="font-bold">
                                    <Image
                                        src={Minus}
                                        alt=""
                                        onClick={handleMinus}
                                    />
                                </button>
                                <p className=" font-plusj text-lg">
                                    {quantity}
                                </p>
                                <button
                                    className="font-bold"
                                    onClick={handleAdd}>
                                    <Image src={Plus} alt="" />
                                </button>
                            </div>
                            <div className="w-[60%]">
                                <Button
                                    title={
                                        addLoader ? (
                                            <span className="w-6 h-6  border-white border-2 rounded-2xl block  border-b-transparent   bg-black animate-spin"></span>
                                        ) : (
                                            'Add To Cart'
                                        )
                                    }
                                    text_color="text-white"
                                    bg_color="bg-black flex justify-center items-center"
                                    pc_width="w-full"
                                    mobile_width="w-full"
                                    handleClick={
                                        addLoader
                                            ? e => {
                                                  e.preventDefault()
                                              }
                                            : handleAddToCart
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ItemInfo />
        </section>
    )
}
export default Item
