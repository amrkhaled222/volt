'use client'
import ItemPreview from '@/app/_components/client/ItemPreview'
import Preview from '@/app/_components/client/Preview'
import Footer from '@/app/_components/client/Footer'
import MobileNav from '@/app/_components/client/MobileNav'
import Nav from '@/app/_components/client/Nav'
import ClothItem from '@/app/_components/client/ClothItem'

import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import Loader from '@/app/_components/Loader'

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
            await axios.get(`api/product/${props.params.product}`).then(res => {
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
        <main>
            <header>
                <div className="container px-4 m-auto max-w-7xl">
                    <MobileNav />
                    <Nav />
                </div>
            </header>
            <div className="relative min-h-[40vh]">
                {Object.keys(product).length == 0 && (
                    <Loader
                        style="bg-transparent"
                        childStyle=" justify-center items-center    "></Loader>
                )}
                {Object.keys(product).length > 0 && (
                    <ItemPreview product={product} />
                )}
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

            <Footer />
        </main>
    )
}
export default ItemPage
