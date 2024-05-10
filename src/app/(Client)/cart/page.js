"use client";
import Nav from "@/app/_components/client/Nav";
import Filter from "@/app/_components/client/Filter";
import MobileFilter from "@/app/_components/client/MobileFilter";
import Footer from "@/app/_components/client/Footer";
import ClothItem from "@/app/_components/client/ClothItem";

import settingsIconBlack from "@/app/_assets/setting-lines-black.png";
import MobileNav from "@/app/_components/client/MobileNav";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

import { products } from "@/app/_components/client/products";

function CategoryPage() {
	const [page, setPage] = useState(0);
	const [filterData, setFilterData] = useState();
	const n = 9;

	useEffect(() => {
		setFilterData(
			products.filter((item, index) => {
				if (index >= page * n && index < (page + 1) * n) {
				}
				return index >= page * n && index < (page + 1) * n;
			})
		);
	}, [page]);

	const [display, setDisplay] = useState(false);

	function handleDisplay() {
		setDisplay(!display);
	}

	return (
		<main>
			<header>
				<div className=" container px-4 m-auto max-w-7xl">
					<MobileNav />
					<Nav />
				</div>
			</header>

			<section className=" relative mt-8">
				{display && <MobileFilter onClick={handleDisplay} />}
				<div className="  container px-4 m-auto max-w-7xl">
					<div className=" z-0 flex justify-center md:justify-normal gap-6">
						<Filter />
						<div className="">
							<div className="flex justify-between mb-4">
								<h2 className=" font-plusj font-bold text-3xl">Casual</h2>
								<div className=" flex justify-center items-center bg-main_gray md:hidden w-8 h-8 rounded-[50%]">
									<button
										className=""
										onClick={handleDisplay}>
										<img
											src={settingsIconBlack}
											alt=""
											className="w-5 h-5"
										/>
									</button>
								</div>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
								{filterData &&
									filterData.map((product) => (
										<ClothItem
											key={product.id}
											{...product}
										/>
									))}
							</div>
							<hr className="h-1 bg-hrColor my-4" />
							<div className="mt-5">
								<ReactPaginate
									previousLabel="Previous"
									nextLabel="Next"
									pageCount={Math.ceil(products.length / n)}
									onPageChange={(e) => setPage(e.selected)}
									breakLabel="..."
									containerClassName="flex justify-between items-center"
									previousLinkClassName="border p-2 rounded-md"
									nextLinkClassName="border py-2 px-4 rounded-md"
									activeClassName="bg-black text-white"
									pageClassName="px-2 py-1 rounded-md border "
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
export default CategoryPage;
