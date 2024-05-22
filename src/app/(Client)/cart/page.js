'use client'
import MobileNav from '@/app/_components/client/MobileNav'
import Nav from '@/app/_components/client/Nav'
import Footer from '@/app/_components/client/Footer'
import Cart from '@/app/_components/client/Cart'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Loader from '@/app/_components/Loader'
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
        if (err) {
            return
        }

        fetchCart()
    }, [])

    return (
        <main>
            <header>
                <div className="container px-4 m-auto ">
                    <MobileNav />
                    <Nav />
                </div>
            </header>
            <section className="my-8 ">
                <div className="container px-4 m-auto  relative min-h-[60vh]    ">
                    <h2 className=" font-montserrat font-extrabold text-3xl mb-5">
                        Your cart
                    </h2>

                    <div
                        className={`relative min-h-[50vh] min-w[100%] ${
                            cart && 'flex'
                        } `}>
                        {loader && (
                            <Loader
                                style="bg-transparent"
                                childStyle=" justify-center items-center "></Loader>
                        )}

                        {err == 401 && (
                            <div className="w-full h-full flex items-center  justify-center">
                                <div className="w-[300px]  rounded-2xl shadow-md p-7 gap-10 flex justify-between items-center flex-col ">
                                    <p className=" text-center px-6 capitalize">
                                        {' '}
                                        you should sign in to see your cart
                                    </p>

                                    <div className="flex justify-between items-center w-full  ">
                                        {' '}
                                        <button
                                            onClick={e => {
                                                history.back(-1)
                                            }}
                                            className="px-6 py-1 capitalize bg-black text-white rounded-2xl">
                                            back
                                        </button>
                                        <button
                                            onClick={() => {
                                                router.push('/login')
                                            }}
                                            className="px-6 py-1 capitalize bg-black text-white rounded-2xl">
                                            signin
                                        </button>
                                    </div>
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
                                    <p className="font-semibold">
                                        There is no items in your cart back to
                                        shoping
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
export default CartPage
