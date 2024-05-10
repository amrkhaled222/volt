"use client";
import ItemPreview from "@/app/_components/client/ItemPreview";
import Preview from "@/app/_components/client/Preview";
import Footer from "@/app/_components/client/Footer";
import MobileNav from "@/app/_components/client/MobileNav";
import Nav from "@/app/_components/client/Nav";
import ClothItem from "@/app/_components/client/ClothItem";
import { products } from "@/app/_components/client/products";
function ItemPage() {
	const productsSample = products.slice(0, 4);
	return (
		<main>
			<head>
				<div className="container px-4 m-auto max-w-7xl">
					<MobileNav />
					<Nav />
				</div>
			</head>
			<ItemPreview />
			<Preview title="You might also like">
				<div className="flex flex-wrap justify-center gap-4 mb-10">
					{productsSample.map((product) => (
						<ClothItem
							key={product.id}
							{...product}
						/>
					))}
				</div>
			</Preview>
			<Footer />
		</main>
	);
}
export default ItemPage;
