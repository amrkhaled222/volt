import Button from "./Button";
import Feedback from "./Feedback";
import arrowDown from "@/app/_assets/arrowDown.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { feedbacks } from "./feedbacks";
import { sliderSettings } from "./sliderSettings";
function ItemInfo({ children, ...props }) {
	const [Display, setDisplay] = useState("rating");

	function handleClick(param) {
		if (param == "rating") {
			setDisplay("rating");
		} else if (param == "Details") {
			setDisplay("Details");
		} else if (param == "FAQs") {
			setDisplay("FAQs");
		}
	}

	function handleWriteReviewClick() {
		setDisplay("Write a review");
	}

	let liTitle;

	if (Display === "rating") {
		liTitle = "All Reviews";
	} else if (Display === "Details") {
		liTitle = "Description";
	} else if (Display === "FAQs") {
		liTitle = "FAQs";
	} else if (Display === "Write a review") {
		liTitle = "Submit Your Review";
	}

	const listButtonClass = `text-black font-bold`;

	return (
		<section className=" my-7">
			<div className="conatiner px-4 m-auto max-w-7xl">
				<div>
					<ul className="flex justify-between sm:justify-around">
						<li className=" font-plusj  text-gray-500 hover:text-black">
							<button
								className={Display === "Details" && listButtonClass}
								onClick={() => handleClick("Details")}>
								Product Details
							</button>
						</li>
						<li className=" font-plusj  text-gray-500  hover:text-black">
							<button
								className={Display === "rating" && listButtonClass}
								onClick={() => handleClick("rating")}>
								Rating & Reviews
							</button>
						</li>
						<li className=" font-plusj  text-gray-500  hover:text-black">
							<button
								className={Display === "FAQs" && listButtonClass}
								onClick={() => handleClick("FAQs")}>
								FAQs
							</button>
						</li>
					</ul>
					<hr className="h-1 bg-hrColor mt-4" />
					<div className="mt-4 flex justify-between">
						<div className="flex sm:gap-2 items-center">
							<p className="font-montserrat font-bold text-2xl">{liTitle}</p>
							{Display == "rating" && (
								<p className=" font-plusj text-sm text-gray-500">
									{`(${feedbacks.length})`}
								</p>
							)}
						</div>

						{Display === "rating" && (
							<div className=" flex gap-2">
								<button className=" flex items-center gap-2 rounded-3xl px-2  border-2 border-solid font-plusj bg-main_gray">
									<p>Latest</p>
									<img
										src={arrowDown}
										alt=""
									/>
								</button>
								<Button
									title="write a review"
									text_color="text-white"
									bg_color="bg-black"
									handleClick={handleWriteReviewClick}
								/>
							</div>
						)}
					</div>
				</div>

				{Display == "rating" && (
					<div className=" mt-7 ">
						<Slider
							{...sliderSettings}
							autoplay={true}
							autoplaySpeed={5000}
							arrows={false}
							rows={2}>
							{feedbacks.map((feedback) => (
								<Feedback
									key={feedback.id}
									{...feedback}
								/>
							))}
						</Slider>
					</div>
				)}

				{Display == "Details" && (
					<p className=" text-gray-500 text-lg font-plusj my-5">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
						nulla. Facilis ex quaerat qui consectetur. Obcaecati nostrum sunt
						qui soluta nesciunt praesentium, dolore aliquam reprehenderit,
						deleniti, adipisci fuga dolorum? Veniam.
					</p>
				)}

				{Display == "FAQs" && (
					<p className=" text-3xl text-center font-montserrat font-extrabold my-5">
						This Section is under Devolpment
					</p>
				)}

				{Display === "Write a review" && (
					<WriteReview cancelReview={() => handleClick("rating")} />
				)}
			</div>
		</section>
	);
}
export default ItemInfo;
