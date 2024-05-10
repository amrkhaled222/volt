"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import dasboardactive from "../_assets/dashboardActive.png";
import dashboardNonActive from "../_assets/dashboardNonActive.png";
import productActive from "../_assets/productActive.png";
import productNonActive from "../_assets/productNonActive.png";
import orderlistNonActive from "../_assets/orderlistNonActive.png";
import orderlistActive from "../_assets/orderlistActive.png";
import customerActive from "../_assets/customerActive.png";
import customerNonActive from "../_assets/customerNonActive.png";

export default function Nav() {
	let linkStyling =
		"flex uppercase  text-sm hover:scale-95 py-4 rounded-md duration-300 px-2 flex gap-3 item-center  ";

	const pathname = usePathname();

	return (
		<nav className="  flex-col row-span-3  100% max-w-[260px] px-5 py-8 gap-8 rounded-sm shadow-md hidden md:flex bg-[#fafafa]   ">
			<h1 className="text-darkBlue font-semibold  text-5xl">Volt</h1>
			<ul className=" list-none flex-col gap-3 bg-[#fafafa] ">
				<li>
					<Link
						href={"/dashboard"}
						className={`${linkStyling} ${
							pathname == "/dashboard"
								? "bg-darkBlue text-white "
								: "text-darkGrey"
						} `}>
						<Image
							alt="dashboard"
							className=" w-4 h-4"
							src={
								pathname == "/dashboard" ? dasboardactive : dashboardNonActive
							}></Image>
						dashboard
					</Link>
				</li>
				<li>
					<Link
						href={"/allProduct"}
						className={`${linkStyling} ${
							pathname == "/allProduct"
								? "bg-darkBlue text-white"
								: "text-darkGrey"
						}`}>
						<Image
							alt="allProduct"
							className=" w-4 h-4"
							src={
								pathname == "/allProduct" ? productActive : productNonActive
							}></Image>
						all products
					</Link>
				</li>
				<li>
					<Link
						href={"/orderList"}
						className={`${linkStyling} ${
							pathname == "/orderList"
								? "bg-darkBlue text-white px-2"
								: "text-darkGrey"
						}`}>
						<Image
							alt="orderlist"
							className=" w-4 h-4"
							src={
								pathname == "/orderList" ? orderlistActive : orderlistNonActive
							}></Image>
						order list
					</Link>
				</li>
				<li>
					<Link
						href={"/customers"}
						className={`${linkStyling} ${
							pathname == "/customers"
								? "bg-darkBlue text-white px-2"
								: "text-darkGrey"
						}`}>
						<Image
							alt="customers"
							className=" w-4 h-4"
							src={
								pathname == "/customers" ? customerActive : customerNonActive
							}></Image>
						customers
					</Link>
				</li>
			</ul>
		</nav>
	);
}
