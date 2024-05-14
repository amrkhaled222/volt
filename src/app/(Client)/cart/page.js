'use client'
import MobileNav from '@/app/_components/client/MobileNav'
import Nav from '@/app/_components/client/Nav'
import Footer from '@/app/_components/client/Footer'
import Cart from '@/app/_components/client/Cart'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

function CartPage() {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const fetchCart = async () => {
        try {
            await axios
                .get(
                    `api/cart`,
                )
                .then(res => {
                    console.log(res.data.cart)
                    console.log(res.data.total)
                    setTotal(res.data.total)
                    setCart(res.data.cart)
                })
        } catch (err) {
            throw new Error(err)
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
                <div className="container px-4 m-auto max-w-7xl">
                    <h2 className=" font-montserrat font-extrabold text-3xl mb-5">
                        Your cart
                    </h2>
                    {cart?(
                        <Cart cart = {cart} total ={total} changeTotal={setTotal} changeCart={setCart} />
                    ):(<p>There is no items in your cart back to shoping</p>)}
                </div>
            </section>
            <Footer />
        </main>
    )
}
export default CartPage
