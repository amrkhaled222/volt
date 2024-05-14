<<<<<<< HEAD
=======

>>>>>>> c1483f3cf58f09f61f2e6b8c987ff438df07a61c
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
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
let cart = new Array();
function Item({ product }) {
	const [counter, setCounter] = useState(1);
	const {user} = useAuth()
	const [quantity, setQuantity] = useState(1)
	const [Active, setActive] = useState("Small");
	const [addtoCart, setAddToCart] = useState();
	
<<<<<<< HEAD
=======

>>>>>>> c1483f3cf58f09f61f2e6b8c987ff438df07a61c

	let rating = product.rate;
	let finalRate = Math.floor(rating);
	let stars = false
	if (rating){
		stars = new Array(finalRate).fill(0);
	}

<<<<<<< HEAD
=======

>>>>>>> c1483f3cf58f09f61f2e6b8c987ff438df07a61c
	async function  handleAddToCart() {
		console.log('add')
		if(user){
			try {
				await axios
					.post(
						`api/cart/add/${product.id}`,{
							'quantity': quantity
						}
					)
					.then(res => {
						console.log(res)
					})
			} catch (err) {
				throw new Error(err)
			}
		} else {
		    setAddToCart();
		}
    }

	function handleAdd() {
		setQuantity((prev) => prev + 1);
	}

	function handleMinus() {
		setQuantity((prev) => prev - 1);
	}
<<<<<<< HEAD
=======

    function handleAdd() {
        setCounter(prev => prev + 1)
    }

    function handleMinus() {
        setCounter(prev => prev - 1)
    }

>>>>>>> c1483f3cf58f09f61f2e6b8c987ff438df07a61c

    function handleActive(params) {
        if (params === 'Small') {
            setActive('Small')
        } else if (params === 'Medium') {
            setActive('Medium')
        } else if (params === 'Large') {
            setActive('Large')
        } else if (params === 'X-Large') {
            setActive('X-Large')
        }
    }

<<<<<<< HEAD
	// localStorage.setItem("cart", JSON.stringify(cart));
=======

	// localStorage.setItem("cart", JSON.stringify(cart));

    function handleAddToCart() {
        cart.push(x)
        setAddToCart(cart)
    }

    localStorage.setItem('cart', JSON.stringify(cart))

>>>>>>> c1483f3cf58f09f61f2e6b8c987ff438df07a61c

    return (
        <section className=" mt-7">
            <div className=" container px-4 m-auto max-w-7xl">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className=" h-full order-1 md:order-2">
                            <Image
                                src={product.picture}
                                height={500}
                                width={350}
                                alt=""
                                className="max-h-[350px] max-w-[350px]"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className=" font-montserrat font-semibold text-3xl">
                            {product.title}
                        </h3>
                        <div className=" flex gap-5 my-5">
                            <div className=" flex gap-2">
                                {stars &&
                                    stars.map((st, i) => (
                                        <Image
                                            src={star}
                                            key={i}
                                            className="h-4 w-4 "
                                            alt="Customer Rating"
                                        />
                                    ))}
                            </div>
                            <p className=" font-plusj ">{product.rating}</p>
                        </div>
                        <div className="my-5">
                            <p className="font-plusj font-bold text-2xl">
                                {`${product.price}`} LE
                            </p>
                        </div>
                        <p className=" font-plusj text-sm text-gray-500 mb-4">
                            {product.description}
                        </p>
                        {/* <hr className="h-1 bg-hrColor" />
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
						</div> */}
<<<<<<< HEAD
=======

>>>>>>> c1483f3cf58f09f61f2e6b8c987ff438df07a61c
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
								<p className=" font-plusj text-lg">{quantity}</p>
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
<<<<<<< HEAD
=======

>>>>>>> c1483f3cf58f09f61f2e6b8c987ff438df07a61c
}
export default Item
