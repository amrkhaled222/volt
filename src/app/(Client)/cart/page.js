'use client'
import MobileNav from '@/app/_components/client/MobileNav'
import Nav from '@/app/_components/client/Nav'
import Footer from '@/app/_components/client/Footer'
import Cart from '@/app/_components/client/Cart'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Loader from '@/app/_components/Loader'

function CartPage() {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [loader, setLoader] = useState(true)
    const fetchCart = async () => {
        try {
            await axios.get(`api/cart`).then(res => {
                setTotal(res.data.total)
                setCart(res.data.cart)
                setLoader(false)
            })
        } catch (err) {
            //print for user that dose not have data
            setLoader(false)
            setCart('no data found')
        }
    }
    useEffect(() => {
        fetchCart()
    }, [])

    return (
        <main>
            <header>
                <div className="container px-4 m-auto max-w-7xl">
                    <MobileNav />
                    <Nav />
                </div>
            </header>
            <section className="my-8">
                <div className="container px-4 m-auto max-w-7xl relative">
                    <h2 className=" font-montserrat font-extrabold text-3xl mb-5">
                        Your cart
                    </h2>

                    <div
                        className={`relative min-h-[30vh] min-w[100%] ${
                            cart && 'flex items-center justify-center '
                        }`}>
                        {loader && (
                            <Loader
                                style="bg-transparent"
                                childStyle=" justify-center items-center "></Loader>
                        )}
                        {cart == 'no data found' && (
                            <div>
                                <h2 className="text-2xl font-bold capitalize ">
                                    opps!! there is no data found
                                </h2>
                            </div>
                        )}

                        {!loader && cart != 'no data found' && (
                            <>
                                {cart ? (
                                    <Cart
                                        cart={cart}
                                        total={total}
                                        changeTotal={setTotal}
                                        changeCart={setCart}
                                    />
                                ) : (
                                    <p>
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
