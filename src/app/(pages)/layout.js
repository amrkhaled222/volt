'use client'
import { useState, useRef, useEffect } from 'react'

import Nav from '../_components/Nav'
import notification from '../_assets/notification.png'
import Image from 'next/image'
import downArrowActive from '../_assets/downArrowActive.png'
import downArrowNonActive from '../_assets/downArrowNonActive.png'
import MobileNav from '../_components/MobileNav'
import { useRouter } from 'next/navigation'
import logOutIcon from '@/app/_assets/logOut.png'
import PathTitle from '../_components/PathTitle'
import { useLayoutEffect } from 'react'
import { redirect } from 'next/navigation'
import { useAuth } from '@/hooks/auth'
import StoreIcon from '@/app/_assets/grocery-store.png'
export default function RootLayout({ children }) {
    //get user data
    const user = useAuth()

    //use route
    let router = useRouter()
    //redirect unauthorized user
    useLayoutEffect(() => {
        if (!user?.user?.is_admin) {
            redirect('/Home')
        }
    }, [])
    const [AdminActive, toogleAdmin] = useState(false)

    const handleAdminButton = () => {
        toogleAdmin(e => !e)
    }

    // when click outside close account menu
    const AdminRef = useRef(0)

    useEffect(() => {
        if (!AdminActive) return

        const handleOutSideClick = event => {
            if (AdminRef.current && !AdminRef.current.contains(event.target)) {
                toogleAdmin(() => false)
            }
        }

        window.addEventListener('click', handleOutSideClick)
        return () => {
            window.removeEventListener('click', handleOutSideClick)
        }
    }, [AdminActive])
    //end

    // animation for admin menu
    let transitionin = ' translate-x-0  opacity-100'
    let transitionout = ' -translate-x-[700%]  opacity-0 '
    return (
        <main className=" m-auto md:grid md:grid-cols-[260px,1fr] grid max-w-[1440px] min-h-screen relative bg-mainBg  md:grid-rows-layout grid-rows-mobilelayout  ">
            <Nav></Nav>

            <header className="  shadow-md  relative bg-[#FAFAFA] ">
                <div className=" flex md:justify-end items-center justify-between m-auto p-3 md:p-5 container md:mr-auto  z-10">
                    <div>
                        <MobileNav></MobileNav>
                    </div>

                    <div className="flex gap-4 items-center   ">
                        <button className="cursor-pointer">
                            <Image
                                alt="notification"
                                className=" w-6 h-6 hover:scale-95 duration-300"
                                src={notification}></Image>
                        </button>

                        <div ref={AdminRef} className="uppercase ">
                            <div
                                onClick={handleAdminButton}
                                className={`flex px-4 py-2 uppercase rounded-md  items-center gap-1  border-2 cursor-pointer hover:scale-95 duration-300 ${
                                    AdminActive
                                        ? 'bg-darkBlue text-white border-darkBlue   '
                                        : 'border-black'
                                } `}>
                                {user?.user?.name}
                                <Image
                                    alt="downArrow"
                                    className=" w-4 h-4"
                                    src={
                                        AdminActive
                                            ? downArrowActive
                                            : downArrowNonActive
                                    }></Image>
                            </div>

                            <div
                                className={`w-1/2 sm:w-[230px]  absolute bg-white duration-500 ease-in-out  ${
                                    AdminActive
                                        ? ` ${transitionin} `
                                        : ` ${transitionout}`
                                } flex flex-col  top-24 md:top-[110px]  right-4 text-black  z-20 p-4 rounded-md text-sm w-1/2   lg:gap-4 gap-2  `}>
                                <h2 className=" font-semibold text-xl    capitalize  p-1">
                                    {user?.user?.name}
                                </h2>

                                <button
                                    className="flex items-center  font-medium justify-between p-1 hover:scale-95 duration-300"
                                    onClick={() => {
                                        router.push('/Home ')
                                    }}>
                                    store
                                    <Image
                                        className="w-4 h-4"
                                        src={StoreIcon}
                                        alt="storeIcon"></Image>
                                </button>
                                <button
                                    className="flex items-center  font-medium justify-between p-1 hover:scale-95 duration-300"
                                    onClick={() => {
                                        user.logout()
                                    }}>
                                    log out{' '}
                                    <Image
                                        className="w-4 h-4"
                                        src={logOutIcon}
                                        alt="logOut"></Image>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className=" md:row-start-2 md:col-start-2">
                <div className="relative h-[100%]">
                    {/* make over lay*/}

                    {AdminActive && (
                        <div
                            className={`  h-[100%] w-full bg-overlay absolute top-50 z-10`}></div>
                    )}
                    <PathTitle></PathTitle>

                    {children}

                    <footer></footer>
                </div>
            </div>
        </main>
    )
}
