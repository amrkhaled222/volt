"use client";
import Button from "@/app/_components/client/Button";
function Preview({ title, children }) {
	return (
		<section className=" my-20">
			<div className="container m-auto px-4 max-w-7xl ">
				<h2 className=" font-montserrat font-extrabold uppercase my-12 text-center text-3xl">
					{title}
				</h2>

				{children}

				<div className="flex justify-center font-montserrat">
					<Button
						title="View All"
						text_color="text-black"
						bg_color="bg-white"
						pc_width="w-40"
					/>
				</div>
				<hr className=" h-1 bg-hrColor mt-10" />
			</div>
		</section>
	);
}
export default Preview;
