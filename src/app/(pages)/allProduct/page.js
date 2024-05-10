'use client'
import Product from '@/app/_components/product'
import ProductData from '@/app/_components/product.json'

import Pagination from '@/app/_components/Pagination'
import { useEffect, useState } from 'react'
import { products } from '@/app/_components/client/products'
import ReactPaginate from 'react-paginate'

export default function AllProduct() {
    const [product, setProduct] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(12)
    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    const currentRecords = ProductData.slice(
        indexOfFirstRecord,
        indexOfLastRecord,
    )

    const nPages = Math.ceil(ProductData.length / recordsPerPage)

    useEffect(() => {
        const data = fetch('http://localhost:8000/api/product')
            .then(res => {
                return res.json()
            })
            .then(product => {
                setProduct(product)
            })
    })

    return (
        <div className="p-4 flex flex-col gap-4">
            <div className="grid md:grid-cols-autoFlow grid-cols-autoFlowMobile gap-4 justify-evenly">
                {Object.keys(currentRecords).map((e, i) => {
                    return (
                        <Product {...currentRecords[e]} key={i + 1}></Product>
                    )
                })}
            </div>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}></Pagination>
        </div>
    )
}
