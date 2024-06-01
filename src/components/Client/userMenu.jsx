import { useState, useEffect, useRef } from 'react'
import nextIcon from '@/app/_assets/next.png'
import logOutIcon from '@/app/_assets/logOut.png'
import Image from 'next/image'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/navigation'
import profile from '@/app/_assets/profile.png'
import dasboard from '@/app/_assets/dashboardNonActive.png'
import rightArrow from '@/app/_assets/right-arrow-black.png'
export default function UserMenu() {
    let router = useRouter()
    const user = useAuth()

    const [userMenu, toogleUserMenu] = useState(false)

    const handleUserMenu = () => {
        toogleUserMenu(e => !e)
    }

    // when click outside close account menu
    const useMenuRef = useRef(0)

    useEffect(() => {
        if (!userMenu) return

        const handleOutSideClick = event => {
            if (
                useMenuRef.current &&
                !useMenuRef.current.contains(event.target)
            ) {
                toogleUserMenu(() => false)
            }
        }

        window.addEventListener('click', handleOutSideClick)
        return () => {
            window.removeEventListener('click', handleOutSideClick)
        }
    }, [userMenu])

    // animation for admin menu
    let transitionin = ' translate-x-0  opacity-100'
    let transitionout = ' -translate-x-[700%]  opacity-0 '
    return (
        <div ref={useMenuRef} className="relative">
            <Image
                onClick={() => {
                    handleUserMenu()
                }}
                width={20}
                height={20}
                alt="profile"
                src={user?.user?.image ? user.user.image : profile}
                className={`${
                    user?.user?.image ? 'w-10 h-10' : 'w-5 h-5'
                } hover:cursor-pointer rounded-[50%]`}></Image>

            <div
                className={`w-[230px] shadow-lg absolute bg-white duration-500 ease-in-out  ${
                    userMenu ? ` ${transitionin} ` : ` ${transitionout}`
                } flex flex-col  top-10 md:top-[60px]   right-0  text-black  z-20 p-4 rounded-md text-sm w-1/2   lg:gap-4 gap-2  `}>
                {user?.user && (
                    <div className=" flex flex-col  lg:gap-4 gap-2">
                        <h2 className=" font-semibold capitalize p-1">
                            {user.user.name}
                        </h2>

                        <button
                            onClick={() => {
                                router.push(`/profile`)
                            }}
                            className="flex font-medium items-center justify-between p-1 hover:scale-95 duration-300">
                            Profile
                            <Image
                                src={nextIcon}
                                alt="arrowIcon"
                                className="w-4 h-4"></Image>
                        </button>

                        {user.user.is_admin ? (
                            <button
                                className="flex items-center font-medium justify-between p-1 hover:scale-95 duration-300"
                                onClick={() => {
                                    router.push('/dashboard')
                                }}>
                                Dashboard
                                <Image
                                    className="w-4 h-4"
                                    src={dasboard}
                                    alt="dashboard"></Image>
                            </button>
                        ) : (
                            ''
                        )}

                        <button
                            className="flex items-center  font-medium justify-between p-1 hover:scale-95 duration-300"
                            onClick={() => {
                                user.logout()
                            }}>
                            Sign Out
                            <Image
                                className="w-4 h-4"
                                src={logOutIcon}
                                alt="logOut"></Image>
                        </button>
                    </div>
                )}
                {!user?.user && (
                    <>
                        <button
                            className="flex font-medium items-center justify-between p-1 hover:scale-95 duration-300"
                            onClick={() => {
                                router.push('/login')
                            }}>
                            Login
                            <Image
                                className="w-4 h-4"
                                src={logOutIcon}
                                alt="logOut"></Image>
                        </button>
                        <button
                            className="flex font-medium items-center justify-between p-1 hover:scale-95 duration-300"
                            onClick={() => {
                                router.push('/register')
                            }}>
                            Join Us
                            <Image
                                className="w-4 h-4"
                                src={rightArrow}
                                alt="right arrow"></Image>
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}
