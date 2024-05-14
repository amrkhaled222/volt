'use client'
import Image from 'next/image'
import redArrow from '../_assets/redArrow.png'
import greenArrow from '../_assets/greenArrows.png'
import revenue from '../_assets/revenue.png'
import orderSammary from '../_assets/orderSummary.png'
import customersSammary from '../_assets/customersSummary.png'
import visitor from '../_assets/visitor.png'
import dolar from '../_assets/dolar.png'
import { opensans } from '@/font'
function Stats({stat} , props) {
    // let num = props.state.thisMonth.value - props.state.lastMonth.value
    // num = Math.round((num / props.state.lastMonth.value) * 100)

    // let precent = num < 0 ? num / -1 : num
    // let stateIncreased =
    //     props.state.lastMonth.value > props.state.thisMonth.value ? false : true

    return (
        <div className="bg-white shadow-md flex flex-col py-5 px-6 pb-9 rounded-2xl  gap-5 capitalize hover:scale-95 duration-300  min-w-[260px] ">
            <h2 className="font-bold text-sm ">{stat[0]}</h2>
            <div className=" flex items-center justify-between gap-7">
                <div className="flex gap-2 items-center">
                    <Image
                        src={
                            stat[0] == 'total revenue'
                                ? revenue
                                : stat[0] == 'total orders'
                                ? orderSammary
                                : customersSammary
                        }
                        className="w-9 h-9"
                        alt="descriptive Image"></Image>{' '}
                    <span className=" font-semibold flex items-center">

                        {stat[1]}
                    </span>
                </div>
                {/* <span
                    className={`flex items-center text-sm gap-2 relative ${opensans.className} 
                    
                 `}>
                    <Image
                        className="w-4 h-4"
                        alt="arrow"
                        src={
                            stateIncreased ? greenArrow : redArrow
                        }></Image>{' '}
                    {precent}%
                    <span
                        className={` absolute block w-40 top-7 -left-16  font-bold text-[12px]  text-seconderyItemColor`}>
                        {' '}
                        compare to {props.state.lastMonth.date}
                    </span> */}
                {/* </span> */}
            </div>
        </div>
    )
}
export default Stats
