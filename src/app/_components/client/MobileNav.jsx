'use client'
import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import cartImg from '@/app/_assets/cart.png'
import profile from '@/app/_assets/profile.png'
import searchIcon from '@/app/_assets/searchIcon.png'
import Image from 'next/image'
import burgerIcon from '@/app/_assets/burgerIcon.png'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import UserMenu from './userMenu'
import Link from 'next/link'
export default function MobileNav() {
    let router = useRouter()
    let path = usePathname()
    let searchPar = useSearchParams()
    const [menu, tooglemenu] = useState(false)

    const SearchFunc = param => {
        router.push(`/shop?${param}`)
    }
    const stopScrolling = e => {
        if (e) {
            document.querySelector('body').classList.remove('overflow-hidden')
        } else {
            document.querySelector('body').classList.add('overflow-hidden')
        }
    }
    useEffect(() => {
        document.querySelector('body').classList.remove('overflow-hidden')
        tooglemenu(false)
    }, [path, searchPar])

    const handleburgerbutton = () => {
        tooglemenu(e => {
            stopScrolling(e)
            return !e
        })
    }

    let transitionOut = 'translate-x-[-200%]'
    let transitionIn = 'translate-x-[0]'

    return (
        <nav className=" flex p-3 md:hidden   justify-between  items-center  ">
            <div className="flex gap-3 justify-center  items-center">
                <div onClick={handleburgerbutton} className={`w-6 h-6 `}>
                    <Image
                        className="w-full h-full"
                        alt="burgerIcon"
                        src={burgerIcon}></Image>
                </div>
                <h1
                    onClick={() => {
                        router.push('./Home')
                    }}
                    className="  text-3xl font-bold">
                    {' '}
                    Volt
                </h1>
            </div>

            <div
                className={` w-screen h-screen absolute p-5 left-0 bottom-[-61px] bg-white z-10     duration-500 ease-in-out ${
                    menu ? transitionIn : transitionOut
                }`}>
                <ul
                    className={`flex  gap-2  flex-col top-0 text-2xl  font-medium w-full  `}>
                    <li>
                        <Menu
                            as="div"
                            className="relative inline-block text-left w-full">
                            <div>
                                <Menu.Button className="flex items-center w-full  gap-x-1.5 shadow-sm p-1 bg-transparent    ">
                                    category
                                    <ChevronDownIcon
                                        className=" h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-in-out duration-00"
                                enterFrom="transform opacity-0 "
                                enterTo="transform opacity-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 "
                                leaveTo="transform opacity-0 ">
                                <Menu.Items className="  w-full left-0   focus:outline-none">
                                    <div className="py-1 capitalize flex flex-col gap-2 ">
                                        <Menu.Item className={`shadow-sm p-1`}>
                                            <Link href="shop?catgeory_id=1">
                                                {'casual'}
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item className={`shadow-sm p-1`}>
                                            <Link href="shop?catgeory_id=2">
                                                formal
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item className={` shadow-sm p-1`}>
                                            <Link href="shop?catgeory_id=3">
                                                Gym
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item className={`shadow-sm p-1`}>
                                            <Link href="shop?catgeory_id=4">
                                                party
                                            </Link>
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>

                    <li className=" hover:cursor-pointer shadow-sm p-1">
                        <Link href="shop?latest=1">New Arrivals</Link>
                    </li>
                    <li className=" hover:cursor-pointer shadow-sm p-1">
                        <Link href="shop?best_seller=1">best_seller</Link>
                    </li>
                </ul>
                <form
                    method="Get"
                    onSubmit={e => {
                        e.preventDefault()
                        console.log()
                        SearchFunc(e.target[0].value)
                    }}
                    className=" mt-9 relative before:contents[''] before:bg-no-repeat before:bg-cover before:bg-search before:absolute before:w-5 before:h-5 before:left-3 before:top-1/2 before:-translate-y-1/2  ">
                    <input
                        className="w-full  rounded-lg border  outline-none  py-2 pl-10"
                        placeholder="Search for products..."></input>
                </form>
            </div>

            <div className="flex gap-2 md:gap-4  items-center">
                <Image
                    onClick={() => {
                        router.push('./cart')
                    }}
                    alt="shop icon"
                    src={cartImg}></Image>
                <UserMenu />
            </div>
        </nav>
    )
}
