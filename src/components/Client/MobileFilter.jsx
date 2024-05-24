'use client'
import { useState } from 'react'
import FilterButton from '@/components/Client/FilterButton'
import arrowRightBlack from '@/app/_assets/right-arrow-black.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function MobileFilter({ display }) {
    let [isClicked, setIsClicked] = useState(false)

    let [isdressStyleClicked, setIsClickedDressStyleClicked] = useState(false)

    function handleSettingsClick() {
        setIsClicked(!isClicked)
    }

    let router = useRouter()
    const filterFunc = filter => {
        router.push(`/shop?${filter} `)
    }
    let imageClasses = `duration-200 ${isClicked ? 'rotate' : ''}`

    let arrowClasses = `duration-200 ${isdressStyleClicked ? 'rotate' : ''}`

    function handleArrowClicked() {
        setIsClickedDressStyleClicked(!isdressStyleClicked)
    }
    return (
        <aside className="  z-10  md:hidden absolute bg-white top-20 w-[80%] left-[50%] -translate-x-[50%] rounded-xl border-2 border-solid border-main_gray p-4">
            <div className="flex justify-between">
                <h4 className=" font-plusj font-bold">Filter</h4>
            </div>

            <hr className="h-1 bg-hrColor my-4" />

            <div
                onClick={handleArrowClicked}
                className="flex justify-between mb-4">
                <h4 className=" font-plusj font-bold">Dress Style</h4>

                <Image
                    src={arrowRightBlack}
                    alt=""
                    className={arrowClasses + ' w-4 h-4'}
                />
            </div>

            {isdressStyleClicked && (
                <ul>
                    <li
                        onClick={() => {
                            filterFunc('category_id=1')
                        }}>
                        <FilterButton title="Casual" />
                    </li>
                    <li
                        onClick={() => {
                            filterFunc('category_id=2')
                        }}>
                        <FilterButton title="Formal" />
                    </li>
                    <li
                        onClick={() => {
                            filterFunc('category_id=3')
                        }}>
                        <FilterButton title="Party" />
                    </li>
                    <li
                        onClick={() => {
                            filterFunc('category_id=4')
                        }}>
                        <FilterButton title="Gym" />
                    </li>
                </ul>
            )}
        </aside>
    )
}
export default MobileFilter
