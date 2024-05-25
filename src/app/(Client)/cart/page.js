'use client'
import Cart from '@/components/Client/Cart'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation'

function CartPage() {
    const router = useRouter()
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [loader, setLoader] = useState(true)
    const [err, setErr] = useState(0)

    const fetchCart = async () => {
        try {
            await axios.get(`api/cart`).then(res => {
                setTotal(res.data.total)
                setCart(res.data.cart)
                setLoader(false)
            })
        } catch (err) {
            setErr(err.response.status)
            setLoader(false)
        }
    }
    useEffect(() => {
        if (!err) {
            fetchCart()
        }
    }, [])

    return (
        <section className="my-8 ">
            <div className="container px-7 m-auto  relative min-h-[60vh]    ">
                <h2 className=" font-montserrat font-extrabold text-3xl mb-5">
                    Your cart
                </h2>

                <div
                    className={`relative min-h-[50vh] min-w[100%] ${
                        cart.length == 0 || err == 404
                            ? 'flex items-center justify-center'
                            : ''
                    } `}>
                    {loader && (
                        <Loader
                            style="bg-transparent"
                            childStyle=" justify-center items-center "></Loader>
                    )}

                    {err == 401 && (
                        <div className="w-full min-h-[40vh] p-4  flex items-center flex-col  justify-between pt-12">
                            <p className=" text-center px-6 capitalize font-bold text-2xl">
                                {' '}
                                you should sign in to see your cart
                            </p>

                            <div className="flex justify-between items-center w-full  ">
                                {' '}
                                <button
                                    onClick={e => {
                                        history.back(-1)
                                    }}
                                    className="px-8 py-1  text-lg  sm:min-w-[140px]     capitalize bg-black text-white rounded-2xl">
                                    back
                                </button>
                                <button
                                    onClick={() => {
                                        router.push('/login')
                                    }}
                                    className="px-8 py-1 capitalize text-lg  sm:min-w-[140px] bg-black text-white rounded-2xl">
                                    login
                                </button>
                            </div>
                        </div>
                    )}

                    {!loader && !err && (
                        <>
                            {cart.length ? (
                                <Cart
                                    cart={cart}
                                    total={total}
                                    changeTotal={setTotal}
                                    changeCart={setCart}
                                />
                            ) : (
                                <div className="flex justify-center items-center gap- flex-col">
                                    <p className=" text-center px-6 capitalize font-bold text-2xl">
                                        There is no items in your cart back to
                                        shoping
                                    </p>
                                    <button
                                        onClick={() => {
                                            router.push('/shop')
                                        }}
                                        className="p-2 bg-black min-w-[200px] text-white rounded-lg duration-300 hover:scale-95 text-lg capitalize">
                                        shop
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
export default CartPage
