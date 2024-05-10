'use client'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Nav from '../_components/Nav'
import notification from '../_assets/notification.png'
import Image from 'next/image'
import downArrowActive from '../_assets/downArrowActive.png'
import downArrowNonActive from '../_assets/downArrowNonActive.png'
import MobileNav from '../_components/MobileNav'
import Link from 'next/link'
import nextIcon from '../_assets/next.png'
import logOutIcon from '../_assets/logOut.png'
import PathTitle from '../_components/PathTitle'

export default function RootLayout({ children }) {
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
                                Admin
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
                                <h2 className=" font-medium capitalize p-1">
                                    Admin
                                </h2>
                                <Link
                                    href={''}
                                    className="flex items-center justify-between p-1 hover:scale-95 duration-300">
                                    change password{' '}
                                    <Image
                                        src={nextIcon}
                                        alt="arrowIcon"
                                        className="w-4 h-4"></Image>
                                </Link>
                                <Link
                                    className="flex items-center justify-between p-1 hover:scale-95 duration-300"
                                    href={''}>
                                    log out{' '}
                                    <Image
                                        className="w-4 h-4"
                                        src={logOutIcon}
                                        alt="logOut"></Image>
                                </Link>
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
