// import verified from "../assets/verfied.png";
import Image from "next/image";
import star from "@/app/_assets/star.png";
function Feedback({ ...props }) {
	let rating = props.rate;
	let finalRate = Math.floor(rating);
	let stars = Array(finalRate).fill(0);
	return (
		<div className=" box-border w-full  border-2 border-solid border-main_gray bg-white rounded-2xl p-5">
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
			<div className=" flex gap-3">
				<h5 className=" font-plusj font-bold text-xl my-2">
					{props.customerName}
				</h5>
			</div>
			<p className="font-plus text-gray-500">{props.feedback}</p>
		</div>
	);
}
export default Feedback;
