import Item from '@/components/Client/Item'
function ItemPreview({ product }) {
    return (
        <section>
            <Item product={product} />
        </section>
    )
}
export default ItemPreview
