'use client'
import MobileNav from '@/app/_components/client/MobileNav'
import Nav from '@/app/_components/client/Nav'
import Footer from '@/app/_components/client/Footer'
import Cart from '@/app/_components/client/Cart'

function CartPage() {
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

                    <Cart />
                </div>
            </section>
            <Footer />
        </main>
    )
}
export default CartPage
