'use client'
import Product from '@/app/_components/product'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Loader from '@/app/_components/Loader'
import axios from '@/lib/axios'
export default function AllProduct() {
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const getAllProduct = async () => {
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
        <div className="p-4 flex flex-col gap-4">
            {loader ? (
                <Loader></Loader>
            ) : (
                <div>
                    <div className="grid md:grid-cols-autoFlow grid-cols-autoFlowMobile gap-4 justify-evenly min-h-[80vh]">
                        {product.data.map((e, i) => {
                            return <Product {...e} key={e.id}></Product>
                        })}

                        <ReactPaginate
                            previousLabel="Previous"
                            nextLabel="Next"
                            pageCount={product.last_page}
                            onPageChange={e => {
                                setCurrentPage(e.selected + 1)
                            }}
                            breakLabel="..."
                            containerClassName="flex justify-between items-center max-w-[400px]"
                            previousLinkClassName="border p-2 rounded-md"
                            nextLinkClassName="border py-2 px-4 rounded-md"
                            activeClassName="bg-black text-white"
                            pageClassName="px-2 py-1 rounded-md border "
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
