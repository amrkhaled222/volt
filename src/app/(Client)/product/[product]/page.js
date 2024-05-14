'use client'
import ItemPreview from '@/app/_components/client/ItemPreview'
import Preview from '@/app/_components/client/Preview'
import Footer from '@/app/_components/client/Footer'
import MobileNav from '@/app/_components/client/MobileNav'
import Nav from '@/app/_components/client/Nav'
import ClothItem from '@/app/_components/client/ClothItem'
import { products } from '@/app/_components/client/products'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import Loader from '@/app/_components/Loader'

function ItemPage(props) {
    const [product, setProduct] = useState({})
    const [similar, setSimilar] = useState([])
    const [youMightAlsoLike, setYouMight] = useState({})
    console.log(youMightAlsoLike)
    const youmightalsolike = async () => {
        try {
            await axios.get(`api/product`).then(res => {
                setYouMight(res.data.products.data.slice(0, 3))
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    const fetchAllData = async () => {
        try {
            await axios.get(`api/product`).then(res => {
                setSimilar(res.data.products.data.slice(0, 3))
            })
        } catch (err) {
            throw new Error(err)
        }
    }
    const getProductData = async () => {
        try {
            await axios.get(`api/product/${props.params.product}`).then(res => {
                setProduct(res.data.product)
                console.log(res.data.product)
                console.log(props)
            })
        } catch (err) {
            throw new Error(err)
        }
    }
    useEffect(() => {
        getProductData()
        fetchAllData()
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
                            childStyle=" justify-center items-center    "></Loader>
                    )}
                </div>
            </Preview>

            <Footer />
        </main>
    )
}
export default ItemPage
