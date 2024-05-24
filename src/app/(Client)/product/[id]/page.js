'use client'
import Preview from '@/components/Client/Preview'
import ClothItem from '@/components/Client/ClothItem'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import Loader from '@/components/Loader'
import Item from '@/components/Client/Item'

function ItemPage(props) {
    const [product, setProduct] = useState({})
    const [youMightAlsoLike, setYouMight] = useState({})

    //function to get data for you might also like  section
    const youmightalsolike = async () => {
        try {
            await axios.get(`api/product`).then(res => {
                setYouMight(res.data.products.data.slice(0, 3))
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    // get the product data

    const getProductData = async () => {
        try {
            await axios.get(`api/product/${props.params.id}`).then(res => {
                setProduct(res.data.product)
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    //fetch data
    useEffect(() => {
        getProductData()
        youmightalsolike()
    }, [])

    return (
        <>
            <div className="relative min-h-[40vh]">
                {Object.keys(product).length == 0 && (
                    <Loader
                        style="bg-transparent"
                        childStyle=" justify-center items-center    "></Loader>
                )}
                {Object.keys(product).length > 0 && <Item product={product} />}
            </div>

            <Preview title="You might also like">
                <div className="flex flex-wrap justify-center gap-4 mb-10 min-h-[40vh] w-full relative">
                    {Object.keys(youMightAlsoLike).length > 0 &&
                        youMightAlsoLike.map(product => (
                            <ClothItem key={product.id} {...product} />
                        ))}
                    {Object.keys(youMightAlsoLike).length == 0 && (
                        <Loader
                            style="bg-transparent"
                            childStyle=" justify-center items-center "></Loader>
                    )}
                </div>
            </Preview>
        </>
    )
}
export default ItemPage
