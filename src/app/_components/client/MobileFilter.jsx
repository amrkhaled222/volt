"use client";
import { useState } from "react";
import settingsIcon from "@/app/_assets/setting-lines.png";
import FilterButton from "@/app/_components/client/FilterButton";
import Button from "@/app/_components/client/Button";
import arrowRightBlack from "@/app/_assets/right-arrow-black.png";
import Image from "next/image";
function MobileFilter() {
	let [isClicked, setIsClicked] = useState(false);

	let [isdressStyleClicked, setIsClickedDressStyleClicked] = useState(false);

	function handleSettingsClick() {
		setIsClicked(!isClicked);
	}

	let imageClasses = `duration-200 ${isClicked ? "rotate" : ""}`;

	let arrowClasses = `duration-200 ${isdressStyleClicked ? "rotate" : ""}`;

	function handleArrowClicked() {
		setIsClickedDressStyleClicked(!isdressStyleClicked);
	}
	return (
		<aside className="  z-10 w-full  md:hidden  rounded-xl border-2 border-solid border-main_gray p-3">
			<div className="flex justify-between">
				<h4 className=" font-plusj font-bold">Filter</h4>
				<button
					onClick={handleSettingsClick}
					className=" w-5 h-5">
					<Image
						src={settingsIcon}
						alt=""
						className={imageClasses}
					/>
				</button>
				<button
					onClick={handleSettingsClick}
					className=" w-5 h-5">
					<Image
						src={settingsIcon}
						alt=""
						className={imageClasses}
					/>
				</button>
			</div>

			{isClicked && (
				<div>
					<hr className="h-1 bg-hrColor my-4" />
					<ul>
						<li>
							<FilterButton title="T-shirts" />
						</li>
						<li>
							<FilterButton title="Shorts" />
						</li>
						<li>
							<FilterButton title="Shirts" />
						</li>
						<li>
							<FilterButton title="Hoodie" />
						</li>
						<li>
							<FilterButton title="Jeans" />
						</li>
					</ul>
				</div>
			)}

			<hr className="h-1 bg-hrColor my-4" />

			<div className="flex justify-between mb-4">
				<h4 className=" font-plusj font-bold">Dress Style</h4>
				<button
					onClick={handleArrowClicked}
					className=" w-4 h-4">
					<Image
						src={arrowRightBlack}
						alt=""
						className={arrowClasses}
					/>
				</button>
			</div>

			{isdressStyleClicked && (
				<ul>
					<li>
						<FilterButton title="Casual" />
					</li>
					<li>
						<FilterButton title="Formal" />
					</li>
					<li>
						<FilterButton title="Party" />
					</li>
					<li>
						<FilterButton title="Gym" />
					</li>
				</ul>
			)}

			<div className=" my-5">
				<Button
					title="Apply Filter"
					bg_color="bg-black"
					text_color="text-white"
					mobile_width="w-full"
					pc_width="w-full"
				/>
			</div>
		</aside>
	);
}
export default MobileFilter;
