import Item from "@/app/_components/client/Item";

import { products } from "@/app/_components/client/products";
function ItemPreview({product}) {
	return (
		<section>
			<Item product = {product} />
		</section>
	);
}
export default ItemPreview;
