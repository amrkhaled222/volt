'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import dasboardactive from '@/app/_assets/dashboardActive.png'
import dashboardNonActive from '@/app/_assets/dashboardNonActive.png'
import productActive from '@/app/_assets/productActive.png'
import productNonActive from '@/app/_assets/productNonActive.png'
import orderlistNonActive from '@/app/_assets/orderlistNonActive.png'
import orderlistActive from '@/app/_assets/orderlistActive.png'
import customerActive from '@/app/_assets/customerActive.png'
import customerNonActive from '@/app/_assets/customerNonActive.png'
import menuIcon from '@/app/_assets/menu.png'
import { useState, useRef, useEffect } from 'react'

function MobileNav() {
    const [menu, tooglemenu] = useState(false)

    const stopScrolling = e => {
        if (e) {
            document.querySelector('body').classList.remove('overflow-hidden')
        } else {
            document.querySelector('body').classList.add('overflow-hidden')
        }
    }
    const handleburgerbutton = () => {
        tooglemenu(e => {
            stopScrolling(e)
            return !e
        })
    }
    const pathname = usePathname()

    let menuRef = useRef(0)

    useEffect(() => {
        if (!menu) return

        const handleOutSideClick = event => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                tooglemenu(() => {
                    document
                        .querySelector('body')
                        .classList.remove('overflow-hidden')
                    return false
                })
            }
        }

        window.addEventListener('click', handleOutSideClick)
        return () => {
            window.removeEventListener('click', handleOutSideClick)
        }
    }, [menu])

    useEffect(() => {
        tooglemenu(e => {
            document.querySelector('body').classList.remove('overflow-hidden')
            return false
        })
    }, [pathname])

    let transitionin = ' translate-x-0  opacity-100'
    let transitionout = ' translate-x-[-100%]  opacity-0'
    let linkStyling =
        'flex uppercase  text-sm hover:scale-95 py-4   rounded-md duration-300 px-2 flex gap-3 item-center  '

    return (
        <div>
            {menu && (
                <div
                    className={`h-screen w-full bg-overlay   absolute  left-0 top-[76px]  z-20`}></div>
            )}

            <div ref={menuRef} className=" md:hidden">
                <button onClick={handleburgerbutton}>
                    <Image
                        src={menuIcon}
                        className="w-6 h-6 hover:scale-110 duration-300 "
                        alt="menuButton"></Image>
                </button>

                <nav
                    className={`absolute flex-col  min-h-[90vh]  px-5 py-8 gap-8 rounded-sm shadow-md  flex sm:w-1/2 w-2/3    left-0 top-[76px] z-20    duration-300 bg-[#FAFAFA] ${
                        menu ? transitionin : transitionout
                    }`}>
                    <h1 className="text-darkBlue font-semibold  text-5xl">
                        Volt
                    </h1>
                    <ul className=" list-none flex-col gap-3 ">
                        <li>
                            <Link
                                href={'/dashboard'}
                                className={`${linkStyling} ${
                                    pathname == '/dashboard'
                                        ? 'bg-darkBlue text-white '
                                        : 'text-darkGrey'
                                } `}>
                                <Image
                                    alt="dashboard"
                                    className=" w-4 h-4"
                                    src={
                                        pathname == '/dashboard'
                                            ? dasboardactive
                                            : dashboardNonActive
                                    }></Image>
                                dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/Product'}
                                className={`${linkStyling} ${
                                    pathname == '/Product'
                                        ? 'bg-darkBlue text-white'
                                        : 'text-darkGrey'
                                }`}>
                                <Image
                                    alt="product"
                                    className=" w-4 h-4"
                                    src={
                                        pathname == '/Product'
                                            ? productActive
                                            : productNonActive
                                    }></Image>
                                all products
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/order'}
                                className={`${linkStyling} ${
                                    pathname == '/order'
                                        ? 'bg-darkBlue text-white px-2'
                                        : 'text-darkGrey'
                                }`}>
                                <Image
                                    alt="orderlist"
                                    className=" w-4 h-4"
                                    src={
                                        pathname == '/order'
                                            ? orderlistActive
                                            : orderlistNonActive
                                    }></Image>
                                order list
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/customers'}
                                className={`${linkStyling} ${
                                    pathname == '/customers'
                                        ? 'bg-darkBlue text-white px-2'
                                        : 'text-darkGrey'
                                }`}>
                                <Image
                                    alt="customers"
                                    className=" w-4 h-4"
                                    src={
                                        pathname == '/customers'
                                            ? customerActive
                                            : customerNonActive
                                    }></Image>
                                customers
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MobileNav
