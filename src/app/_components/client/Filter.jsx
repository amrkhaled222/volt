'use client'
import { useState } from 'react'
import settingsIcon from '@/app/_assets/setting-lines.png'
import FilterButton from '@/app/_components/client/FilterButton'
import Button from '@/app/_components/client/Button'
import arrowRightBlack from '@/app/_assets/right-arrow-black.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
function Filter() {
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
        <aside className=" md:w-[25%] xl:w-[20%] hidden md:block  rounded-xl border-2 border-solid border-main_gray p-3 ">
            <div className="flex justify-between">
                <h4 className=" font-plusj font-bold">Filter</h4>
                <button onClick={handleSettingsClick} className=" w-5 h-5">
                    <Image
                        src={settingsIcon}
                        alt="setting"
                        className={imageClasses}
                    />
                </button>
            </div>

            <hr className="h-1 bg-hrColor my-4" />

            <div
                onClick={handleArrowClicked}
                className="flex justify-between mb-4 cursor-pointer duration-300 hover:scale-95">
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
                            filterFunc('category_id=4')
                        }}>
                        <FilterButton title="Party" />
                    </li>
                    <li
                        onClick={() => {
                            filterFunc('category_id=3')
                        }}>
                        <FilterButton title="Gym" />
                    </li>
                </ul>
            )}
        </aside>
    )
}
export default Filter
