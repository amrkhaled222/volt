import star from "@/app/_assets/star.png";
import Image from "next/image";
function ClothItem({ ...props }) {
	let rating = props.rate;
	let finalRate = Math.floor(rating);
	const stars = new Array(finalRate).fill(0);
	return (
		<div key={props.id}>
			<div className=" mb-3">
				<Image
					src={props.src}
					alt={props.title}
				/>
			</div>

			<h3 className=" font-plusj font-bold text-sm mb-2">{props.title}</h3>

			<div className="flex gap-5 mb-2">
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

				<p className="font-plusj font-bold text-sm">{props.rating}</p>
			</div>
			{props.discount ? (
				<p className=" flex gap-3 font-plusj font-bold text-lg">
					{`$${props.price * [props.discount / 100]}`}
					<span className=" font-plusj font-bold text-sm block  text-gray-500 line-through">{`$${props.price}`}</span>
					<span className=" text-center text-[10px] block w-8  text-discountColor p-1 rounded-xl  ">
						{`-${props.discount}%`}
					</span>
				</p>
			) : (
				<p className=" font-plusj font-bold text-sm">{`$${props.price}`}</p>
			)}
		</div>
	);
}
export default ClothItem;
