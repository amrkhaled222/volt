import Button from "@/app/_components/client/Button";

function WriteReview(cancelReview) {
	return (
		<form className="mt-4">
			<div className="  md:w-1/2 flex flex-col gap-3 mb-4 ">
				<label
					htmlFor="name"
					className=" font-plusj font-bold text-xl">
					Name :
				</label>
				<input
					type="text"
					id="name"
					className="border-[1px] border-solid border-gray-500 rounded-lg p-3 font-plusj"
					placeholder="Enter your name"
				/>
			</div>
			<div className="  md:w-1/2 flex flex-col gap-3 mb-4 ">
				<label
					htmlFor="Rating"
					className=" font-plusj font-bold text-xl">
					Your Rating :
				</label>
				<input
					type="number"
					id="Rating"
					className="border-[1px] border-solid border-gray-500 rounded-lg p-3 font-plusj"
					placeholder="Enter your Rating from 1-5"
					min={1}
					max={5}
				/>
			</div>
			<div className="  md:w-1/2 flex flex-col gap-3 mb-5 ">
				<label
					htmlFor="Feedback"
					className=" font-plusj font-bold text-xl">
					Your Feedback :
				</label>
				<textarea
					id="Feedback"
					className="border-[1px] border-solid border-gray-500 rounded-lg p-3 font-plusj"
					placeholder="Enter your Feedback"
				/>
			</div>
			<div className=" flex gap-5">
				<div>
					<Button
						title={"Submit"}
						text_color={"text-black"}
						bg_color={"bg-main_gray"}
					/>
				</div>
				<div>
					<input
						type="reset"
						className="rounded-3xl  block p-2 border-2 border-solid font-plusj bg-black text-white"
					/>
				</div>
				<div>
					<Button
						title={"Cancel"}
						text_color={"text-white"}
						bg_color={"bg-black"}
					/>
				</div>
			</div>
		</form>
	);
}
export default WriteReview;
