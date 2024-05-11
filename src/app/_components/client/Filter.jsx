'use client'
import { useState } from 'react'
import settingsIcon from '@/app/_assets/setting-lines.png'
import FilterButton from '@/app/_components/client/FilterButton'
import Button from '@/app/_components/client/Button'
import arrowRightBlack from '@/app/_assets/right-arrow-black.png'
import Image from 'next/image'
function Filter() {
    let [isClicked, setIsClicked] = useState(false)

    let [isdressStyleClicked, setIsClickedDressStyleClicked] = useState(false)

    function handleSettingsClick() {
        setIsClicked(!isClicked)
    }

    let imageClasses = `duration-200 ${isClicked ? 'rotate' : ''}`

    let arrowClasses = `duration-200 ${isdressStyleClicked ? 'rotate' : ''}`

    function handleArrowClicked() {
        setIsClickedDressStyleClicked(!isdressStyleClicked)
    }
    return (
        <aside className=" md:w-[25%] xl:w-[20%] hidden md:block  rounded-xl border-2 border-solid border-main_gray p-3 ">
            <div className="flex justify-between mb-4">
                <h4 className=" font-plusj font-bold">Dress Style</h4>

                <button onClick={handleArrowClicked} className=" w-4 h-4">
                    <Image
                        src={arrowRightBlack}
                        alt=""
                        className={arrowClasses}
                    />
                </button>
            </div>

            {isdressStyleClicked && (
                <ul>
                    <li>
                        <FilterButton title="Casual" />
                    </li>
                    <li>
                        <FilterButton title="Formal" />
                    </li>
                    <li>
                        <FilterButton title="Party" />
                    </li>
                    <li>
                        <FilterButton title="Gym" />
                    </li>
                </ul>
            )}

            <div className=" my-5">
                <Button
                    title="Apply Filter"
                    bg_color="bg-black"
                    text_color="text-white"
                    mobile_width="w-full"
                    pc_width="w-full"
                />
            </div>
        </aside>
    )
}
export default Filter
