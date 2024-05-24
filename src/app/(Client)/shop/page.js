'use client'

import Filter from '@/components/Client/Filter'
import MobileFilter from '@/components/Client/MobileFilter'
import ClothItem from '@/components/Client/ClothItem'
import Image from 'next/image'
import settingsIconBlack from '@/app/_assets/setting-lines-black.png'
import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'
import Loader from '@/components/Loader'
import axios from '@/lib/axios'

function CategoryPage(props) {
    let search = props.searchParams
    let title = ''

    const [allData, setAllData] = useState({})
    const [loader, setLoader] = useState(true)
    const [page, setPage] = useState(1)
    const [display, setDisplay] = useState(false)

    const fetchAllData = async () => {
        try {
            setLoader(true)

            await axios
                .get(
                    `api/product?${Object.keys(search).map(e => {
                        return `${e}=${search[e]}`
                    })}&page=${page} `,
                )
                .then(res => {
                    setAllData(res.data.products)

                    setLoader(false)
                })
        } catch (err) {
            throw new Error(err)
        }
    }

    if (search.category_id) {
        if (search.category_id == '1') {
            title = 'casual'
        } else if (search.category_id == '2') {
            title = 'formal'
        } else if (search.category_id == '4') {
            title = 'party'
        } else if (search.category_id == '3') {
            title = 'gym'
        }
    } else if (search?.best_seller) {
        title = 'best seller'
    } else {
        title = 'shop'
    }

    useEffect(() => {
        fetchAllData()
    }, [page])

    useEffect(() => {
        setPage(1)
        search = props.searchParams
        fetchAllData()
    }, [props.searchParams])

    function handleDisplay() {
        setDisplay(!display)
    }

    return (
        <section className=" relative mt-8">
            {display && <MobileFilter display={handleDisplay} />}
            <div className="  container px-4 m-auto max-w-7xl">
                <div className=" z-0 flex justify-center md:justify-normal gap-6">
                    <Filter />
                    <div className=" lg:min-w-[80%] md:min-w-[75] w-full p-4 flex flex-col min-h-[80vh]">
                        <div className="flex justify-between mb-4  relative ">
                            <h2 className=" capitalize font-plusj font-bold text-3xl">
                                {' '}
                                {title}
                            </h2>

                            <div className=" flex justify-center items-center bg-main_gray md:hidden w-8 h-8 rounded-[50%]">
                                <button className="" onClick={handleDisplay}>
                                    <Image
                                        src={settingsIconBlack}
                                        alt=""
                                        className="w-5 h-5"
                                    />
                                </button>
                            </div>
                        </div>
                        {allData?.data?.length == 0 && !loader && (
                            <div className="  ">
                                <h2 className=" font-bold text-xl">
                                    opps!! there is no data match you search
                                </h2>
                            </div>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 relative md:grid-cols-3 xl:grid-cols-3 gap-7 min-h-[70vh] min-w-[80%]">
                            {loader && (
                                <Loader style="min-h-[100%] bg-transparent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "></Loader>
                            )}
                            {!loader &&
                                allData.data.map(product => (
                                    <ClothItem key={product.id} {...product} />
                                ))}
                        </div>
                        <hr className="h-1 bg-hrColor my-4" />
                        {allData?.last_page > 1 && (
                            <div className="mt-5">
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    currentPage={allData.current_page}
                                    pageCount={allData.last_page}
                                    onPageChange={e => setPage(e.selected + 1)}
                                    breakLabel="..."
                                    containerClassName="flex gap-2 justify-between items-center max-w[70%]"
                                    previousLinkClassName="border p-2 rounded-lg hover:scale-95 duration-300  "
                                    nextLinkClassName="border py-2 px-4 rounded-lg hover:scale-95 duration-300 "
                                    activeClassName="bg-black text-white"
                                    pageClassName=" rounded-lg hover:scale-95 duration-300  "
                                    pageLinkClassName=" px-3 py-1  rounded-lg border hidden sm:flex "
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CategoryPage
