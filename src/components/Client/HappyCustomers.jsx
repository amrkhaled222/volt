import arrowLeft from "@/app/_assets/arrow-left-bold 2.svg";
import arrowRight from "@/app/_assets/arrow-right-bold 1.svg";
import stars from "@/app/_assets/stars.svg";
import Feedback from "./Feedback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feedbacks } from "./feedbacks";
import { sliderSettings } from "./sliderSettings";
function HappyCustomers() {
	return (
		<section className=" mt-20 mb-52 z-0">
			<div className="container m-auto px-4 max-w-7xl z-10">
				<div className=" flex justify-between">
					<h2 className="uppercase font-extrabold font-montserrat text-3xl sm:text-5xl">
						OUR HAPPY CUSTOMERS
					</h2>
				</div>
				<div className="mt-16 max-w-full">
					<Slider
						{...sliderSettings}
						autoplay={true}
						autoplaySpeed={3000}
						arrows={false}>
						{feedbacks.map((feedback) => (
							<Feedback
								key={feedback.id}
								{...feedback}
							/>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
}
export default HappyCustomers;
