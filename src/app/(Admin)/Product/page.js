'use client'
import Product from '@/components/Admin/product'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Loader from '@/components/Loader'
import axios from '@/lib/axios'
export default function AllProduct() {
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const getAllProduct = async () => {
        setLoader(true)
        try {
            await axios.get(`api/product/?page=${currentPage}`).then(res => {
                setProduct(res.data.products)
                setLoader(false)
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    useEffect(() => {
        getAllProduct()
    }, [currentPage])

    return (
        <div className="p-4 flex flex-col gap-8 min-h-[60vh]">
            <div className="grid  md:grid-cols-autoFlow grid-cols-autoFlowMobile relative gap-4 justify-evenly min-h-[80vh]">
                {loader ? (
                    <Loader childStyle="flex justify-center items-center"></Loader>
                ) : (
                    product.data.map((e, i) => {
                        return <Product {...e} key={e.id}></Product>
                    })
                )}
            </div>

            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageCount={product.last_page}
                onPageChange={e => {
                    setCurrentPage(e.selected + 1)
                }}
                breakLabel="..."
                breakClassName="sm:block hidden"
                containerClassName="flex justify-between items-center w-full px-4 "
                previousLinkClassName="border p-2 rounded-md border-black"
                nextLinkClassName="border py-2 px-4 rounded-md border-black"
                activeClassName="bg-black text-white"
                pageClassName="rounded-md border border-black hover:scale-95 duration-300 hidden sm:block"
                pageLinkClassName="px-2 py-1 "
            />
        </div>
    )
}
