'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import cartImg from '@/app/_assets/cart.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import UserMenu from './userMenu'
function Nav() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    let router = useRouter()
    const SearchFunc = param => {
        router.push(`/shop?search=${param}`)
    }

    return (
        <nav className="container m-auto  lg:gap-2  hidden md:flex	  justify-between  items-center py-5 px-2">
            <Link
                href={'/'}
                className="logo text-3xl block font-bold font-header hover:scale-95 duration-300 ">
                Volt
            </Link>
            <ul className="flex whitespace-nowrap     gap-5">
                <li>
                    <Menu as="div" className="relative block text-left">
                        <div>
                            <Menu.Button className="inline-flex items-center capitalize w-full justify-center gap-x-1.5 rounded-md bg-transparent   text-gray-900   hover:scale-95 duration-300	  ">
                                category
                                <ChevronDownIcon
                                    className="-mr-1 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1 capitalize">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                href="/shop?category_id=1"
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700',
                                                    'block px-4 py-2 text-sm hover:scale-95 hover:duration-300',
                                                )}>
                                                {' '}
                                                casual
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                href="/shop?category_id=2"
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700',
                                                    'block px-4 py-2 text-sm hover:scale-95 hover:duration-300',
                                                )}>
                                                formal
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                href="/shop?category_id=3"
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700',
                                                    'block px-4 py-2 text-sm hover:scale-95 hover:duration-300',
                                                )}>
                                                Gym
                                            </Link>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                href="/shop?category_id=4"
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700',
                                                    'block px-4 py-2 text-sm hover:scale-95 hover:duration-300',
                                                )}>
                                                party
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>

                <li className=" hover:cursor-pointer hover:scale-95 hover:duration-300">
                    <Link href="/shop?latest=1">New Arrival</Link>
                </li>

                <li className=" hover:cursor-pointer hover:scale-95 hover:duration-300">
                    <Link href="/shop?best_seller=1">Best Seller</Link>{' '}
                </li>
            </ul>
            <form
                method="Get"
                onSubmit={e => {
                    e.preventDefault()

                    SearchFunc(e.target[0].value)
                }}
                className="xl:w-1/2 md:w-1/3 relative before:contents[''] before:bg-no-repeat before:bg-cover before:bg-search before:absolute before:w-5 before:h-5 before:left-3 before:top-1/2 before:-translate-y-1/2  ">
                <input
                    className="w-full  rounded-2xl border-none outline-none bg-main_gray py-2 pl-10"
                    placeholder="Search for products..."></input>
            </form>

            <div className="flex items-center gap-2 md:gap-4">
                <Image
                    onClick={() => {
                        router.push('/cart')
                    }}
                    alt="cartImage"
                    src={cartImg}
                    className="w-5 h-5 hover:cursor-pointer"></Image>
                <UserMenu></UserMenu>
            </div>
        </nav>
    )
}

export default Nav
