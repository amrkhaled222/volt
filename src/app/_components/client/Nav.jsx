"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import cartImg from "@/app/_assets/cart.png";
import profile from "@/app/_assets/profile.png";
import Image from "next/image";
function Nav() {
	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}
	return (
		<nav className="container m-auto  lg:gap-2    hidden sm:flex sm:gap-1	  justify-between  items-center py-5">
			<div className="logo text-3xl font-bold font-header ">Volt</div>
			<ul className="flex   lg:gap-5   gap-2">
				<li>
					<Menu
						as="div"
						className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent text-sm font-semibold text-gray-900   hover:scale-105 ">
								Shop
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
											<a
												href="#"
												className={classNames(
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
													"block px-4 py-2 text-sm"
												)}>
												{" "}
												casual
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
													"block px-4 py-2 text-sm"
												)}>
												formal
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
													"block px-4 py-2 text-sm"
												)}>
												Gym
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
													"block px-4 py-2 text-sm"
												)}>
												party
											</a>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</li>

				<li className=" hover:cursor-pointer">On Sale</li>
				<li className=" hover:cursor-pointer">New Arrivals</li>
				<li className=" hover:cursor-pointer">Brand</li>
			</ul>
			<form
				method="Get"
				className="lg:w-1/2 sm:w-1/3 relative before:contents[''] before:bg-no-repeat before:bg-cover before:bg-search before:absolute before:w-5 before:h-5 before:left-3 before:top-1/2 before:-translate-y-1/2  ">
				<input
					className="w-full  rounded-2xl border-none outline-none bg-main_gray py-2 pl-10"
					placeholder="Search for products..."></input>
			</form>
			<div className="flex gap-2 md:gap-4">
				<Image
					alt="cartImage"
					src={cartImg}
					className=" w-5 hover:cursor-pointer"></Image>
				<Image
					alt="profile"
					src={profile}
					className=" w-5 hover:cursor-pointer"></Image>
			</div>
		</nav>
	);
}

export default Nav;
