"use client";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import cartImg from "@/app/_assets/cart.png";
import profile from "@/app/_assets/profile.png";
import searchIcon from "@/app/_assets/searchIcon.png";
import Image from "next/image";
import burgerIcon from "@/app/_assets/burgerIcon.png";

export default function MobileNav() {
	const [menu, tooglemenu] = useState(false);

	const stopScrolling = (e) => {
		if (e) {
			document.querySelector("body").classList.remove("overflow-hidden");
		} else {
			document.querySelector("body").classList.add("overflow-hidden");
		}
	};

	const handleburgerbutton = () => {
		tooglemenu((e) => {
			stopScrolling(e);
			return !e;
		});
	};

	let transitionOut = "translate-x-[-200%]";
	let transitionIn = "translate-x-[0]";

	return (
		<nav className=" flex p-3 sm:hidden   justify-between  items-center ">
			<div className="flex gap-3 justify-center  items-center">
				<div
					onClick={handleburgerbutton}
					className={`w-6 h-6 `}>
					<Image
						className="w-full h-full"
						alt="burgerIcon"
						src={burgerIcon}></Image>
				</div>
				<h1 className="  text-3xl font-bold"> Volt</h1>
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
									Shop
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
											<a href="#">{" casual   "}</a>
										</Menu.Item>
										<Menu.Item className={`shadow-sm p-1`}>
											<a href="#">formal</a>
										</Menu.Item>
										<Menu.Item className={` shadow-sm p-1`}>
											<a href="#">Gym</a>
										</Menu.Item>
										<Menu.Item className={`shadow-sm p-1`}>
											<a href="#">party</a>
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</li>

					<li className=" hover:cursor-pointer shadow-sm p-1">On Sale</li>
					<li className=" hover:cursor-pointer shadow-sm p-1">New Arrivals</li>
					<li className=" hover:cursor-pointer shadow-sm p-1">Brand</li>
				</ul>
			</div>

			<div className="flex gap-2 md:gap-4  items-center">
				<button className={`w-[20px] h-[20px]`}>
					<Image
						alt="searchIcon"
						src={searchIcon}></Image>
				</button>
				<Image
					alt="shop icon"
					src={cartImg}></Image>
				<Image
					alt="profileIcon"
					src={profile}></Image>
			</div>
		</nav>
	);
}
