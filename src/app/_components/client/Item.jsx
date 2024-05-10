"use state";
import brownTshirt from "@/app/_assets/brownT-shirt.png";
import brownTshirtBack from "@/app/_assets/brownT-shirt-back.png";
import brownTshirtModel from "@/app/_assets/brownT-shirt-model.png";
import star from "@/app/_assets/star.png";
import Plus from "@/app/_assets/plusIcon.svg";
import Minus from "@/app/_assets/MinusIcon.svg";
import Button from "./Button";
import ItemInfo from "./ItemInfo";
import { useState } from "react";
import SizeButton from "./SizeButton";
import Image from "next/image";
let cart = new Array();
function Item({ ...props }) {
	const [counter, setCounter] = useState(1);
	const [Active, setActive] = useState("Small");
	const [addtoCart, setAddToCart] = useState();

	let rating = props.rate;
	let finalRate = Math.floor(rating);
	const stars = new Array(finalRate).fill(0);

	function handleAdd() {
		setCounter((prev) => prev + 1);
	}

	function handleMinus() {
		setCounter((prev) => prev - 1);
	}

	function handleActive(params) {
		if (params === "Small") {
			setActive("Small");
		} else if (params === "Medium") {
			setActive("Medium");
		} else if (params === "Large") {
			setActive("Large");
		} else if (params === "X-Large") {
			setActive("X-Large");
		}
	}

	let x = {
		id: props.id,
		src: brownTshirt,
		title: props.title,
		rating: props.rating,
		price: props.price,
		rate: props.rate,
		description: props.description,
		quantity: counter,
	};

	function handleAddToCart() {
		cart.push(x);
		setAddToCart(cart);
	}

	localStorage.setItem("cart", JSON.stringify(cart));

	return (
		<section className=" mt-7">
			<div className=" container px-4 m-auto max-w-7xl">
				<div className="flex flex-col md:flex-row gap-8">
					<div className="flex flex-col md:flex-row gap-3">
						<div className="order-2 md:order-1 flex gap-3 md:flex-col">
							<div className=" ">
								<Image
									src={brownTshirt}
									alt=""
									className=" w-[152px] h-[168px] rounded-2xl"
								/>
							</div>
							<div>
								<Image
									src={brownTshirtBack}
									alt=""
									className="w-[152px] h-[168px] rounded-2xl"
								/>
							</div>
							<div>
								<Image
									src={brownTshirtModel}
									alt=""
									className="w-[152px] h-[168px] rounded-2xl"
								/>
							</div>
						</div>

						<div className=" h-full order-1 md:order-2">
							<Image
								src={brownTshirt}
								alt=""
								className="h-full w-full"
							/>
						</div>
					</div>

					<div>
						<h3 className=" font-montserrat font-semibold text-3xl">
							{props.title}
						</h3>
						<div className=" flex gap-5 my-5">
							<div className=" flex gap-2">
								{stars.map((st, i) => (
									<Image
										src={star}
										key={i}
										className="h-4 w-4 "
										alt="Customer Rating"
									/>
								))}
							</div>
							<p className=" font-plusj ">{props.rating}</p>
						</div>
						<div className="my-5">
							<p className="font-plusj font-bold text-2xl">{`$${props.price}`}</p>
						</div>
						<p className=" font-plusj text-sm text-gray-500 mb-4">
							{props.description}
						</p>
						<hr className="h-1 bg-hrColor" />
						<div className=" my-5">
							<p className="mb-2 font-plusj text-gray-500 text-lg">
								Select Colors
							</p>
							<div className="flex gap-5">
								<button className=" w-[37px] h-[37px] rounded-[50%] bg-[#4F4631]"></button>
								<button className=" w-[37px] h-[37px] rounded-[50%] bg-[#314F4A]"></button>
								<button className=" w-[37px] h-[37px] rounded-[50%] bg-[#31344F]"></button>
							</div>
						</div>
						<hr className="h-1 bg-hrColor" />
						<div className="my-5">
							<p className="mb-2 font-plusj text-gray-500 text-lg">
								Choose Size
							</p>
							<div className="flex gap-4">
								<div className=" w-[25%]  sm:w-[15%] text-xs sm:text-base">
									<SizeButton
										title="Small"
										bg_color="bg-main_gray"
										text_color="text-gray-500"
										mobile_width="w-full"
										pc_width="w-full"
										handleActive={() => handleActive("Small")}
										isActive={Active === "Small"}
									/>
								</div>
								<div className="w-[25%]  sm:w-[15%] text-xs sm:text-base">
									<SizeButton
										title="Medium"
										text_color="text-gray-500"
										mobile_width="w-full"
										pc_width="w-full"
										handleActive={() => handleActive("Medium")}
										isActive={Active === "Medium"}
									/>
								</div>

								<div className="w-[25%]  sm:w-[15%] text-xs sm:text-base">
									<SizeButton
										title="Large"
										bg_color="bg-main_gray"
										text_color="text-gray-500"
										mobile_width="w-full"
										pc_width="w-full"
										handleActive={() => handleActive("Large")}
										isActive={Active === "Large"}
									/>
								</div>

								<div className="w-[25%]  sm:w-[15%] text-xs sm:text-base">
									<SizeButton
										title="X-Large"
										bg_color="bg-main_gray"
										text_color="text-gray-500"
										mobile_width="w-full"
										pc_width="w-full"
										handleActive={() => handleActive("X-Large")}
										isActive={Active === "X-Large"}
									/>
								</div>
							</div>
						</div>
						<hr className="h-1 bg-hrColor" />
						<div className=" flex gap-6 mt-5">
							<div className=" flex w-[30%] bg-main_gray px-4 justify-between rounded-3xl text-sm md:text-base  p-1 border-2 border-solid font-plusj">
								<button className="font-bold">
									<Image
										src={Minus}
										alt=""
										onClick={handleMinus}
									/>
								</button>
								<p className=" font-plusj text-lg">{counter}</p>
								<button
									className="font-bold"
									onClick={handleAdd}>
									<Image
										src={Plus}
										alt=""
									/>
								</button>
							</div>
							<div className="w-[60%]">
								<Button
									title="Add To Cart"
									text_color="text-white"
									bg_color="bg-black"
									pc_width="w-full"
									mobile_width="w-full"
									handleClick={handleAddToCart}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ItemInfo />
		</section>
	);
}
export default Item;
