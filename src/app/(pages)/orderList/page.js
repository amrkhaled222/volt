'use client'
import Table from '@/app/_components/Table'
import tableData from '@/app/_components/tableData'
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Loader from '@/app/_components/Loader'
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
            {loader && <Loader></Loader>}
            {!loader && (
                <>
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
                        containerClassName="flex justify-between items-center max-w-[400px]"
                        previousLinkClassName="border p-2 rounded-md"
                        nextLinkClassName="border py-2 px-4 rounded-md"
                        activeClassName="bg-black text-white"
                        pageClassName="px-2 py-1 rounded-md border "
                    />
                </>
            )}
        </div>
    )
}
