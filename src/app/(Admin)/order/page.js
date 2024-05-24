'use client'
import Table from '@/components/Admin/Table'
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Loader from '@/components/Loader'
export default function OrderList() {
    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState({})
    const [loader, setLoader] = useState(true)

    const getAllOrder = async () => {
        setLoader(true)
        await axios.get(`api/order?page=${currentPage}`).then(res => {
            setAllData(res.data[0][1])

            setLoader(false)
        })
    }

    useEffect(() => {
        getAllOrder()
    }, [currentPage])
    return (
        <div className="p-4 flex flex-col gap-3">
            {loader && (
                <Loader
                    style="bg-transparent "
                    childStyle="flex justify-center items-center"></Loader>
            )}
            {!loader && (
                <div className="flex flex-col gap-8">
                    <Table
                        data={allData.data}
                        header={'recent purchases'}></Table>

                    <ReactPaginate
                        previousLabel="Previous"
                        nextLabel="Next"
                        pageCount={allData.last_page}
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
            )}
        </div>
    )
}
