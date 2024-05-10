import Item from "@/app/_components/client/Item";

import { products } from "@/app/_components/client/products";
function ItemPreview() {
	let product = products[0];
	return (
		<section>
			<Item {...product} />
		</section>
	);
}
export default ItemPreview;
