import rightArrow from "@/app/_assets/right-arrow.png";
import Image from "next/image";
function FilterButton({ title }) {
	return (
		<div className=" flex justify-between items-center mb-3">
			<button className=" font-plusj text-gray-500">{title}</button>
			<div className=" w-3 h-3">
				<Image
					src={rightArrow}
					alt=""
				/>
			</div>
		</div>
	);
}
export default FilterButton;
